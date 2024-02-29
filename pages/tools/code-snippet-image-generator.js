import Image from "next/image";
import { useState } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toPng } from "html-to-image";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Head from "components/head";

export default function CodeSnippetGenerator() {
  const languages = [
    "plaintext",
    "javascript",
    "python",
    "java",
    "c",
    "c++",
    "csharp",
    "ruby",
    "php",
    "swift",
    "go",
    "typescript",
    "kotlin",
    "rust",
    "apache",
    "objectivec",
    "sql",
    "shell",
    "bash",
    "markdown",
    "json",
    "xml",
    "yaml",
    "perl",
    "scala",
    "r",
    "dart",
  ];
  const [formData, setFormData] = useState({
    language: "python",
    showLineNumbers: "",
    code: `print("Hello world")`,
  });

  const handleConvert = () => {
    toPng(document.getElementById("code-snippet"))
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "code-snippet.png";
        link.click();
      })
      .catch(function (error) {
        alert("Could not create the snippet image");
      });
  };

  return (
    <>
      <Head
        title="Code Snippet Image Generator - Coderhax"
        description="Introducing our advanced onine Code Snippet Image Generator tool!
        Easily create eye-catching images of your favorite code snippets in
        multiple programming languages. With our user-friendly interface,
        you can enter your desired code snippet and generate a visually
        appealing image instantly"
        url="/tools/code-snippet-image-generator"
        index={true}
      />
      <div className="flex flex-col justify-center items-center bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
          Code Snippet Image Generator
        </h1>
        <div className="flex justify-center items-center">
          <div
            id="code-snippet"
            className="bg-[#1a2b3d] p-4 text-white space-y-2 w-[100%] "
          >
            <div className="flex items-center gap-2">
              <Image
                src={`/language-icons/${formData.language}.png`}
                width={20}
                height={20}
                alt={formData.language}
              />
              <p className="capitalize">{formData.language}</p>
            </div>
            <div>
              <SyntaxHighlighter
                language={formData.language}
                style={dracula}
                showLineNumbers={
                  formData.showLineNumbers == "yes" ? true : false
                }
                className="!bg-[#1a2b3d] !p-0 break-all"
                wrapLongLines={true}
                wrapLines={true}
              >
                {formData.code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
        <form className="flex flex-col items-start gap-4 w-full">
          <div className="flex justify-center items-center gap-4 w-full flex-wrap">
            <div className="self-center border border-gray-300 rounded-md max-sm:w-full">
              <select
                className="w-full border rounded-md p-4 border-r-[16px] border-solid border-white outline-none"
                value={formData.language}
                onChange={(e) => {
                  setFormData({ ...formData, language: e.target.value });
                }}
                required
              >
                <option disabled value="">
                  Select a code language
                </option>
                {languages.map((language) => (
                  <option value={language} className="capitalize">
                    {language}
                  </option>
                ))}
              </select>
            </div>
            <div className="self-center border border-gray-300 rounded-md max-sm:w-full">
              <select
                className="w-full border rounded-md p-4 border-r-[16px] border-solid border-white outline-none"
                value={formData.showLineNumbers}
                onChange={(e) => {
                  setFormData({ ...formData, showLineNumbers: e.target.value });
                }}
                required
              >
                <option disabled value="">
                  Show line numbers
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <textarea
            placeholder="Enter your code"
            className="border border-gray-300 rounded-md w-full p-4 outline-none h-72"
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          >
            print("Hello world")
          </textarea>
        </form>
        <button
          className="bg-blue-600 text-white font-medium px-[clamp(1.25rem,5vw,1.5rem)] py-[clamp(0.5rem,5vw,.6rem)] rounded-md hover:bg-blue-700 focus:bg-blue-600 focus:ring focus:ring-blue-300"
          onClick={handleConvert}
        >
          Download
        </button>
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About Code Snippet Image Generator
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Introducing our advanced onine Code Snippet Image Generator tool!
            Easily create eye-catching images of your favorite code snippets in
            multiple programming languages. With our user-friendly interface,
            you can enter your desired code snippet and generate a visually
            appealing image instantly
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Enhance your online content with visually engaging code examples
            that are perfect for blog posts, tutorials, documentation, and
            social media sharing, make your content stands out to your users.
            Start creating captivating code snippet images now and make your
            programming tutorials and articles shine, generate code snippets and
            share on instagram,twitter and more social medias
          </p>
        </div>
      </div>
    </>
  );
}
