import React from "react";
import Dragons from "./dragons";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const DragonsPage = () => {
  const src =
    "https://cdn.astrobin.com/thumbs/k7FfrMzfDyXS_1824x0_CvlzE9Ft.png";
  return (
    <Dragons>
      <Link href={src}>
        <FadeInImage
          src={src}
          alt="dragons"
          className="z-50 cursor-pointer object-cover object-bottom transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </Dragons>
  );
};

export default DragonsPage;
