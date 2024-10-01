"use client";

import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ContinueButton from "@/components/ContinueButton";
import ObjectInfo from "@/components/ObjectInfo";

const Lagoon = ({ children }: { children: React.ReactNode }) => (
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
        <ObjectInfo.Title>Lagoon & Trifid</ObjectInfo.Title>
        <ObjectInfo.Subtitle>Messier 8, Messier 20</ObjectInfo.Subtitle>
        <ObjectInfo.Filters type="hargb" />
        <ObjectInfo.Details>
          <p>Object Type: Emission/reflection/dark nebula</p>
          <p>Right Ascension: 18h 3m 37s</p>
          <p>Declination: -24° 23′ 12″</p>
          <p>Integration Time: 9 hours per panel (2 panels)</p>
        </ObjectInfo.Details>
        <ObjectInfo.Description>
          <p>
            The Lagoon nebula is about 4,000 to 6,000 light-years from Earth and
            is renowned for its bright, intricate structure, featuring a central
            region of intense star formation. The nebula is illuminated by
            young, massive stars that energize the surrounding gas and dust,
            creating a striking mix of glowing red regions and dark, opaque
            filaments.
          </p>
          <p>
            Alongside it near the top of the image is the Trifid Nebula, a
            combination of an emission nebula, reflection nebula, and dark
            nebula, giving it a distinctive appearance. The nebula is known for
            its three-lobed shape, which is the result of dark dust lanes
            obscuring parts of the glowing gas.
          </p>
        </ObjectInfo.Description>
        <Suspense>
          <ContinueButton text="Continue (6/10)" href="/gallery/jupiter" />
        </Suspense>
      </ObjectInfo>
    </motion.div>
  </>
);

export default Lagoon;
