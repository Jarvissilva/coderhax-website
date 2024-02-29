import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const Card = ({ snippet, loggedUser }) => {
  return (
    <>
      <div className="w-[47%] sm:w-[30%] lg:w-[22%] bg-white p-4 space-y-3 lg:space-y-2 border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <Link
            href={`/snippets/${snippet.category}`}
            className="flex items-center text-blue-600 text-base font-extrabold hover:text-blue-400 capitalize"
          >
            <FaCode size={25} className="inline mr-1" />
            {snippet.category}
          </Link>
          {loggedUser &&
          loggedUser.snippets.find((s) => s.slug == snippet.slug) ? (
            <Link
              href={`/snippets/edit/${snippet._id}`}
              rel="nofollow"
              aria-label="Edit snippet"
              title="Edit snippet"
            >
              <FiEdit size={15} className="hover:scale-110" />
            </Link>
          ) : null}
        </div>
        <div className="text-gray-800 text-[clamp(0.9rem,2.5vw,1rem)] font-bold break-all hover:text-gray-500">
          <h2>
            <Link href={`/snippets/${snippet.category}/${snippet.slug}`}>
              {snippet.title}
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Card;
