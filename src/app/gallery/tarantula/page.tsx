import React from "react";
import Tarantula from "./tarantula";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const TarantulaPage = () => {
  const src =
    "https://cdn.astrobin.com/thumbs/Im42TMp2oNI1_16536x0_ieTZ0INm.jpg";
  return (
    <Tarantula>
      <Link href={src}>
        <FadeInImage
          src={src}
          alt="tarantula"
          className="z-0 cursor-pointer object-cover transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </Tarantula>
  );
};

export default TarantulaPage;
