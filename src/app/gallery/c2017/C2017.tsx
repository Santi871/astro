"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const C2017 = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar page="/" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="items-center justify-between 2xl:flex"
    >
      <div className="relative h-[calc(100vh-120px)] gradient-mask-b-80 2xl:h-[calc(87vh-150px)] 2xl:min-h-screen 2xl:w-[180vw] 2xl:max-w-[130rem] 2xl:gradient-mask-r-90">
        {children}
      </div>
      <ObjectInfo grow>
        <ObjectInfo.Title>C/2017 K2 passes by M10</ObjectInfo.Title>
        <ObjectInfo.Subtitle>July 15th 2022</ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="mono" />
        <ObjectInfo.Details>
          <p>Object Type: Long-period comet</p>
          <p>Right Ascension: 16h 57m 9s</p>
          <p>Declination: −4° 5′ 58.07″</p>
          <p>Timelapse Time: 2 hours</p>
        </ObjectInfo.Details>
        <ObjectInfo.Description>
          <p>
            Comet C/2017 K2 (PanSTARRS) is a long-period comet that was
            discovered by the Pan-STARRS survey on May 21, 2017. It originates
            from the distant Oort Cloud, a region of icy bodies far beyond the
            orbit of Neptune. The comet's orbit is highly elliptical, bringing
            it close to the Sun and Earth at relatively rare intervals.
          </p>
          <p>
            The comet made its closest approach to the Sun on July 14, 2022.
            During this time, it exhibited a prominent and active coma and a
            lengthy, well-defined tail.
          </p>
        </ObjectInfo.Description>
        <h6 className="text-2xl">Thanks for visiting!</h6>
        <Suspense>
          <ContinueButton text="Continue to gallery" href="/gallery" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default C2017;
