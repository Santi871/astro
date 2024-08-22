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
        <ObjectInfo.Title>Total Solar Eclipse</ObjectInfo.Title>
        <ObjectInfo.Subtitle>
          8th of April 2024, Indianapolis, IN
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
            A total solar eclipse occurs when the Moon passes directly between
            the Earth and the Sun, completely obscuring the Sun's light from
            reaching Earth. As the Moon and Sun appear the same diameter in the
            sky, this alignment causes the Sun to be entirely covered by the
            Moon, creating a dramatic and brief event where the day momentarily
            turns into night.
          </p>
          <p>
            Total solar eclipses are rare events for any given location on
            Earth, as they require precise alignment of the Earth, Moon, and
            Sun. They offer a unique opportunity to study the Sun's corona and
            other celestial phenomena and are celebrated for their striking
            visual impact and fleeting duration.
          </p>
        </ObjectInfo.Description>
        <h6 className="text-3xl">Thanks for visiting!</h6>
        <Suspense>
          <ContinueButton text="Continue to gallery" href="/gallery" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default SolarEclipse;
