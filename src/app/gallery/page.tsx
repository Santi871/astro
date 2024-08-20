"use client";

import GalleryPreview from "@/components/AstroImage";
import Navbar from "@/components/Navbar";

const GalleryPage = () => (
  <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pb-12 pt-32">
    <Navbar page="/gallery" />
    <GalleryPreview
      url="https://cdn.astrobin.com/thumbs/k7FfrMzfDyXS_1824x0_CvlzE9Ft.png"
      alt="eta-carina-nebula"
    />
    <GalleryPreview
      url="https://cdn.astrobin.com/thumbs/rn81q3KRsUAs_1000x380_RdoU4IF5.png"
      alt="asd"
    />
    <GalleryPreview
      url="https://cdn.astrobin.com/thumbs/rn81q3KRsUAs_1000x380_RdoU4IF5.png"
      alt="asd"
    />
  </main>
);

export default GalleryPage;
