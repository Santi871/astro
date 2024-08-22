"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
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
            The Montes Alpes, or the Alps Mountains, is a prominent mountain
            range on the Moon, located in the northern part of the lunar
            surface, near the edge of the Imbrium Basin. This range stretches
            approximately 200 miles (320 kilometers) and is characterized by its
            rugged terrain and high peaks.
          </p>
          <p>
            The Apollo 15 mission, which landed on the Moon in July 1971, made a
            significant stop in the vicinity of the Montes Alpes. The Lunar
            Module, "Falcon," landed in the nearby Hadley-Apennine region,
            allowing astronauts David Scott and James Irwin to explore the area.
            Their exploration included visits to the base of the Montes Alpes,
            where they collected samples and conducted experiments.
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton text="Continue (5/9)" href="/gallery/lagoon" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default MontesAlpes;
