import React from "react";
import MontesAlpes from "./montesalpes";
import FadeInImage from "@/components/FadeInImage";

const MontesAlpesPage = () => (
  <MontesAlpes>
    <FadeInImage
      src="https://cdn.astrobin.com/thumbs/2KN4nsyoFHCS_16536x0_ieTZ0INm.jpg"
      alt="montesalpes"
      className="z-0 object-cover object-left transition-all"
      fill
      priority
      quality={100}
      unoptimized
    />
  </MontesAlpes>
);

export default MontesAlpesPage;
