import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

const ImageWithOverlay2 = ({ imageUrl, headerText, subheaderText, link }) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="Image"
        width={1920}
        height={1280}
        className="w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[61%] h-[92%] flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full h-[92%] flex flex-col items-center p-[1vh]">
            <div className="mt-[1vw] sm:mt-[5vw] mb-[-1vw]">
              <span className="text-white text-xl sm:text-[4vw] font-bold">
                {headerText}
              </span>
            </div>
            <div className="mb-[8vw] py-3 sm:pt-20 px-2 text-center">
              <span className="text-white text-m sm:text-[2vw] font-semibold text-center">
                {subheaderText}
              </span>
            </div>
            <Button
              as={Link}
              className="text-xl font-semibold w-[70%]"
              color="primary"
              href={link}
              variant="flat"
              style={{ backgroundColor: "#FFD700", color: "black" }}
            >
              Interest Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithOverlay2;
