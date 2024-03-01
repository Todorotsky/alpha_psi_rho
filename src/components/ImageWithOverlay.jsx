import React from "react";
import Image from "next/image";

const ImageWithOverlay = ({
  imageUrl,
  headerText,
  subheaderText,
  centerText,
}) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="Image"
        width={1920}
        height={1280}
        className="w-full"
      />
      <div className="absolute right-0 bottom-[8%] mr-2 sm:mr-14 mt-6 w-[61%] h-[92%] justify-center">
        <div className="bg-black bg-opacity-50 rounded-full w-61p h-[92%] flex flex-col items-center p-[1vh]">
          <div className="mt-[1vw] mb-[-1vw]">
            <span className="text-white text-2xl sm:text-[4vw] font-bold">
              {headerText}
            </span>
          </div>
          <div className="mb-[8vw]">
            <span className="text-white text-xl sm:text-[3vw] font-semibold align-top">
              {subheaderText}
            </span>
          </div>
          <div className="text-center">
            <span className="text-white text-l sm:text-[2vw] font-semibold text-center">
              {centerText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
