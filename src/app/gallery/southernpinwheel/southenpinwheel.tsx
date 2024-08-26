"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const SouthernPinwheel = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar page="/" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="items-center justify-between 2xl:flex 2xl:flex-row-reverse"
    >
      <div className="relative h-[calc(100vh-120px)] gradient-mask-b-80 2xl:h-[calc(87vh-150px)] 2xl:min-h-screen 2xl:w-[180vw] 2xl:max-w-[130rem] 2xl:gradient-mask-l-80">
        {children}
      </div>
      <ObjectInfo grow>
        <ObjectInfo.Title>Southern Pinwheel</ObjectInfo.Title>
        <ObjectInfo.Subtitle>Messier 83</ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="rgb" />
        <ObjectInfo.Details>
          <p>Object Type: Barred spiral galaxy</p>
          <p>Right Ascension: 13h 37m 1s</p>
          <p>Declination: −29° 51′ 56.74″</p>
          <p>Integration Time: 17 hours</p>
        </ObjectInfo.Details>
        <ObjectInfo.Description>
          <p>
            The Southern Pinwheel Galaxy, also known as Messier 83 or M83, is a
            stunning spiral galaxy located about 15 million light-years away in
            the constellation Hydra. It is one of the closest and most
            well-studied barred spiral galaxies, offering a striking view of its
            intricate structure. This galaxy showcases vivid regions of star
            formation, with clusters of young, hot stars and nebulae that emit a
            rich, colorful glow.
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton text="Continue (4/10)" href="/gallery/montesalpes" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default SouthernPinwheel;
