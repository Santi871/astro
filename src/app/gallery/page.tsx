"use client";

import AstroImage from "@/components/AstroImage";
import Navbar from "@/components/Navbar";

const Gallery = () => (
  <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pt-36">
    <Navbar page="/gallery" />
    <AstroImage
      url="https://cdn.astrobin.com/thumbs/k7FfrMzfDyXS_1824x0_CvlzE9Ft.png"
      alt="eta-carina-nebula"
    />
    <AstroImage
      url="https://cdn.astrobin.com/thumbs/rn81q3KRsUAs_1000x380_RdoU4IF5.png"
      alt="asd"
    />
    <AstroImage
      url="https://cdn.astrobin.com/thumbs/rn81q3KRsUAs_1000x380_RdoU4IF5.png"
      alt="asd"
    />
  </main>
);

export default Gallery;
