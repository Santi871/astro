import React from "react";
import Dragons from "./dragons";
import FadeInImage from "@/components/FadeInImage";

const CarinaPage = () => (
  <Dragons>
    <FadeInImage
      src="https://cdn.astrobin.com/thumbs/k7FfrMzfDyXS_1824x0_CvlzE9Ft.png"
      alt="dragons"
      className="z-0 object-cover transition-all"
      fill
    />
  </Dragons>
);

export default CarinaPage;
