import React from "react";
import Lagoon from "./lagoon";
import FadeInImage from "@/components/FadeInImage";

const LagoonPage = () => (
  <Lagoon>
    <FadeInImage
      src="https://cdn.astrobin.com/thumbs/9jd9U8PpJFPj_16536x0_ieTZ0INm.jpg"
      alt="lagoon"
      className="z-0 object-cover transition-all"
      fill
      priority
      quality={100}
      unoptimized
    />
  </Lagoon>
);

export default LagoonPage;
