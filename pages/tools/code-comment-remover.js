import { useState } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import Head from "components/head";

export default function CodeCommentRemover() {
  const [code, setCode] = useState("");
  const [commentType, setCommentType] = useState({
    hashComment: true,
    slashComment: false,
    arrowDashComment: false,
    slashStarComment: false,
    commaComment: true,
  });
  const [codeWithoutComments, setCodeWithoutComments] = useState("");

  const hashCommentRegex = /#.*\n?/g;
  const slashCommentRegex = /\/\/.*\n?/g;
  const arrowDashCommentRegex = /<!--[\s\S]*?-->/g;
  const slashStarCommentRegex = /\/\*[\s\S]*?\*\//g;
  const commaCommentRegex = /(['\"]{3})([\s\S]*?)(\1)/g;

  const handleCommentRemoval = (e) => {
    setCode(e.target.value);
    let tempCode = e.target.value;
    if (commentType.slashComment)
      tempCode = tempCode.replace(slashCommentRegex, "");
    if (commentType.hashComment)
      tempCode = tempCode.replace(hashCommentRegex, "");
    if (commentType.arrowDashComment)
      tempCode = tempCode.replace(arrowDashCommentRegex, "");
    if (commentType.slashStarComment)
      tempCode = tempCode.replace(slashStarCommentRegex, "");
    if (commentType.commaComment)
      tempCode = tempCode.replace(commaCommentRegex, "");

    setCodeWithoutComments(tempCode.trim());
  };

  return (
    <>
      <Head
        title="Code Comment Remover - Coderhax"
        description="Want to remove comments from your code then use code comment remover
        tool and remove comments from any code in seconds"
        url="/tools/code-comment-remover"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            Code Comment Remover
          </h1>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: "Code Comment Remover",
                url: "/tools/code-comment-remover",
              })
            }
            title="Share"
            aria-label="Share"
          >
            <RiShareBoxLine size={30} className="hover:scale-110" />
          </button>
        </div>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-left font-normal">
          Want to remove comments from your code then use code comment remover
          tool and remove comments from any code in seconds
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <p className="font-bold">Select comment type to remove:</p>
          <div>
            <input
              type="checkbox"
              id="slashComment"
              checked={commentType.slashComment}
              className="text-lg w-7 scale-125"
              onChange={(e) =>
                setCommentType({
                  ...commentType,
                  slashComment: e.target.checked,
                })
              }
            />
            <label htmlFor="slashComment">//</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hashComment"
              checked={commentType.hashComment}
              className="text-lg w-7 scale-125"
              onChange={(e) =>
                setCommentType({
                  ...commentType,
                  hashComment: e.target.checked,
                })
              }
            />
            <label htmlFor="hashComment">#</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="slashStarComment"
              checked={commentType.slashStarComment}
              className="text-lg w-7 scale-125"
              onChange={(e) =>
                setCommentType({
                  ...commentType,
                  slashStarComment: e.target.checked,
                })
              }
            />
            <label htmlFor="slashStarComment">/* */</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="arrowDashComment"
              checked={commentType.arrowDashComment}
              className="text-lg w-7 scale-125"
              onChange={(e) =>
                setCommentType({
                  ...commentType,
                  arrowDashComment: e.target.checked,
                })
              }
            />
            <label htmlFor="arrowDashComment">&#60;!-- --&#62;</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="commaComment"
              checked={commentType.commaComment}
              className="text-lg w-7 scale-125"
              onChange={(e) =>
                setCommentType({
                  ...commentType,
                  commaComment: e.target.checked,
                })
              }
            />
            <label htmlFor="commaComment">' ' ' ' ' '</label>
          </div>
        </div>
        <textarea
          className="w-full whitespace-pre-wrap border border-gray-300 rounded-md h-72 p-4 outline-none"
          value={code}
          placeholder="Enter your code"
          onChange={handleCommentRemoval}
        ></textarea>
        <h2 className="text-[clamp(1.2rem,5vw,1.5rem)] capitalize font-black leading-snug">
          Code Without Comments
        </h2>
        <textarea
          readOnly
          value={codeWithoutComments}
          className="w-full bg-sky-50 text-black p-4 rounded-md h-72 max-h-[800px] outline-none"
        ></textarea>
        {codeWithoutComments && (
          <div className="flex justify-end items-center">
            <button
              className="px-4 py-2 border border-black rounded-md hover:border-gray-300"
              onClick={(e) => {
                navigator.clipboard.writeText(codeWithoutComments);
                e.target.innerText = "Copied";
              }}
            >
              Copy
            </button>
          </div>
        )}
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About Code Comment Remover Tool
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Effortlessly remove comments from code with this online tool, With
            this tool you can remove both single-line and multi-line comments,
            you can remove comments from Java, Python, HTML, CSS, Javascript and
            more. Boost your coding efficiency and improve code readability by
            accessing our user-friendly code comment removal tool today.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Simple choose the comment type you want to remove and paste your
            code in text box and boom in seconds you will get your code without
            comments.
          </p>
        </div>
      </div>
    </>
  );
}
