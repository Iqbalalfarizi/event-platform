"use client";

import Image from "next/image";
import posthog from "posthog-js";

const ExploreButton = () => {
  const handleClick = () => {
    console.log("CLICK");
    posthog.capture("explore_events_clicked");
  };

  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={handleClick}
    >
      <a href="#events" className="text-white">
        Explore Events
        <Image src={"/icons/arrow-down.svg"} width={24} height={24} alt="" />
      </a>
    </button>
  );
};

export default ExploreButton;
