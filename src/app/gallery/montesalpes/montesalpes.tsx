"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const MontesAlpes = ({ children }: { children: React.ReactNode }) => (
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
        <ObjectInfo.Title>Montes Alpes</ObjectInfo.Title>
        <ObjectInfo.Subtitle>Messier 83</ObjectInfo.Subtitle>
        <ObjectInfo.Filters>
          <h6>
            <span className="text-red-500">R</span>,{" "}
            <span className="text-green-500">G</span>,{" "}
            <span className="text-blue-500">B</span>
          </h6>
        </ObjectInfo.Filters>
        <ObjectInfo.Details>
          <p>Imaging Type: Lucky Imaging</p>
          <p>Focal Length: 1800mm</p>
          <p>Aperture: 130mm</p>
          <p>Pixel size: 2.9μm</p>
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
        <ContinueButton text="Continue (5/9)" href="/gallery/lagoon" />
      </ObjectInfo>
    </motion.div>
  </>
);

export default MontesAlpes;
