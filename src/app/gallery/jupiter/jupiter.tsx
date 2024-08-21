"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const Jupiter = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar page="/" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="items-center justify-between 2xl:flex"
    >
      <div className="relative h-[calc(100vh-120px)] gradient-mask-b-80 2xl:h-[calc(87vh-150px)] 2xl:min-h-screen 2xl:w-[180vw] 2xl:max-w-[130rem] 2xl:gradient-mask-r-80">
        {children}
      </div>
      <ObjectInfo grow>
        <ObjectInfo.Title>Jupiter & Moons</ObjectInfo.Title>
        <ObjectInfo.Subtitle>Io, Ganymede, Europa</ObjectInfo.Subtitle>
        <ObjectInfo.Filters>
          <h6>
            <span className="text-red-500">R</span>,{" "}
            <span className="text-green-500">G</span>,{" "}
            <span className="text-blue-500">B</span>
          </h6>
        </ObjectInfo.Filters>
        <ObjectInfo.Details>
          <p>Object Type: Emission nebula</p>
          <p>Declination: -24° 23′ 12″</p>
          <p>Right Ascension: 18h 3m 37s</p>
          <p>Imaging Type: Broadband</p>
          <p>Integration Time: 9 hours per panel (2 panels)</p>
        </ObjectInfo.Details>
        <ObjectInfo.Description>
          <p>
            Jupiter is the largest planet in our Solar System, known for its
            immense size and striking features. With a diameter of about 86,900
            miles (139,800 kilometers), it is a gas giant predominantly composed
            of hydrogen and helium. Jupiter's atmosphere is renowned for its
            dynamic and colorful cloud bands, driven by its rapid rotation,
            which creates a dramatic striped appearance.
          </p>
          <p>
            Seen in the image are some of Jupiter's largest moons: Io, Ganymede,
            Europa. Ganymede is casting a shadow on Jupiter's surface.
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton text="Continue (6/9)" href="/gallery/lunareclipse" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default Jupiter;
