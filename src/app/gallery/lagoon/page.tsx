import React from "react";
import Lagoon from "./lagoon";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const LagoonPage = () => {
  const src =
    "https://cdn.astrobin.com/thumbs/9jd9U8PpJFPj_16536x0_ieTZ0INm.jpg";
  return (
    <Lagoon>
      <Link href={src}>
        <FadeInImage
          src={src}
          alt="lagoon"
          className="z-0 cursor-pointer object-cover transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </Lagoon>
  );
};

export default LagoonPage;
