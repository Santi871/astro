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
      className="items-center justify-between 2xl:flex 2xl:flex-row-reverse"
    >
      <div className="relative h-[calc(100vh-120px)] gradient-mask-b-80 2xl:h-[calc(87vh-150px)] 2xl:min-h-screen 2xl:w-[180vw] 2xl:max-w-[130rem] 2xl:gradient-mask-l-80">
        {children}
      </div>
      <ObjectInfo grow>
        <ObjectInfo.Title>Jupiter & Moons</ObjectInfo.Title>
        <ObjectInfo.Subtitle>Io, Ganymede, Europa</ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="rgb" />
        <ObjectInfo.Details>
          <p>Imaging Type: Lucky Imaging</p>
          <p>Focal Length: 1800mm</p>
          <p>Aperture: 130mm</p>
          <p>Pixel size: 2.9μm</p>
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
          <ContinueButton text="Continue (7/10)" href="/gallery/lunareclipse" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default Jupiter;
