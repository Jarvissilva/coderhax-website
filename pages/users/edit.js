import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import Head from "components/head";
import fetchApi from "helpers/fetchApi";

export default function EditUser({ loggedUser, setReAuthenticate }) {
  const [formData, setFormData] = useState({
    username: loggedUser.username,
    name: loggedUser.name,
    description: decodeURIComponent(loggedUser.description),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetchApi("/users/edit", "POST", formData);
    alert(res.message);
    if (res.success) setReAuthenticate(true);
    setIsSubmitting(false);
  };

  return (
    <>
      <Head
        title="Edit User - Coderhax"
        description="Edit user"
        url={`${process.env.SITE_URL}/users/edit`}
        index={false}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex items-center">
          <button onClick={() => history.back()}>
            <MdArrowBackIos
              size={30}
              className="sm:w-[40px] h-[40px] hover:scale-110"
            />
          </button>
          <h1 className="grow text-[clamp(1.8rem,5vw,2.6rem)] font-black">
            Edit User
          </h1>
          <button
            className="bg-blue-600 text-white px-[clamp(.8rem,2vw,1.4rem)] py-[clamp(.4rem,2vw,.7rem)] rounded-md sm:font-medium hover:bg-blue-700 focus:bg-blue-700 focus:ring focus:ring-blue-300"
            form="ep-form"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving" : "Save"}
          </button>
        </div>
        <form
          id="ep-form"
          className="space-y-[clamp(1.25rem,5vw,1.5rem)] p-[1vw]"
          onSubmit={handleFormSubmit}
        >
          <div className="space-y-3">
            <label htmlFor="ep-username" className="text-lg font-medium">
              Username
            </label>
            <input
              id="ep-username"
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter a username"
              className="w-full p-5 border border-gray-200 rounded-md outline-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              maxLength={30}
              pattern="^[a-z][\w\.]+[a-z0-9]$"
              required
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="ep-name" className="text-lg font-medium">
              Name
            </label>
            <input
              id="ep-name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your full name"
              className="w-full p-5 border border-gray-200 rounded-md outline-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              maxLength={40}
              pattern="^([A-Za-z\d]+\s)*[A-Za-z\d]+$"
              required
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="ep-description" className="text-lg font-medium">
              Description
            </label>
            <textarea
              id="ep-description"
              name="description"
              value={formData.description}
              placeholder="Enter profile description"
              className="w-full min-h-[200px] p-5 border border-gray-200 rounded-md outline-blue-500 overflow-auto"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              maxLength={150}
              pattern="^([\w\p{P}\p{S}]+\s)*[\w\p{P}\p{S}]+$"
              required
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}

EditUser.protected = true;
