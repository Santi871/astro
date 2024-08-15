"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsFilterRight } from "react-icons/bs";

const Dragons = () => {
  const [detailsOpen, setDetailsOpen] = React.useState<boolean>(false);

  return (
    <>
      <Navbar page="" noGradient />
      <motion.main
        className="flex min-h-screen flex-col items-center justify-center gap-3 bg-neutral-950/30 pb-5 pt-28 lg:flex-row lg:items-end"
        layout
      >
        <motion.div
          className="relative h-[calc(90vh-150px)] w-11/12 lg:h-[calc(100vh-150px)] lg:max-w-screen-lg"
          layout
        >
          <Image
            src="https://cdn.astrobin.com/thumbs/k7FfrMzfDyXS_1824x0_CvlzE9Ft.png"
            alt="dragons-nebula"
            fill
            className="rounded-xl object-cover shadow-xl shadow-black/80"
          />
          {/* 
        <BsFilterRight
          className="absolute bottom-0 right-0 mr-2 h-12 w-12 cursor-pointer text-white/80"
          onClick={() => setDetailsOpen(!detailsOpen)}
        />
        */}
        </motion.div>
        <motion.div
          layout
          onClick={() => setDetailsOpen(!detailsOpen)}
          initial={{ borderRadius: 12 }}
          className={`z-50 flex flex-col lg:flex-row lg:gap-12 ${detailsOpen ? "h-96 w-11/12 lg:w-96" : "h-10 w-10"} cursor-pointer items-center justify-start bg-neutral-900 shadow-xl shadow-black/80 lg:items-end lg:justify-start`}
        >
          <motion.div
            layout
            className="mt-3 h-4 w-4 rounded-full bg-pink-500 lg:mb-3 lg:ml-3"
          />
          {detailsOpen && (
            <motion.div className="flex h-full flex-col gap-2 py-4">
              <p className="mb-4 text-2xl">Dragons of Ara</p>
              <p className="text-md">Right Ascension: 49</p>
              <p className="text-md">Declination: 49</p>
            </motion.div>
          )}
        </motion.div>
        {detailsOpen && false && (
          <motion.div
            className="h-64 w-64 rounded-xl bg-neutral-900 p-4 shadow-xl shadow-black/80"
            layout
          >
            <p>Asadasdasd</p>
          </motion.div>
        )}
      </motion.main>
    </>
  );
};

export default Dragons;
