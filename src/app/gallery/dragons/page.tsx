import React from "react";
import Dragons from "./dragons";
import FadeInImage from "@/components/FadeInImage";

const DragonsPage = () => (
  <Dragons>
    <FadeInImage
      src="https://cdn.astrobin.com/thumbs/k7FfrMzfDyXS_1824x0_CvlzE9Ft.png"
      alt="dragons"
      className="z-50 object-cover object-bottom transition-all"
      fill
      priority
      quality={100}
    />
  </Dragons>
);

export default DragonsPage;
