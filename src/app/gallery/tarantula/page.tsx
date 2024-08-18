import React from "react";
import Tarantula from "./tarantula";
import FadeInImage from "@/components/FadeInImage";

const TarantulaPage = () => (
  <Tarantula>
    <FadeInImage
      src="https://cdn.astrobin.com/thumbs/Im42TMp2oNI1_16536x0_ieTZ0INm.jpg"
      alt="tarantula"
      className="z-0 object-cover transition-all"
      fill
      priority
      quality={100}
    />
  </Tarantula>
);

export default TarantulaPage;
