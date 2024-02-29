import { useState } from "react";
import Head from "components/head";
import { RiShareBoxLine } from "react-icons/ri";

export default function JavascriptToPythonRegexConverter() {
  const [javascriptRegex, setJavascriptRegex] = useState("");
  const [pythonRegex, setPythonRegex] = useState("");

  const convertToPythonRegex = () => {
    let regexPattern = javascriptRegex;

    // Finding flags
    let regexFlags = (regexPattern.toString().match(/[gimsuy]+$/) || [])[0];

    if (regexFlags != null) regexFlags = regexFlags.split("");

    // Removing / / and adding ' '
    regexPattern = regexPattern.replace(/^\/|\/(?=[gimsuy]*$)/g, "'");

    // Adding python regex flags
    let pythonFlags = "";

    for (let i in regexFlags) {
      if (regexFlags[i] == "i") pythonFlags += "re.IGNORECASE | ";
      if (regexFlags[i] == "m") pythonFlags += "re.MULTILINE | ";
      if (regexFlags[i] == "u") pythonFlags += "re.UNICODE | ";
      if (regexFlags[i] == "s") pythonFlags += "re.DOTALL | ";
    }

    // Removing javascript regex flags
    regexPattern = regexPattern.replace(/[gimsuy]*$/, "");

    if (pythonFlags != null) {
      let lastIndex = pythonFlags.lastIndexOf("|");
      pythonFlags =
        pythonFlags.slice(0, lastIndex) + pythonFlags.slice(lastIndex + 1);
    }

    setPythonRegex(`re.compile(r${regexPattern},${pythonFlags})`);
  };

  return (
    <>
      <Head
        title="Javascript To Python Regex Converter - Coderhax"
        description="Streamline your coding workflow with our JavaScript to Python Regex
        Converter tool. Easily convert JavaScript regular expressions to
        Python regular expressions for seamless integration into your Python
        projects. Our converter supports complex regex patterns and flags,
        ensuring accurate and efficient migration."
        url="/tools/javascript-to-python-regex-converter"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            Javascript To Python Regex Converter
          </h1>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: "Javascript To Python Regex Converter",
                url: "/tools/javascript-to-python-regex-converter",
              })
            }
            title="Share"
            aria-label="Share"
          >
            <RiShareBoxLine size={30} className="hover:scale-110" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your javascript regex"
              className="flex-grow p-4 border border-gray-300 rounded-md outline-blue-400"
              id="javascript-regex"
              value={javascriptRegex}
              onChange={(e) => setJavascriptRegex(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 text-white font-medium px-[clamp(1.25rem,5vw,1.5rem)] py-[clamp(1rem,5vw,.6rem)] rounded-md outline-none hover:bg-blue-700 focus:bg-blue-600 focus:ring focus:ring-blue-300"
              onClick={convertToPythonRegex}
            >
              Convert to python regex
            </button>
          </div>
          {pythonRegex && (
            <div className="flex items-center text-black w-full p-4 border bg-gray-100 border-gray-300 rounded-md">
              <p className="flex-grow">{pythonRegex}</p>
              <button
                className="px-4 py-2 border border-black rounded-md hover:border-gray-300"
                onClick={(e) => {
                  navigator.clipboard.writeText(pythonRegex);
                  e.target.innerText = "Copied";
                }}
              >
                Copy
              </button>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About Javascript To Python Regex Converter Tool
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Streamline your coding workflow with our JavaScript to Python Regex
            Converter tool. Easily convert JavaScript regular expressions to
            Python regular expressions for seamless integration into your Python
            projects. Our converter supports complex regex patterns and flags,
            ensuring accurate and efficient migration.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Just enter your javascript regex and hit convert boom you have your
            python regex ready, boost your development productivity. Try our
            online tool now and unlock the power of effortless regex conversion
            for your Python coding needs
          </p>
        </div>
      </div>
    </>
  );
}
