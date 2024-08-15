"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface AstroImageProps {
  url: string;
  alt: string;
}

const AstroImage = ({ url, alt }: AstroImageProps) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative h-[36rem] w-5/6 cursor-pointer lg:max-w-screen-2xl"
      >
        <motion.div className="relative z-50 m-4 h-24 w-48 rounded-xl bg-neutral-950/70 p-4 font-mono text-neutral-300">
          Eta Carina Nebula
        </motion.div>
        <Image
          src={url}
          alt={alt}
          className="rounded-xl object-cover shadow-xl shadow-black/80"
          unoptimized
          fill
        />
      </motion.div>
    </>
  );
};

export default AstroImage;
