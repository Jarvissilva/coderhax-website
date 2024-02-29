import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Head from "components/head";
import connectDatabase from "database/connect";
import SnippetModel from "database/models/Snippet";
import Card from "components/card";

export default function Snippet({ snippet, relatedSnippets, loggedUser }) {
  const date = new Date(snippet.createdAt);
  let snippetDescription = decodeURIComponent(snippet.description).replace(
    /<p><br><\/p>/g,
    ""
  );
  const snippetOutput = snippet.output && decodeURIComponent(snippet.output);

  return (
    <>
      <Head
        title={`${snippet.title} - Coderhax`}
        url={`${process.env.SITE_URL}/snippets/${snippet.category}/${snippet.slug}`}
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <Link
            href={`/snippets/${snippet.category}`}
            className="flex items-center text-blue-600 text-xl font-extrabold hover:text-blue-400 capitalize"
          >
            <FaCode size={30} className="inline mr-1" />
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
              <FiEdit size={25} className="hover:scale-110" />
            </Link>
          ) : null}
        </div>
        <div className="space-y-[clamp(.75rem,2.5vw,1rem)]">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            {snippet.title}
          </h1>
          <p className="text-gray-500 text-[clamp(1.1rem,2.5vw,1.2rem)] font-medium leading-snug">
            Posted by{" "}
            <Link
              href={`/users/${snippet.creator.username}`}
              className="hover:text-blue-400"
            >
              {snippet.creator.username}
            </Link>{" "}
            on
            {" " +
              date.getDate() +
              " " +
              date.toLocaleString("default", { month: "short" }) +
              " " +
              date.getFullYear()}
          </p>
        </div>
        <div>
          <div className="max-h-[400px] rounded-t-md overflow-auto">
            <SyntaxHighlighter
              language={snippet.category}
              style={dracula}
              className="!p-4 rounded-t-md"
            >
              {decodeURIComponent(snippet.code)}
            </SyntaxHighlighter>
          </div>
          <div className="flex justify-between bg-black p-4 rounded-b-md">
            <div className="flex items-center">
              <button
                className="text-white px-4 py-2 border border-white rounded-md hover:border-gray-300"
                onClick={(e) => {
                  navigator.clipboard.writeText(
                    decodeURIComponent(snippet.code)
                  );
                  e.target.innerText = "Copied";
                }}
              >
                Copy
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() =>
                  navigator.share({
                    title: snippet.title,
                    url: `/snippets/${snippet.category}/${snippet.slug}`,
                  })
                }
                title="Share snippet"
                aria-label="Share snippet"
              >
                <RiShareBoxLine
                  size={30}
                  color="#fff"
                  className="hover:scale-110"
                />
              </button>
            </div>
          </div>
        </div>
        {snippetOutput && (
          <div className="bg-gray-100 p-4 rounded-md">
            {snippetOutput.split("\n").map((output, index) => (
              <span className="block" key={index}>
                {output}
              </span>
            ))}
          </div>
        )}
        {snippetDescription && (
          <div
            id="snippetDescription"
            className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose"
            dangerouslySetInnerHTML={{ __html: snippetDescription }}
          ></div>
        )}
      </div>
      {relatedSnippets[0] && (
        <div className="flex flex-col items-center justify-center gap-[clamp(1.25rem,5vw,1.5rem)]">
          <h2 className="text-center text-[clamp(1rem,5vw,2rem)] capitalize font-bold leading-snug">
            More Related Snippets
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {relatedSnippets.map((relatedSnippet) => (
              <Card
                key={relatedSnippet._id}
                snippet={relatedSnippet}
                loggedUser={loggedUser}
              />
            ))}
          </div>
          <Link
            href={`/snippets/${snippet.category}`}
            className="bg-blue-600 text-white ${poppins.className} font-medium px-[clamp(1.25rem,5vw,1.5rem)] py-[clamp(0.5rem,5vw,.6rem)] rounded-md hover:bg-blue-700 focus:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            View More
          </Link>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  await connectDatabase();
  const snippets = await SnippetModel.find();
  return {
    paths: snippets.map((snippet) => ({
      params: { category: snippet.category, snippet: snippet.slug },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  await connectDatabase();
  const snippet = await SnippetModel.findOne({
    category: params.category,
    slug: params.snippet,
  }).populate("creator", "username");
  if (!snippet) return { notFound: true };

  const categorySnippets = await SnippetModel.find({
    category: params.category,
    _id: { $ne: snippet._id },
  });

  let relatedSnippets = [];

  for (let i = 0; i < categorySnippets.length; i++) {
    const regex = new RegExp(
      `\\b(${snippet.title.split(" ").join("|")})\\b`,
      "gi"
    );

    const keywordMatches = categorySnippets[i].title.match(regex) || [];

    relatedSnippets.push({
      ...categorySnippets[i]._doc,
      score: keywordMatches.length,
    });
  }

  relatedSnippets = relatedSnippets
    .sort((a, b) => b.score - a.score)
    .slice(0, 16);

  return {
    props: {
      snippet: JSON.parse(JSON.stringify(snippet)),
      relatedSnippets: JSON.parse(JSON.stringify(relatedSnippets)),
    },
  };
}
