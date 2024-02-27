import React from "react";

const ImageWithOverlay = ({
  imageUrl,
  headerText,
  subheaderText,
  centerText,
}) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt="Image" className="w-full" />
      <div className="absolute top-0 right-0 mr-6 mt-6">
        <div className="relative bg-black bg-opacity-50 rounded-full w-61p h-92p md:w-61p md:h-92p flex flex-col items-center justify-start p-6">
          <div className="mb-6">
            <span className="text-white text-5xl font-bold">{headerText}</span>
          </div>
          <div className="mb-6">
            <span className="text-white text-4xl font-semibold">
              {subheaderText}
            </span>
          </div>
          <div>
            <span className="text-white text-lg font-semibold">
              {centerText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
