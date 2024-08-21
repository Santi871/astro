import React from "react";
import SouthernPinwheel from "./southenpinwheel";
import FadeInImage from "@/components/FadeInImage";

const SouthernPinwheelPage = () => (
  <SouthernPinwheel>
    <FadeInImage
      src="https://cdn.astrobin.com/thumbs/SjcqYZ9i7NIJ_16536x0_ieTZ0INm.jpg"
      alt="southernpinwheel"
      className="z-0 object-cover transition-all"
      fill
      priority
      quality={100}
      unoptimized
    />
  </SouthernPinwheel>
);

export default SouthernPinwheelPage;
