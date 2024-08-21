import React from "react";
import MontesAlpes from "./montesalpes";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const MontesAlpesPage = () => {
  const src =
    "https://cdn.astrobin.com/thumbs/2KN4nsyoFHCS_16536x0_ieTZ0INm.jpg";
  return (
    <MontesAlpes>
      <Link href={src}>
        <FadeInImage
          src={src}
          alt="montesalpes"
          className="z-0 cursor-pointer object-cover object-left transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </MontesAlpes>
  );
};

export default MontesAlpesPage;
