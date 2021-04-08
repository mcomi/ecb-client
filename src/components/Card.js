import React, { useEffect, useState } from "react";
import imageExists from "image-exists";
import fallBackImage from "../assets/fallback-image.jpg";

export default function Card({ car, handleSelectCar }) {
  const { description, make, model, estimatedate } = car;
  const [src, setSrc] = useState("");
  const formattedDescription = description.trim();

  useEffect(() => {
    const { image } = car;
    imageExists(image, (imgSrc) => {
      if (imgSrc) {
        setSrc(image);
      } else {
        setSrc(fallBackImage);
      }
    });
  }, [car]);

  const handleClick = () => {
    handleSelectCar(car);
  };

  return (
    <div className="flex flex-col my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="relative flex-1 overflow-hidden rounded-lg shadow-lg group">
        <div>
          <img
            alt={model}
            className="block object-cover max-h-64 w-full group-hover:opacity-75"
            src={src}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
            <div className="pt-20 text-center">
              <button
                className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg"
                onClick={handleClick}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4 group-hover:text-white group-hover:bg-blue-500">
          <h1 className="text-lg">
            {make} {model}
          </h1>
          <p className="text-grey-darker text-sm">
            Estimated Date: {estimatedate ? estimatedate : "N/A"}
          </p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4  group-hover:bg-blue-500">
          <a className="flex items-center no-underline text-black group-hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
            <p className="ml-2 text-sm">
              {formattedDescription[0].toUpperCase() +
                formattedDescription.substring(1)}
            </p>
          </a>
        </footer>
      </article>
    </div>
  );
}
