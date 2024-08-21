import React from "react";
import LunarEclipse from "./lunareclipse";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const JupiterPage = () => {
  const src = "https://i.imgur.com/eT2bKaJ.jpeg";
  return (
    <LunarEclipse>
      <Link href={src}>
        <FadeInImage
          src={src}
          alt="lunar-eclipse"
          className="z-0 cursor-pointer object-cover transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </LunarEclipse>
  );
};

export default JupiterPage;
