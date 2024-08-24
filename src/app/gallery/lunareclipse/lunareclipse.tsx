"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
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
        <ObjectInfo.Title>15th May '22 Lunar Eclipse</ObjectInfo.Title>
        <ObjectInfo.Subtitle>Buenos Aires, Argentina</ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="rgb" />
        <ObjectInfo.Description>
          <p>
            A total lunar eclipse occurs when the Earth passes directly between
            the Sun and the Moon, causing the Earth's shadow to completely cover
            the Moon. During this event, the Moon moves into the umbra, the
            darkest part of the Earth's shadow. As a result, the Moon can take
            on a striking reddish or coppery hue, often referred to as a "blood
            moon," due to the scattering of sunlight through the Earth's
            atmosphere, which filters and bends the light.
          </p>
          <p>
            The totality phase of a total lunar eclipse lasts from a few minutes
            to over an hour, depending on the specific alignment and orbital
            dynamics.
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton text="Continue (8/10)" href="/gallery/solareclipse" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default LunarEclipse;
