import React from "react";
import C2017 from "./C2017";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const C2017Page = () => {
  return (
    <C2017>
      <video
        muted
        autoPlay
        loop
        className="h-full w-full object-cover object-left"
      >
        <source
          src="https://zipline.santi871.com/u/XxTvEm.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </C2017>
  );
};

export default C2017Page;
