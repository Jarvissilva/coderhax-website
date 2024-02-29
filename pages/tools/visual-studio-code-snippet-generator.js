import { useState } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import Head from "components/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function VisualStudioCodeSnippetGenerator() {
  const [formData, setFormData] = useState({
    name: "",
    prefix: "",
    description: "",
    body: "",
  });

  let n = formData.body.split("\n");
  console.log(n);

  return (
    <>
      <Head
        title="Visual Studio Code Snippet Generator - Coderhax"
        description="Now easily generate snippets for visual studio code with our vs code
        snippet generator tool"
        url="/tools/visual-studio-code-snippet-generator"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            Visual Studio Code Snippet Generator
          </h1>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: "Visual Studio Code Snippet Generator",
                url: "/tools/visual-studio-code-snippet-generator",
              })
            }
            title="Share"
            aria-label="Share"
          >
            <RiShareBoxLine size={30} className="hover:scale-110" />
          </button>
        </div>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-left font-normal">
          Now easily generate snippets for visual studio code with our vs code
          snippet generator tool
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row flex-wrap justify-between items-center gap-4">
            <div className="flex flex-col gap-4 w-full">
              <label className="font-semibold" for="name">
                Name
              </label>
              <input
                type="text"
                className="p-4 border border-gray-300 rounded-md outline-blue-400"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="font-semibold" for="prefix">
                Prefix
              </label>
              <input
                type="text"
                className="p-4 border border-gray-300 rounded-md outline-blue-400"
                id="prefix"
                value={formData.prefix}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    prefix: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label className="font-semibold" for="description">
              Description
            </label>
            <input
              type="text"
              className="p-4 border border-gray-300 rounded-md outline-blue-400"
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label className="font-semibold" for="body">
              Body
            </label>
            <textarea
              className="p-4 whitespace-pre-wrap border border-gray-300 rounded-md outline-blue-400"
              id="body"
              value={formData.body}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  body: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>
        <SyntaxHighlighter
          language="json"
          style={dracula}
          showLineNumbers={formData.showLineNumbers == "yes" ? true : false}
          className="!bg-[#1a2b3d] break-all rounded-md !p-4"
          wrapLongLines={true}
          wrapLines={true}
        >
          {`"${formData.name}": {
  "prefix": "${formData.prefix}",
  "description": "${formData.description}",
  "body": [${formData.body.split("\n").map((p) => `"${p}"`)}]
}`}
        </SyntaxHighlighter>
        <div className="flex justify-end items-center">
          <button
            className="px-4 py-2 border border-black rounded-md hover:border-gray-300"
            onClick={(e) => {
              navigator.clipboard.writeText(`"${formData.name}": {
                    "prefix": "${formData.prefix}",
                    "description": "${formData.description}",
                    "body": [${formData.body.split("\n").map((p) => `"${p}"`)}]
                  }`);
              e.target.innerText = "Copied";
            }}
          >
            Copy
          </button>
        </div>
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About Visual Studio Code Snippet Generator Tool
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            This tool simplifies the creation of custom code snippets for Visual
            Studio Code. It provides a user-friendly interface to specify the
            snippet details such as name, description, prefix, and body which is
            the snippet.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Users can generate the snippet code and easily integrate it into
            their Visual Studio Code configuration. This tool saves time and
            effort by eliminating the manual creation and maintenance of snippet
            files, enhancing coding productivity in Visual Studio Code.
          </p>
        </div>
      </div>
    </>
  );
}
