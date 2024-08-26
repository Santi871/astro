"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const Carina = ({ children }: { children: React.ReactNode }) => (
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
        <ObjectInfo.Title>Eta Carina Widefield</ObjectInfo.Title>
        <ObjectInfo.Subtitle>
          Eta Carina Nebula, Running Chicken Nebula, Southern Pleiades cluster
        </ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="rgb" />
        <ObjectInfo.Details>
          <p>Object Type: Milky Way region w/ nebulae and clusters</p>
          <p>Right Ascension: 10h 45m 4s</p>
          <p>Declination: -59° 41′ 4″</p>
          <p>Integration Time: 1 hour</p>
        </ObjectInfo.Details>
        <ObjectInfo.Description>
          <p>
            One of the crown jewels of the southern sky, the Eta Carinae Nebula
            is a large, complex area of bright and dark nebulosity in the
            constellation Carina, located in the Carina–Sagittarius Arm of the
            Milky Way galaxy. The nebula is approximately 8,500 light-years from
            Earth.
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton text="Continue (1/10)" href="/gallery/tarantula" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default Carina;
