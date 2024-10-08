"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const SolarEclipse = ({ children }: { children: React.ReactNode }) => (
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
        <ObjectInfo.Title>8th April '24 Solar Eclipse</ObjectInfo.Title>
        <ObjectInfo.Subtitle>Indianapolis, IN</ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="rgb" />
        <ObjectInfo.Description>
          <p>
            On April 8, 2024, the world witnessed a spectacular celestial event:
            a total solar eclipse. This eclipse was notable not only for its
            dramatic beauty but also for its wide path of totality, which
            crossed a significant portion of North America, including Mexico,
            the United States, and Canada. As the moon slid across the sun,
            millions of observers experienced the transformation of day into
            night. The eclipse reached its totality at approximately 1:30 PM EDT
          </p>
          <p>
            This event was remarkable for its accessibility. The path of
            totality was long and wide, allowing a larger swath of people than
            usual to experience the total eclipse. Cities and towns across the
            path hosted viewing events, educational activities, and
            celebrations.
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton text="Continue (9/10)" href="/gallery/c2017" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default SolarEclipse;
