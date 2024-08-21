"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const LunarEclipse = ({ children }: { children: React.ReactNode }) => (
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
        <ObjectInfo.Title>Total Lunar Eclipse</ObjectInfo.Title>
        <ObjectInfo.Subtitle>
          15th of May 2022, Buenos Aires, Argentina
        </ObjectInfo.Subtitle>
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
            One of the crown jewels of the southern sky, the Eta Carinae Nebula
            is a large, complex area of bright and dark nebulosity in the
            constellation Carina, located in the Carina–Sagittarius Arm of the
            Milky Way galaxy. The nebula is approximately 8,500 light-years from
            Earth.
          </p>
          <p>
            The title star, η (eta) Carinae, is a supergiant of about 100 solar
            masses that is ready to go supernova "any cosmic day now".
          </p>
        </ObjectInfo.Description>
        <ContinueButton text="Continue (8/9)" href="/gallery/solareclipse" />
      </ObjectInfo>
    </motion.div>
  </>
);

export default LunarEclipse;
