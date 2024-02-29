import { useState } from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import { MdArrowBackIos } from "react-icons/md";
import Head from "components/head";
import Editor from "components/editor";
import fetchApi from "helpers/fetchApi";

export default function EditSnippet({ loggedUser, setReAuthenticate }) {
  const { query } = useRouter();
  const snippet = loggedUser.snippets.find((s) => s._id == query.id);

  const [formData, setFormData] = useState({
    title: snippet.title,
    category: snippet.category,
    code: decodeURIComponent(snippet.code),
    output: snippet.output && decodeURIComponent(snippet.output),
    description: decodeURIComponent(snippet.description),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetchApi(`/snippets/edit/${snippet._id}`, "POST", {
      ...formData,
    });
    alert(res.message);
    if (res.success) setReAuthenticate(true);
    setIsSubmitting(false);
  };

  if (!snippet) return <Error statusCode={401} title="Unauthorized" />;

  return (
    <>
      <Head
        title={`Edit Snippet "${snippet.title}" - Coderhax`}
        description="Edit snippet"
        url={`${process.env.SITE_URL}/snippets/edit/${snippet._id}`}
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
            Edit Snippet
          </h1>
          <button
            className="bg-blue-600 text-white px-[clamp(.8rem,2vw,1.4rem)] py-[clamp(.4rem,2vw,.7rem)] rounded-md sm:font-medium hover:bg-blue-700 focus:bg-blue-700 focus:ring focus:ring-blue-300"
            form="es-form"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving" : "Save"}
          </button>
        </div>
        <form
          id="es-form"
          className="space-y-[clamp(1.25rem,5vw,1.5rem)] p-[1vw]"
          onSubmit={handleFormSubmit}
        >
          <div className="space-y-3">
            <label htmlFor="es-title" className="text-lg font-medium">
              Title
            </label>
            <input
              id="es-title"
              type="text"
              name="title"
              value={formData.title}
              placeholder="Enter snippet title"
              className="w-full p-5 border border-gray-200 rounded-md outline-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              pattern="^([a-zA-Z\d]+\s)*[a-zA-Z\d]+$"
              maxLength={250}
              required
            />
          </div>
          <div className="space-y-3 relative">
            <label htmlFor="es-category" className="text-lg font-medium">
              Category
            </label>
            <select
              id="es-category"
              name="category"
              value={formData.category}
              placeholder="Enter snippet category"
              className="w-full p-5 bg-white border border-gray-200 rounded-md outline-blue-500 appearance-none"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            >
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c">C</option>
            </select>
            <span className="absolute right-4 top-[55%] mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-gray-400 border-r-2 border-b-2"></span>
          </div>
          <div className="space-y-3">
            <label htmlFor="es-code" className="text-lg font-medium">
              Code
            </label>
            <textarea
              id="es-code"
              name="code"
              value={formData.code}
              placeholder="Enter code"
              className="w-full min-h-[400px] p-5 whitespace-pre-wrap bg-black text-white border border-gray-200 rounded-md overflow-auto"
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value })
              }
              required
              maxLength={100000}
            ></textarea>
          </div>
          <div className="space-y-3">
            <label htmlFor="es-output" className="text-lg font-medium">
              Output
            </label>
            <textarea
              id="es-output"
              name="output"
              value={formData.output && formData.output}
              placeholder="Enter code output"
              className="w-full min-h-[100px] p-5 whitespace-pre-wrap bg-gray-100 border border-gray-200 rounded-md outline-blue-500 overflow-auto"
              onChange={(e) =>
                setFormData({ ...formData, output: e.target.value })
              }
              maxLength={10000}
            ></textarea>
          </div>
          <div className="space-y-3">
            <label htmlFor="es-description" className="text-lg font-medium">
              Description
            </label>
            <Editor
              value={formData.description}
              onChange={(content) =>
                setFormData({ ...formData, description: content })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}

EditSnippet.protected = true;
