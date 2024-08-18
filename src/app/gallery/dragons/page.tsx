import React from "react";
import Dragons from "./dragons";
import FadeInImage from "@/components/FadeInImage";
import dragons from "@/../public/dragons.png";

const DragonsPage = () => (
  <Dragons>
    <FadeInImage
      src={dragons}
      alt="dragons"
      className="z-50 object-cover object-bottom transition-all"
      fill
      priority
      quality={100}
    />
  </Dragons>
);

export default DragonsPage;
