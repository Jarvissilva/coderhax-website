import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "components/head";
import fetchApi from "helpers/fetchApi";

export default function Verify({ setReAuthenticate }) {
  const [message, setMessage] = useState("Verifying please wait");
  const { query, replace } = useRouter();

  const verifyLoginToken = async () => {
    if (query.token) {
      const res = await fetchApi("/users/verify", "POST", {
        verificationToken: query.token,
      });
      setMessage(res.message);
      setReAuthenticate(res.success);
      setTimeout(() => replace(res.success ? "/" : "/users/login"), 2000);
    }
  };

  useEffect(() => {
    verifyLoginToken();
  }, [query.token]);

  return (
    <>
      <Head
        title="Verify User - Coderhax"
        description="Verify user"
        url={`${process.env.SITE_URL}/users/verify`}
        index={false}
      />
      <div className="bg-white p-[clamp(1.5rem,5vw,2.5rem)] m-auto lg:max-w-[60%] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <p className="text-center text-2xl font-semibold">{message}</p>
      </div>
    </>
  );
}
