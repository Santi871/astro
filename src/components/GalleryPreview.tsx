"use client";

import { motion } from "framer-motion";
import React from "react";
import FadeInImage from "./FadeInImage";
import Link from "next/link";

interface GalleryPreviewProps {
  title: string;
  src: string;
  href: string;
  alt: string;
  fit?: string;
}

const GalleryPreview = ({
  title,
  src,
  href,
  alt,
  fit = "",
}: GalleryPreviewProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative h-[36rem] w-5/6 cursor-pointer lg:max-w-screen-2xl"
    >
      <Link href={href}>
        <motion.div className="relative z-40 m-4 max-w-44 rounded-xl bg-neutral-950/50 p-2 text-center font-mono text-neutral-300 backdrop-blur-sm 2xl:text-lg">
          {title}
        </motion.div>
        <FadeInImage
          src={src}
          alt={alt}
          className={`rounded-xl object-cover shadow-xl shadow-black/80 ${fit} z-0`}
          unoptimized
          fill
        />
      </Link>
    </motion.div>
  );
};

export default GalleryPreview;
