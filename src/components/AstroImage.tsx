"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface GalleryPreviewProps {
  url: string;
  alt: string;
}

const GalleryPreview = ({ url, alt }: GalleryPreviewProps) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative h-[36rem] w-5/6 cursor-pointer lg:max-w-screen-2xl"
      >
        <div className="group relative h-[36rem]">
          <div className="duration-800 absolute -inset-1 rounded-lg bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 opacity-0 blur-3xl transition group-hover:opacity-20 group-hover:duration-200"></div>
          <motion.div className="relative top-4 z-50 m-4 h-24 w-48 rounded-xl bg-neutral-950/70 p-4 font-mono text-neutral-300">
            Eta Carina Nebula
          </motion.div>
          <Image
            src={url}
            alt={alt}
            className="rounded-xl object-cover shadow-none transition-all hover:shadow-2xl"
            unoptimized
            fill
          />
        </div>
      </motion.div>
    </>
  );
};

export default GalleryPreview;
