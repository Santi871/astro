import React from "react";
import Carina from "./carina";
import FadeInImage from "@/components/FadeInImage";
import carina from "@/../public/carina.jpg";

const CarinaPage = () => (
  <Carina>
    <FadeInImage
      src={carina}
      alt="carina"
      className="z-0 object-cover transition-all"
      fill
      priority
      quality={100}
    />
  </Carina>
);

export default CarinaPage;
