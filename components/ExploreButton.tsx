"use client";

import Image from "next/image";

const ExploreButton = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("CLICK")}
    >
      <a href="#events" className="text-white">
        Explore Events
        <Image src={"/icons/arrow-down.svg"} width={24} height={24} alt="" />
      </a>
    </button>
  );
};

export default ExploreButton;
