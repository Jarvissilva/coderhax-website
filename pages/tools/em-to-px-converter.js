import { useState } from "react";
import Head from "components/head";
import { RiShareBoxLine } from "react-icons/ri";

export default function EmToPxConverter() {
  const [formData, setFormData] = useState({
    parentFontSize: 16,
    em: 1,
  });

  return (
    <>
      <Head
        title="Em To Px Converter - Coderhax"
        description="Effortlessly Convert em to px Online, Our user-friendly em to px
        converter tool allows you to quickly and accurately convert
        measurements from em units to pixels. Seamlessly adapt your
        website's design and layout by converting relative em values to
        pixel dimensions."
        url="/tools/em-to-px-converter"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-snug">
            Em To Px Converter
          </h1>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: "em To Px Converter",
                url: "/tools/em-to-px-converter",
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
            <label className="font-semibold" for="parentFontSize">
              Parent Font Size (px)
            </label>
            <input
              type="number"
              className="p-4 border border-gray-300 rounded-md outline-blue-400"
              id="parentFontSize"
              value={formData.parentFontSize}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  parentFontSize: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label className="font-semibold" for="em">
              Em
            </label>
            <input
              type="number"
              className="p-4 border border-gray-300 rounded-md outline-blue-400"
              id="em"
              value={formData.em}
              min={1}
              onChange={(e) =>
                setFormData({ ...formData, em: parseFloat(e.target.value) })
              }
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p className="font-semibold">Pixels</p>
            <div className="p-4 border bg-gray-100 border-gray-300 rounded-md">
              {formData.em * formData.parentFontSize} px
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p className="font-semibold">Preview</p>
            <span
              contentEditable={true}
              style={{ fontSize: `${formData.em * formData.parentFontSize}px` }}
            >
              Text
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold">
            About Em To Px Converter Tool
          </h2>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Effortlessly Convert em to px Online, Our user-friendly em to px
            converter tool allows you to quickly and accurately convert
            measurements from em units to pixels. Seamlessly adapt your
            website's design and layout by converting relative em values to
            pixel dimensions.
          </p>
          <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
            Simply enter the em value and the corresponding font size, and our
            tool will instantly generate the equivalent pixel measurement.
            Enhance your web development workflow and ensure pixel-perfect
            precision with our reliable em to px converter.
          </p>
        </div>
      </div>
    </>
  );
}
