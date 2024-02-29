import { useState } from "react";
import Link from "next/link";
import Head from "components/head";
import fetchApi from "helpers/fetchApi";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetchApi("/users/register", "POST", formData);
    alert(res.message);
    console.log(res);
    if (res.success) setFormData({ username: "", email: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Head
        title="Register - Coderhax"
        description="Register on coderhax"
        url={`${process.env.SITE_URL}/users/register`}
        index={true}
      />
      <div className="bg-white p-[clamp(1.5rem,5vw,2.5rem)] m-auto lg:max-w-[60%] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="text-center">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-black">
            Create Account
          </h1>
          <p className="text-lg">Register on coderhax</p>
        </div>
        <form
          className="space-y-[clamp(1.25rem,5vw,1.5rem)]"
          onSubmit={handleFormSubmit}
        >
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              className="w-full p-3 pl-12 border border-gray-200 rounded-md outline-blue-500 placeholder-[#929DA7]"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              maxLength={30}
              pattern="^[a-z][\w\.]*[a-z0-9]$"
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
                    d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z"
                    fill="#637381"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5006 7.21339 12.5006 5.83268C12.5006 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z"
                    fill="#637381"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
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
          <div className="flex items-center">
            <input
              id="r-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 rounded-md border-gray-200"
              required
            />
            <label
              htmlFor="r-checkbox"
              className="font-medium text-sm sm:text-base text-gray-900 ml-2"
            >
              I agree with the{" "}
              <Link
                href="/terms-of-service"
                className="text-blue-600 hover:text-blue-400 hover:underline"
              >
                terms of service
              </Link>
            </label>
          </div>
          <div>
            <button
              className="bg-blue-600 text-white w-full py-4 font-medium rounded-md hover:bg-blue-700 focus:bg-blue-700 focus:ring focus:ring-blue-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering ..." : "Register"}
            </button>
          </div>
        </form>
        <div className="text-center font-medium">
          <p>
            Already have a account?{" "}
            <Link
              href="/users/login"
              className="text-blue-600 hover:text-blue-400"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
