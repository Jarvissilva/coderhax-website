import { useState } from "react";
import transform from "css-to-react-native-transform";
import { RiShareBoxLine } from "react-icons/ri";
import Head from "components/head";

export default function CssToReactNativeStylesheetConverter() {
  const [vanillaCSS, setVanillaCSS] = useState("");
  const [reactNativeStyles, setReactNativeStyles] = useState({});
  const [error, setError] = useState("");

  const handleConversion = (e) => {
    try {
      setError("");
      setVanillaCSS(e.target.value);
      const styles = transform(e.target.value);
      console.log(styles);
      setReactNativeStyles(styles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head
        title="CSS To React Native Stylesheet Converter - Coderhax"
        description="Introducing our CSS to React Native Stylesheet Converter: Your
        one-stop solution for effortlessly transforming CSS styles into
        React Native compatible stylesheets! Are you a developer looking to
        migrate your web application to a mobile platform using React
        Native? Look no further! Our powerful and user-friendly online tool
        is designed to make your conversion process a breeze."
        url="/tools/css-to-react-native-stylesheet-converter"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            CSS To React Native Stylesheet Converter
          </h1>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: "CSS To React Native Stylesheet Converter",
                url: "/tools/css-to-react-native-stylesheet-converter",
              })
            }
            title="Share"
            aria-label="Share"
          >
            <RiShareBoxLine size={30} className="hover:scale-110" />
          </button>
        </div>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-left font-normal">
          Want to convert your vanilla css to react native stylesheet then use
          our converter and easily migrate to react native in seconds
        </p>
        <textarea
          className="w-full border border-gray-300 rounded-md h-72 p-4 outline-none"
          value={vanillaCSS}
          placeholder="Enter your vanilla css"
          onChange={handleConversion}
        ></textarea>
        <h2 className="text-[clamp(1.2rem,5vw,1.5rem)] capitalize font-black leading-snug">
          React Native Stylesheet
        </h2>
        <div className="w-full bg-sky-50 text-black p-4 rounded-md max-h-[800px] overflow-auto">
          {error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            reactNativeStyles &&
            Object.keys(reactNativeStyles).map((key) => (
              <div key={key} className="leading-relaxed">
                <h2>{key}: &#123;</h2>
                {Object.entries(reactNativeStyles[key]).map(
                  ([property, value]) => (
                    <p key={property} className="px-4">
                      {property}: {value},
                    </p>
                  )
                )}
                &#125;,
              </div>
            ))
          )}
        </div>
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About CSS To React Native Stylesheet Converter Tool
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Introducing our CSS to React Native Stylesheet Converter: Your
            one-stop solution for effortlessly transforming CSS styles into
            React Native compatible stylesheets! Are you a developer looking to
            migrate your web application to a mobile platform using React
            Native? Look no further! Our powerful and user-friendly online tool
            is designed to make your conversion process a breeze.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            With our Online CSS to React Native Stylesheet Converter, you can
            say goodbye to manual labor and hours of rewriting styles.
            Seamlessly translate your existing CSS code into React Native's
            compatible stylesheet format with just a few clicks. Our converter
            retains the essence of your original styles while adapting them to
            fit perfectly within the React Native framework.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            <strong>Note:</strong> this converter will only convert class based
            css meaning only class selectors for example (.container etc) will
            be converted so id's and tagname selectors won't work.
          </p>
        </div>
      </div>
    </>
  );
}
