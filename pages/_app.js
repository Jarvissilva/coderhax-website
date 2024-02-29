import "style.css";
import { useEffect, useState } from "react";
import { Poppins, Redressed } from "next/font/google";
import Error from "next/error";
import Script from "next/script";
import Header from "components/header";
import Footer from "components/footer";
import Loader from "components/loader";
import fetchApi from "helpers/fetchApi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  const [loggedUser, setLoggedUser] = useState(null);
  const [reAuthenticate, setReAuthenticate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getLoggedUser = async () => {
    setIsLoading(true);
    const res = await fetchApi("/users/authenticate", "GET");
    setLoggedUser(res.success ? res.loggedUser : null);
    setIsLoading(false);
    setReAuthenticate(false);
  };

  useEffect(() => {
    getLoggedUser();
  }, [reAuthenticate]);

  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-H5EJJWR869"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H5EJJWR869');
        `}
      </Script> */}
      <Header loggedUser={loggedUser} poppins={poppins} redressed={redressed} />
      <main
        className={`px-[clamp(1.25rem,6vw,6rem)] py-[clamp(1.25rem,6vw,3rem)] lg:px-[clamp(3rem,14vw,12rem)] space-y-[clamp(1rem,5vw,2rem)] bg-sky-50 ${poppins.className}`}
      >
        {Component.protected ? (
          isLoading ? (
            <Loader />
          ) : loggedUser ? (
            <Component
              {...pageProps}
              loggedUser={loggedUser}
              setReAuthenticate={setReAuthenticate}
            />
          ) : (
            <Error statusCode={401} title="Please login to access this page" />
          )
        ) : (
          <Component
            {...pageProps}
            loggedUser={loggedUser}
            setReAuthenticate={setReAuthenticate}
          />
        )}
      </main>
      <Footer poppins={poppins} />
    </>
  );
}
