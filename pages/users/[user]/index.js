import Link from "next/link";
import { useRouter } from "next/router";
import { RiShareForwardLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";
import Card from "components/card";
import Head from "components/head";
import fetchApi from "helpers/fetchApi";
import connectDatabase from "database/connect";
import UserModel from "database/models/User";

export default function User({ user, loggedUser, setReAuthenticate }) {
  const { push } = useRouter();

  const logoutUser = async () => {
    const res = await fetchApi("/users/logout");
    alert(res.message);
    if (res.success) {
      setReAuthenticate(true);
      push("/users/login");
    }
  };

  return (
    <>
      <Head
        title={`${user.username} ${user.name && `(${user.name})`} - Coderhax`}
        description={user.description}
        url={`${process.env.SITE_URL}/users/${user.username}`}
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <div className="text-[clamp(1.5rem,5vw,2rem)] font-black">
            <h1>{user.username}</h1>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={() =>
                navigator.share({
                  title: user.username,
                  url: `/users/${user.username}`,
                })
              }
              title="Share"
              aria-label="Share"
            >
              <RiShareForwardLine size={30} className="hover:scale-110" />
            </button>
            {loggedUser && loggedUser.username == user.username ? (
              <>
                <Link
                  href="/users/edit"
                  rel="nofollow"
                  title="Edit snippet"
                  aria-label="Edit snippet"
                >
                  <FiEdit size={25} className="hover:scale-110" />
                </Link>
                <button onClick={logoutUser} title="Logout" aria-label="Logout">
                  <BiLogOut size={25} className="hover:scale-110" />
                </button>
              </>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 px-[5vw] text-center">
          <div className="w-36 h-36 flex justify-center items-center bg-blue-600 rounded-full">
            <span className="text-white text-6xl font-semibold capitalize">
              {user.username.charAt(0)}
            </span>
          </div>
          <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-extrabold capitalize">
            {user.name && user.name}
          </h2>
          <p className="font-medium">
            {user.description && decodeURIComponent(user.description)}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {user.snippets.map((snippet) => (
            <Card key={snippet._id} snippet={snippet} loggedUser={loggedUser} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  await connectDatabase();
  const users = await UserModel.find();
  return {
    paths: users.map((user) => ({
      params: { user: user.username },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  await connectDatabase();
  const user = await UserModel.findOne({
    username: params.user,
  }).populate("snippets");
  if (!user) return { notFound: true };
  return { props: { user: JSON.parse(JSON.stringify(user)) } };
}
