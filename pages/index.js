import Link from "next/link";
import Search from "components/search";
import Head from "components/head";
import connectDatabase from "database/connect";
import SnippetModel from "database/models/Snippet";

export default function Home({ categories }) {
  return (
    <>
      <Head
        title="Coderhax - Your Code Snippets Solution"
        description="Find the best code snippets and simplify your coding workflow. Browse our collection of code snippets and enhance your coding process"
        url={process.env.SITE_URL}
        index={true}
      />
      <div className="text-center space-y-4">
        <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-black capitalize">
          Your Code Snippets Solution
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] font-normal">
          Find the best code snippets and simplify your coding workflow. Browse
          our collection of code snippets and enhance your coding process
        </p>
      </div>
      <div>
        <Search />
      </div>
      <div className="space-y-4">
        <div className="text-center text-gray-700 text-[clamp(1.2rem,4vw,1.6rem)] font-semibold">
          <h2>Browse codes by language</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[clamp(.75rem,2.5vw,1rem)]">
          {categories &&
            categories.map((category) => (
              <div key={category}>
                <h3>
                  <Link
                    title={category}
                    href={`/snippets/${category}`}
                    className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
                  >
                    {category}
                  </Link>
                </h3>
              </div>
            ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-center text-gray-700 text-[clamp(1.2rem,4vw,1.6rem)] font-semibold">
          <h2>Browse coding tools</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[clamp(.75rem,2.5vw,1rem)]">
          <div>
            <h3>
              <Link
                title="Tailwind Gradient Generator"
                href="/tools/tailwind-gradient-generator"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                Tailwind Gradient Generator
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <Link
                title="Code Snippet Image Generator"
                href="/tools/code-snippet-image-generator"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                Code Snippet Image Generator
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <Link
                title="Visual Studio Code Snippet Generator"
                href="/tools/visual-studio-code-snippet-generator"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                Visual Studio Code Snippet Generator
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <Link
                title="CSS To Tailwind CSS Converter"
                href="/tools/css-to-tailwind-css-converter"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                CSS To Tailwind CSS Converter
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <Link
                title="Rem To Px Converter"
                href="/tools/rem-to-px-converter"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                Rem To Px Converter
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <Link
                title="Em To Px Converter"
                href="/tools/em-to-px-converter"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                Em To Px Converter
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <Link
                title="Javascript To Python Regex Converter"
                href="/tools/javascript-to-python-regex-converter"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                Javascript To Python Regex Converter
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <Link
                title="CSS To React Native Stylesheet Converter"
                href="/tools/css-to-react-native-stylesheet-converter"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                CSS To React Native Stylesheet Converter
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <Link
                title="Code Comment Remover"
                href="/tools/code-comment-remover"
                className="bg-white block px-6 py-3 capitalize border border-gray-200 rounded-md text-center hover:border-blue-400 focus:ring ring-blue-200"
              >
                Code Comment Remover
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  await connectDatabase();
  const categories = await SnippetModel.distinct("category");
  return { props: { categories } };
}
