import { useState } from "react";
import Head from "components/head";
import { RiShareBoxLine } from "react-icons/ri";

export default function TailwindGradientGenerator() {
  const [gradient, setGradient] = useState({
    fromColor: "#052c6b",
    toColor: "#29d4ff",
    direction: "r",
  });

  const [gradientCSSDirection, setGradientCSSDirection] = useState("right");

  const gradientTailwind = `bg-gradient-to-${gradient.direction} from-[${gradient.fromColor}] to-[${gradient.toColor}]`;
  const gradientCSS = {
    background: `linear-gradient(to ${gradientCSSDirection}, ${gradient.fromColor}, ${gradient.toColor})`,
  };

  return (
    <>
      <Head
        title="Tailwind Gradient Generator - Coderhax"
        description="Introducing our Tailwind Gradient Generator: the ultimate tool for
        creating stunning gradients using the popular Tailwind CSS
        framework. With this tool, you can effortlessly generate custom
        gradients by selecting from color, to color and direction settings."
        url="/tools/tailwind-gradient-generator"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            Tailwind Gradient Generator
          </h1>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: "Tailwind Gradient Generator",
                url: "/tools/tailwind-gradient-generator",
              })
            }
            title="Share"
            aria-label="Share"
          >
            <RiShareBoxLine size={30} className="hover:scale-110" />
          </button>
        </div>
        <div style={gradientCSS} className="h-96 rounded-md"></div>
        <div className="flex justify-start items-center gap-8">
          <div className="flex flex-col">
            <label htmlFor="fromColor" className="font-bold text-lg">
              From Color
            </label>
            <input
              type="color"
              name="fromColor"
              id="fromColor"
              value={gradient.fromColor}
              onChange={(e) =>
                setGradient({ ...gradient, fromColor: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="toColor" className="font-bold text-lg">
              To Color
            </label>
            <input
              type="color"
              name="toColor"
              id="toColor"
              value={gradient.toColor}
              onChange={(e) =>
                setGradient({ ...gradient, toColor: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="direction" className="font-bold text-lg">
              Direction
            </label>
            <select
              className="border border-gray-200"
              name="direction"
              onChange={(e) => {
                setGradient({ ...gradient, direction: e.target.value });
                setGradientCSSDirection(
                  e.target.options[e.target.selectedIndex].innerText
                );
              }}
            >
              <option value="t">top</option>
              <option value="tr">top right</option>
              <option value="r">right</option>
              <option value="b">bottom</option>
              <option value="br">bottom right</option>
              <option value="bl">bottom left</option>
              <option value="l">left</option>
              <option value="tl">top left</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#282a36] rounded-md p-4">
          <p className="text-white">{gradientTailwind}</p>
          <button
            className="text-white px-4 py-2 border border-gray-300 rounded-md"
            onClick={(e) => {
              navigator.clipboard.writeText(gradientTailwind);
              e.target.innerText = "Copied";
            }}
          >
            Copy
          </button>
        </div>
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About Tailwind Gradient Generator Tool
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Introducing our Tailwind Gradient Generator: the ultimate tool for
            creating stunning gradients using the popular Tailwind CSS
            framework. With this tool, you can effortlessly generate custom
            gradients by selecting from color, to color and direction settings.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            This Gradient Generator in Tailwind simplifies the process of adding
            beautiful gradients to your web projects, enhancing visual appeal
            and creating engaging user experiences. You can generate tailwind
            gradient for both background and text.
          </p>
        </div>
      </div>
    </>
  );
}
