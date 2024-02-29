import { useState } from "react";
import { useRouter } from "next/router";
import Head from "components/head";
import fetchApi from "helpers/fetchApi";
import Editor from "components/editor";

export default function NewSnippet({ setReAuthenticate }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    code: "",
    output: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { replace } = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetchApi("/snippets/new", "POST", formData);
    alert(res.message);
    if (res.success) {
      setReAuthenticate(true);
      replace({
        pathname: "/snippets/[category]/[snippet]",
        query: {
          category: formData.category,
          snippet: formData.title
            .trim()
            .toLowerCase()
            .replaceAll(/  +/g, " ")
            .replaceAll(" ", "-"),
        },
      });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Head
        title="New Snippet - Coderhax"
        description="Create new code snippet"
        url={`${process.env.SITE_URL}/snippets/new`}
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.8rem,5vw,2.6rem)] font-black">
            New Snippet
          </h1>
          <button
            className="bg-blue-500 text-white px-[clamp(.8rem,2vw,1.4rem)] py-[clamp(.4rem,2vw,.7rem)] rounded-md sm:font-medium hover:bg-blue-600 focus:bg-blue-600 focus:ring focus:ring-blue-300"
            form="cs-form"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Publishing" : "Publish"}
          </button>
        </div>
        <form
          id="cs-form"
          className="space-y-[clamp(1.25rem,5vw,1.5rem)] p-[1vw]"
          onSubmit={handleFormSubmit}
        >
          <div className="space-y-3">
            <label htmlFor="cs-title" className="text-lg font-medium">
              Title
            </label>
            <input
              id="cs-title"
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
            <label htmlFor="cs-category" className="text-lg font-medium">
              Category
            </label>
            <select
              id="cs-category"
              name="category"
              value={formData.category}
              placeholder="Enter snippet category"
              className="w-full p-5 bg-white border border-gray-200 rounded-md outline-blue-500 appearance-none"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            >
              <option disabled value="">
                Select a snippet language
              </option>
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c">C</option>
            </select>
            <span className="absolute right-4 top-[55%] mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-gray-400 border-r-2 border-b-2"></span>
          </div>
          <div className="space-y-3">
            <label htmlFor="cs-code" className="text-lg font-medium">
              Code
            </label>
            <textarea
              id="cs-code"
              name="code"
              value={formData.code}
              placeholder="Enter code"
              className="w-full min-h-[400px] p-5 whitespace-pre-wrap bg-black text-white border border-gray-200 rounded-md overflow-auto"
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value })
              }
              maxLength={100000}
              required
            ></textarea>
          </div>
          <div className="space-y-3">
            <label htmlFor="cs-output" className="text-lg font-medium">
              Output
            </label>
            <textarea
              id="cs-output"
              name="output"
              value={formData.output}
              placeholder="Enter code output"
              className="w-full min-h-[100px] p-5 whitespace-pre-wrap bg-gray-100 border border-gray-200 rounded-md outline-blue-500 overflow-auto"
              onChange={(e) =>
                setFormData({ ...formData, output: e.target.value })
              }
              maxLength={10000}
            ></textarea>
          </div>
          <div className="space-y-3">
            <label htmlFor="cs-description" className="text-lg font-medium">
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
