import { useState } from "react";
import { CssToTailwindTranslator } from "css-to-tailwind-translator";
import Head from "components/head";
import { FiClipboard } from "react-icons/fi";
import { RiShareBoxLine } from "react-icons/ri";

export default function CSSToTailwindCSSConverter() {
  const [vanillaCSS, setVanillaCSS] = useState();
  const [tailwindCSS, setTailwindCSS] = useState([]);
  const [error, setError] = useState("");

  const handleConversion = (e) => {
    try {
      setError("");
      setVanillaCSS(e.target.value);
      const translatedCSS = CssToTailwindTranslator(e.target.value);
      if (translatedCSS.code == "SyntaxError") {
        setError("Syntax Error");
      }
      setTailwindCSS(translatedCSS.data);
    } catch (error) {
      setError("An unknown error has occured please refresh and try again");
    }
  };

  return (
    <>
      <Head
        title="CSS To Tailwind CSS Converter - Coderhax"
        description="Convert your existing CSS code to Tailwind CSS effortlessly with our
        CSS to Tailwind CSS Converter tool. Say goodbye to manual conversion
        and save valuable time in adapting your styles to the powerful
        Tailwind CSS framework."
        url="/tools/css-to-tailwind-css-converter"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            CSS To Tailwind CSS Converter
          </h1>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: "CSS To Tailwind CSS Converter",
                url: "/tools/css-to-tailwind-css-converter",
              })
            }
            title="Share"
            aria-label="Share"
          >
            <RiShareBoxLine size={30} className="hover:scale-110" />
          </button>
        </div>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-left font-normal">
          Want to migrate from vanilla css to tailwind css use our converter and
          easily migrate from vanilla css to tailwind in seconds
        </p>
        <textarea
          className="w-full border border-gray-300 rounded-md h-72 p-4 outline-none"
          value={vanillaCSS}
          placeholder="Enter your vanilla css"
          onChange={handleConversion}
        ></textarea>
        <h2 className="text-[clamp(1.2rem,5vw,1.5rem)] capitalize font-black leading-snug">
          Tailwind CSS
        </h2>
        <div className="w-full bg-sky-50 text-black p-4 rounded-md max-h-[800px] overflow-auto">
          {error ? (
            <p>{error}</p>
          ) : (
            tailwindCSS.map((data, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <h3 className="font-semibold">{data.selectorName}</h3>
                <div className="flex justify-between  items-center bg-white p-4 border border-gray-300 rounded-md">
                  <p className="">{data.resultVal}</p>
                  <FiClipboard
                    size={20}
                    onClick={(e) => {
                      navigator.clipboard.writeText(data.resultVal);
                      e.target.style.fill = "black";
                    }}
                    title="copy"
                    className="cursor-pointer hover:text-blue-500"
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About CSS To Tailwind CSS Converter
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Convert your existing CSS code to Tailwind CSS effortlessly with our
            CSS to Tailwind Converter tool say goodbye to manual conversion and
            save valuable time in adapting your styles to the powerful Tailwind
            CSS framework.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Our converter tool seamlessly translates your vanilla CSS classes
            into Tailwind CSS utility classes, ensuring a smooth transition
            while preserving your styling choices.
          </p>
        </div>
      </div>
    </>
  );
}
