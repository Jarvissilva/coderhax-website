import connectDatabase from "database/connect";
import SnippetModel from "database/models/Snippet";

export default function SiteMap() {}

export async function getServerSideProps({ res }) {
  await connectDatabase();
  const snippets = await SnippetModel.find().sort("-updatedAt");
  const categories = await SnippetModel.distinct("category");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${process.env.SITE_URL}</loc>
    </url>
    ${categories
      .map((category) => {
        return `
    <url>
      <loc>${process.env.SITE_URL}/snippets/${category}</loc>
    </url>`;
      })
      .join("")}
    ${snippets
      .map((snippet) => {
        return `
    <url>
      <loc>${process.env.SITE_URL}/snippets/${snippet.category}/${
          snippet.slug
        }</loc>
      <lastmod>${new Date(snippet.updatedAt)
        .toISOString()
        .slice(0, 10)}</lastmod>
    </url>`;
      })
      .join("")}
      
    <url>
      <loc>${process.env.SITE_URL}/tools/tailwind-gradient-generator</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/tools/code-snippet-image-generator</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/tools/css-to-tailwind-css-converter</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/tools/rem-to-px-converter</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/tools/em-to-px-converter</loc>
    </url>
    <url>
      <loc>${
        process.env.SITE_URL
      }/tools/javascript-to-python-regex-converter</loc>
    </url>
    <url>
      <loc>${
        process.env.SITE_URL
      }/tools/css-to-react-native-stylesheet-converter</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/tools/code-comment-remover</loc>
    </url>
    <url>
      <loc>${
        process.env.SITE_URL
      }/tools/visual-studio-code-snippet-generator</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/about-us</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/contact-us</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/privacy-policy</loc>
    </url>
    <url>
      <loc>${process.env.SITE_URL}/terms-of-service</loc>
    </url>
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
