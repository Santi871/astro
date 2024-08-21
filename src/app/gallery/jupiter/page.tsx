import React from "react";
import Jupiter from "./jupiter";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const JupiterPage = () => {
  const src =
    "https://cdn.astrobin.com/thumbs/6oriK55tIl33_16536x0_ieTZ0INm.png";
  return (
    <Jupiter>
      <Link href={src}>
        <FadeInImage
          src={src}
          alt="jupiter"
          className="z-0 cursor-pointer object-cover transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </Jupiter>
  );
};

export default JupiterPage;
