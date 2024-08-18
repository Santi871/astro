"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";

const Tarantula = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar page="/" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="items-center justify-between 2xl:flex 2xl:flex-row-reverse"
    >
      <div className="relative h-[calc(87vh-150px)] gradient-mask-b-80 2xl:min-h-screen 2xl:w-[180vw] 2xl:max-w-[130rem] 2xl:gradient-mask-l-80">
        {children}
      </div>
      <div className="relative z-0 mt-8 flex grow flex-col items-center justify-center gap-2 text-center">
        <h4 className="text-4xl 2xl:text-5xl">Tarantula</h4>
        <h4 className="text-xl">Large Magellanic Cloud</h4>
        <h6 className="text-xl">
          <span className="text-red-500">R</span>,{" "}
          <span className="text-green-500">G</span>,{" "}
          <span className="text-blue-500">B</span>
        </h6>
        <div className="mb-8 mt-8 max-w-xl px-4 text-left">
          <p className="text-md">Right Ascension: 49</p>
          <p className="text-md">Declination: 49</p>
          <p className="mt-4 text-justify text-sm">
            One of the crown jewels of the southern sky, the Eta Carinae Nebula
            is a large, complex area of bright and dark nebulosity in the
            constellation Carina, located in the Carina–Sagittarius Arm of the
            Milky Way galaxy. The nebula is approximately 8,500 light-years from
            Earth.
          </p>
          <p className="mt-4 text-justify text-sm">
            The title star, η (eta) Carinae, is a supergiant of about 100 solar
            masses that is ready to go supernova "any cosmic day now".
          </p>
        </div>
        <ContinueButton text="Continue" href="/gallery/dragons" />
      </div>
    </motion.div>
  </>
);

export default Tarantula;
