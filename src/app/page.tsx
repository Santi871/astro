"use client";

import FadeInImage from "@/components/FadeInImage";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ContinueButton from "@/components/ContinueButton";

const Home = () => {
  return (
    <main className="right-10 flex min-h-screen items-end justify-center bg-black pt-36 2xl:items-center 2xl:justify-end">
      <Navbar page="/" />
      <AnimatePresence>
        <motion.div
          key="image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          className="flex"
        >
          <FadeInImage
            src="https://cdn.astrobin.com/thumbs/6Crznu1BZ6XT_16536x0_ieTZ0INm.jpg"
            alt="moon"
            className="object-cover"
            quality={100}
            fill
            priority
          />
          <div className="relative mb-8 2xl:right-24">
            <ContinueButton text="Take a tour" href="/gallery/carina" animate />
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Home;
