"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const Dragons = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar page="/" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="items-center justify-evenly 2xl:flex"
    >
      <div className="relative h-[calc(100vh-120px)] gradient-mask-b-80 2xl:h-[calc(87vh-150px)] 2xl:min-h-screen 2xl:w-[50vw] 2xl:max-w-[75rem] 2xl:gradient-mask-r-90-d">
        {children}
      </div>
      <ObjectInfo>
        <ObjectInfo.Title>Dragons of Ara</ObjectInfo.Title>
        <ObjectInfo.Subtitle>NGC 6188</ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="sho" />
        <ObjectInfo.Details>
          <p>Object Type: Emission nebula</p>
          <p>Declination: -24° 23′ 12″</p>
          <p>Right Ascension: 18h 3m 37s</p>
          <p>Imaging Type: Narrowband</p>
          <p>Integration Time: 21 hours</p>
        </ObjectInfo.Details>
        <ObjectInfo.Description>
          <p>
            NGC 6188, The Fighting Dragons of Ara, is an emission nebula in the
            constellation of Ara. It gets its name from the apparent silhouette
            of two dragons engaged in a cosmic combat. Due to its hydrogen-rich
            clouds, NGC 6188 is a region of active star formation, and its
            structure is shaped by the powerful stellar winds of the young and
            massive stars within.
          </p>
          <p>
            The glowing bipolar planetary nebula, NGC 6164, is visible at the
            bottom of the frame, which some liken to being like the "dragon's
            egg".
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton
            text="Continue (3/9)"
            href="/gallery/southernpinwheel"
          />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default Dragons;
