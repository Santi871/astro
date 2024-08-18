import React from "react";
import Carina from "./carina";
import FadeInImage from "@/components/FadeInImage";

const CarinaPage = () => (
  <Carina>
    <FadeInImage
      src="https://cdn.astrobin.com/thumbs/eTeJngp4--ae_16536x0_ieTZ0INm.jpg"
      alt="carina"
      className="z-0 object-cover transition-all"
      fill
      priority
      quality={100}
    />
  </Carina>
);

export default CarinaPage;
