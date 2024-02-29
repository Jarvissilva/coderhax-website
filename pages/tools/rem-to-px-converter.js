import { useState } from "react";
import Head from "components/head";
import { RiShareBoxLine } from "react-icons/ri";

export default function RemToPxConverter() {
  const [formData, setFormData] = useState({
    rootFontSize: 16,
    rem: 1,
  });

  return (
    <>
      <Head
        title="Rem To Px Converter - Coderhax"
        description="Introducing our REM to PX Converter Tool - the easiest way to
        convert font sizes from REM units to pixels (PX). This handy online
        tool allows you to effortlessly convert font sizes in REM to PX
        units"
        url="/tools/rem-to-px-converter"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            Rem To Px Converter
          </h1>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: "Rem To Px Converter",
                url: "/tools/rem-to-px-converter",
              })
            }
            title="Share"
            aria-label="Share"
          >
            <RiShareBoxLine size={30} className="hover:scale-110" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col gap-4 w-full">
            <label className="font-semibold" for="rootFontSize">
              Root Font Size (px)
            </label>
            <input
              type="number"
              className="p-4 border border-gray-300 rounded-md outline-blue-400"
              id="rootFontSize"
              value={formData.rootFontSize}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  rootFontSize: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label className="font-semibold" for="rem">
              Rem
            </label>
            <input
              type="number"
              className="p-4 border border-gray-300 rounded-md outline-blue-400"
              id="rem"
              value={formData.rem}
              min={1}
              onChange={(e) =>
                setFormData({ ...formData, rem: parseFloat(e.target.value) })
              }
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p className="font-semibold">Pixels</p>
            <div className="p-4 border bg-gray-100 border-gray-300 rounded-md">
              {formData.rem * formData.rootFontSize} px
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p className="font-semibold">Preview</p>
            <span
              contentEditable={true}
              style={{ fontSize: `${formData.rem * formData.rootFontSize}px` }}
            >
              Text
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About Rem To Px Converter Tool
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Introducing our REM to PX Converter Tool - the easiest way to
            convert font sizes from REM units to pixels (PX). This handy online
            tool allows you to effortlessly convert font sizes in REM to PX
            units
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            This online rem to px converter tool works by allowing you to input
            a value in REM units and the root font size in pixels. It then
            performs a simple calculation using the provided values to convert
            the REM value into its equivalent in pixels.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Root font size: this is usually the font size of the root element in
            your web page. It serves as the base for calculating the pixel
            values.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Calculation: multiply root font size with rem to get pixels
            (rootFontSize * rem = pixels )
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            By using this tool, you can ensure consistent and accurate
            conversions between REM and PX units, enabling you to work with
            precise font sizes in your web development projects.
          </p>
        </div>
      </div>
    </>
  );
}
