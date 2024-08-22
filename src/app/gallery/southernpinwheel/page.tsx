import React from "react";
import SouthernPinwheel from "./southenpinwheel";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const SouthernPinwheelPage = () => {
  const src =
    "https://cdn.astrobin.com/thumbs/SjcqYZ9i7NIJ_16536x0_ieTZ0INm.jpg";
  return (
    <SouthernPinwheel>
      <Link href="https://cdn.astrobin.com/thumbs/SjcqYZ9i7NIJ_16536x0_ieTZ0INm.jpg">
        <FadeInImage
          src={src}
          alt="southernpinwheel"
          className="z-0 cursor-pointer object-cover transition-all"
          fill
          priority
          quality={100}
          unoptimized
        />
      </Link>
    </SouthernPinwheel>
  );
};

export default SouthernPinwheelPage;
