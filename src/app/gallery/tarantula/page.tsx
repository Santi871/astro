import React from "react";
import Tarantula from "./tarantula";
import FadeInImage from "@/components/FadeInImage";
import tarantula from "@/../public/tarantula.jpg";

const TarantulaPage = () => (
  <Tarantula>
    <FadeInImage
      src={tarantula}
      alt="tarantula"
      className="z-0 object-cover transition-all"
      fill
      priority
      quality={100}
    />
  </Tarantula>
);

export default TarantulaPage;
