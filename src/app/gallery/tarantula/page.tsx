import React from "react";
import Tarantula from "./tarantula";
import FadeInImage from "@/components/FadeInImage";
import Link from "next/link";

const TarantulaPage = () => (
  <Tarantula>
    <Link href="https://cdn.astrobin.com/thumbs/Im42TMp2oNI1_16536x0_ieTZ0INm.jpg">
      <FadeInImage
        src="https://cdn.astrobin.com/thumbs/Im42TMp2oNI1_16536x0_ieTZ0INm.jpg"
        alt="tarantula"
        className="z-0 cursor-pointer object-cover transition-all"
        fill
        priority
        quality={100}
      />
    </Link>
  </Tarantula>
);

export default TarantulaPage;
