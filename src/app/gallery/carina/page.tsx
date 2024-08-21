import React from "react";
import Carina from "./carina";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const CarinaPage = () => {
  const src =
    "https://cdn.astrobin.com/thumbs/eTeJngp4--ae_16536x0_ieTZ0INm.jpg";
  return (
    <Carina>
      <Link href={src}>
        <FadeInImage
          src={src}
          alt="carina"
          className="z-0 cursor-pointer object-cover transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </Carina>
  );
};

export default CarinaPage;
