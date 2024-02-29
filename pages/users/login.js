import { useState } from "react";
import Link from "next/link";
import Head from "components/head";
import fetchApi from "helpers/fetchApi";

export default function Login() {
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetchApi("/users/login", "POST", formData);
    alert(res.message);
    console.log(res);
    if (res.success) setFormData({ email: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Head
        title="Login - Coderhax"
        description="Login on coderhax"
        url={`${process.env.SITE_URL}/users/login`}
        index={true}
      />
      <div className="bg-white p-[clamp(1.5rem,5vw,2.5rem)] m-auto lg:max-w-[60%] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="text-center">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-black">
            Welcome Back
          </h1>
          <p className="text-lg">Login to coderhax</p>
        </div>
        <form
          className="space-y-[clamp(1.25rem,5vw,1.5rem)]"
          onSubmit={handleFormSubmit}
        >
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              className="w-full p-3 pl-12 border border-gray-200 rounded-md outline-blue-500 placeholder-[#929DA7]"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              pattern="^([a-z\d][\w\-\.]+[a-z\d])@([a-z\d]([a-z\d-]*[a-z\d])*)\.([a-z]+(\.[a-z]{2,6})?)$"
              maxLength={60}
              required
            />
            <span className="absolute top-1/2 left-4 -translate-y-1/2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.33398 4.16667C2.87756 4.16667 2.50065 4.54357 2.50065 5V15C2.50065 15.4564 2.87756 15.8333 3.33398 15.8333H16.6673C17.1238 15.8333 17.5007 15.4564 17.5007 15V5C17.5007 4.54357 17.1238 4.16667 16.6673 4.16667H3.33398ZM0.833984 5C0.833984 3.6231 1.95708 2.5 3.33398 2.5H16.6673C18.0442 2.5 19.1673 3.6231 19.1673 5V15C19.1673 16.3769 18.0442 17.5 16.6673 17.5H3.33398C1.95708 17.5 0.833984 16.3769 0.833984 15V5Z"
                    fill="#637381"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.984696 4.52154C1.24862 4.14449 1.76823 4.0528 2.14527 4.31673L10.0007 9.81554L17.8562 4.31673C18.2332 4.0528 18.7528 4.14449 19.0167 4.52154C19.2807 4.89858 19.189 5.41818 18.8119 5.68211L10.4786 11.5154C10.1917 11.7163 9.80977 11.7163 9.52284 11.5154L1.1895 5.68211C0.812463 5.41818 0.720767 4.89858 0.984696 4.52154Z"
                    fill="#637381"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div>
            <button
              className="bg-blue-600 text-white w-full py-4 font-medium rounded-md hover:bg-blue-700 focus:bg-blue-700 focus:ring focus:ring-blue-300 "
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging In..." : "Login"}
            </button>
          </div>
        </form>
        <div className="text-center font-medium">
          <p>
            Dont have a account?{" "}
            <Link
              href="/users/register"
              className="text-blue-600 hover:text-blue-400"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
