import { useRouter } from "next/router";
import Card from "components/card";
import Head from "components/head";
import connectDatabase from "database/connect";
import SnippetModel from "database/models/Snippet";

export default function Category({ snippets, loggedUser }) {
  const { query } = useRouter();

  return (
    <>
      <Head
        title={`${query.category} Code Snippets - Coderhax`}
        description={`Find the best ${query.category} code snippets for your project. Browse
        our collection of ${query.category} code snippets and write code faster`}
        url={`${process.env.SITE_URL}/snippets/${query.category}`}
        index={true}
      />
      <div className="text-center space-y-4">
        <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-black capitalize">
          {query.category} code snippets
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] font-normal">
          Find the best {query.category} code snippets and enhance your{" "}
          {query.category} programming. Browse our collection of{" "}
          {query.category} code snippets and write code faster
        </p>
      </div>
      <div className="flex flex-wrap  justify-center gap-5">
        {snippets &&
          snippets.map((snippet) => (
            <Card key={snippet._id} snippet={snippet} loggedUser={loggedUser} />
          ))}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  await connectDatabase();
  const categories = await SnippetModel.distinct("category");
  return {
    paths: categories.map((category) => ({
      params: { category },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  await connectDatabase();
  const snippets = await SnippetModel.find({
    category: params.category,
  }).sort("-createdAt");
  if (!snippets[0]) return { notFound: true };
  return { props: { snippets: JSON.parse(JSON.stringify(snippets)) } };
}
