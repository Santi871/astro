"use client";
import GalleryPreview from "@/components/GalleryPreview";
import Navbar from "@/components/Navbar";

const Gallery = () => (
  <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pb-8 pt-20 md:pt-24 2xl:pt-36">
    <Navbar page="/gallery" />
    <GalleryPreview
      title="Dragons of Ara"
      href="/gallery/dragons?from=gallery"
      src="https://cdn.astrobin.com/thumbs/k7FfrMzfDyXS_1824x0_CvlzE9Ft.png"
      alt="dragons"
    />
    <GalleryPreview
      title="Tarantula Nebula"
      href="/gallery/tarantula?from=gallery"
      src="https://cdn.astrobin.com/thumbs/Im42TMp2oNI1_16536x0_ieTZ0INm.jpg"
      alt="tarantula"
      fit="object-top"
    />
    <GalleryPreview
      title="Eta Carina Nebula"
      href="/gallery/carina?from=gallery"
      src="https://cdn.astrobin.com/thumbs/eTeJngp4--ae_16536x0_ieTZ0INm.jpg"
      alt="carina"
    />
    <GalleryPreview
      title="Southern Pinwheel Galaxy"
      href="/gallery/southernpinwheel?from=gallery"
      src="https://cdn.astrobin.com/thumbs/SjcqYZ9i7NIJ_16536x0_ieTZ0INm.jpg"
      alt="southernpinwheel"
    />
    <GalleryPreview
      title="Lagoon Nebula"
      href="/gallery/lagoon?from=gallery"
      src="https://cdn.astrobin.com/thumbs/9jd9U8PpJFPj_16536x0_ieTZ0INm.jpg"
      alt="lagoon"
    />
    <GalleryPreview
      title="Montes Alpes"
      href="/gallery/montesalpes?from=gallery"
      src="https://cdn.astrobin.com/thumbs/2KN4nsyoFHCS_16536x0_ieTZ0INm.jpg"
      alt="montesalpes"
    />
    <GalleryPreview
      title="Total Lunar Eclipse"
      href="/gallery/lunareclipse?from=gallery"
      src="https://i.imgur.com/eT2bKaJ.jpeg"
      alt="lunareclipse"
    />
    <GalleryPreview
      title="Total Solar Eclipse"
      href="/gallery/solareclipse?from=gallery"
      src="https://i.imgur.com/TErAy0w.jpeg"
      alt="solareclipse"
    />
    <GalleryPreview
      title="Jupiter & Moons"
      href="/gallery/jupiter?from=gallery"
      src="https://cdn.astrobin.com/thumbs/6oriK55tIl33_16536x0_ieTZ0INm.png"
      alt="jupiter"
    />
    <AstroImage
      title="C/2017 K2"
      href="/gallery/c2017?from=gallery"
      src="https://zipline.santi871.com/u/7qZ9oH.png"
      alt="c2017"
    />
  </main>
);

export default GalleryPage;
