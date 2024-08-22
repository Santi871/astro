import React from "react";
import SolarEclipse from "./solareclipse";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const JupiterPage = () => {
  const src = "https://i.imgur.com/TErAy0w.jpeg";
  return (
    <SolarEclipse>
      <Link href={src}>
        <FadeInImage
          src={src}
          alt="solar-eclipse"
          className="z-0 cursor-pointer object-cover transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </SolarEclipse>
  );
};

export default JupiterPage;
