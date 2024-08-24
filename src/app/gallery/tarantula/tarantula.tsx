"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const Tarantula = ({ children }: { children: React.ReactNode }) => (
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
        <ObjectInfo.Title>Tarantula</ObjectInfo.Title>
        <ObjectInfo.Subtitle>
          Star forming region in the Large Magellanic Cloud
        </ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="sho" />
        <ObjectInfo.Details>
          <p>Object Type: Emission nebula, star clusters</p>
          <p>Right Ascension: 5h 38m 38s</p>
          <p>Declination: -69° 5′ 42″</p>
          <p>Integration Time: 34 hours</p>
        </ObjectInfo.Details>
        <ObjectInfo.Description>
          <p>
            The Tarantula Nebula is a colossal and vibrant star-forming region
            located in the Large Magellanic Cloud, about 160,000 light-years
            from Earth. It is the largest known nebula in our local universe and
            is renowned for its intense activity and striking beauty. The
            nebula's dynamic landscape is shaped by powerful stellar winds and
            radiation from massive young stars, which illuminate the surrounding
            gas and dust, creating a complex and colorful array of filaments and
            cavities.
          </p>
          <p>
            At its core lies the R136 star cluster, home to some of the most
            massive and luminous stars ever discovered.
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton text="Continue (2/10)" href="/gallery/dragons" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default Tarantula;
