"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowDownCircle, BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const Dragons = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar page="/" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="items-center justify-evenly gap-96 2xl:flex 2xl:flex-row"
    >
      <div className="relative h-[calc(87vh-150px)] gradient-mask-b-80 2xl:left-96 2xl:min-h-screen 2xl:w-5/12 2xl:gradient-mask-r-90-d">
        {children}
      </div>
      <div className="z-0 mt-8 flex flex-col items-center justify-center gap-1 text-center">
        <h4 className="text-4xl 2xl:text-5xl">Dragons of Ara</h4>
        <h6 className="text-xl">NGC 6188</h6>
        <h6 className="text-xl">
          <span className="text-green-500">Hα</span>,{" "}
          <span className="text-red-500">Sii</span>,{" "}
          <span className="text-blue-500">Oiii</span>
        </h6>
        <div className="mt-8 max-w-xl px-4 text-left">
          <p className="text-md">Right Ascension: 49</p>
          <p className="text-md">Declination: 49</p>
          <p className="mt-4 text-justify text-sm">
            NGC 6188, The Fighting Dragons of Ara, is an emission nebula in the
            constellation of Ara. It gets its name from the apparent silhouette
            of two dragons engaged in a cosmic combat. Due to its hydrogen-rich
            clouds, NGC 6188 is a region of active star formation, and its
            structure is shaped by the powerful stellar winds of the young and
            massive stars within.
          </p>
          <p className="mt-4 text-justify text-sm">
            The glowing bipolar planetary nebula, NGC 6164, is visible at the
            bottom of the frame, which some liken to being like the "dragon's
            egg".
          </p>
        </div>
        <Link
          href="/dragons"
          className="flex flex-col items-center justify-center gap-5 pt-24 2xl:text-2xl"
          prefetch
        >
          <p>Continue</p>
          <BsArrowRightCircle className="z-50 hidden h-16 w-16 cursor-pointer 2xl:block" />
          <BsArrowDownCircle className="z-50 mb-10 h-16 w-16 cursor-pointer 2xl:hidden" />
        </Link>
      </div>
    </motion.div>
  </>
);

export default Dragons;
