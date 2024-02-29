import Head from "next/head";

const HeadTag = ({ title, description, url, index }) => {
  return (
    <>
      <Head>
        <title>{title.replace(/^\w/, (c) => c.toUpperCase())}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="robots"
          content={index ? "follow,index" : "nofollow,noindex"}
        />
        <meta name="description" content={description} />
        <meta
          name="google-site-verification"
          content="_AGXqMHpB0jcSEE-zL4MLUW45A6PZjOEul0pOX4wAj0"
        />
        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    </>
  );
};

export default HeadTag;
