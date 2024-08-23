"use client";

import FadeInImage from "@/components/FadeInImage";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import EquipmentSection from "@/components/EquipmentSection";

const EquipmentPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pb-4 pt-16 2xl:flex-row 2xl:items-start 2xl:justify-center 2xl:pt-36">
      <Navbar page="/equipment" />
      <div className="flex flex-col items-center gap-6 2xl:absolute 2xl:right-12 2xl:flex-row 2xl:items-start 2xl:justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="z-10 flex w-11/12 flex-col gap-1 rounded-xl bg-neutral-900 p-6 shadow-2xl shadow-black/80 2xl:w-[36rem]"
        >
          <EquipmentSection>
            <EquipmentSection.Title>Telescopes</EquipmentSection.Title>
            <EquipmentSection.Items>
              AT-60ED / 5" Newtonian
            </EquipmentSection.Items>
          </EquipmentSection>
          <EquipmentSection>
            <EquipmentSection.Title>Mounts</EquipmentSection.Title>
            <EquipmentSection.Items>
              EQM-35 / Skywatcher Star Adventurer 2i
            </EquipmentSection.Items>
          </EquipmentSection>
          <EquipmentSection>
            <EquipmentSection.Title>Imaging Cameras</EquipmentSection.Title>
            <EquipmentSection.Items>
              ZWO ASI1600MM / ZWO ASI462MC / Fujifilm X-T30ii
            </EquipmentSection.Items>
          </EquipmentSection>
          <EquipmentSection>
            <EquipmentSection.Title>Filters</EquipmentSection.Title>
            <EquipmentSection.Items>
              ZWO LRGB 1.25" / Antlia SHO 3nm 1.25" / ZWO UVIR Cut 1.25"
            </EquipmentSection.Items>
          </EquipmentSection>
          <EquipmentSection>
            <EquipmentSection.Title>Guiding</EquipmentSection.Title>
            <EquipmentSection.Items>
              SVbony 30mm mini / ASI120MM
            </EquipmentSection.Items>
          </EquipmentSection>
          <EquipmentSection>
            <EquipmentSection.Title>Focusers</EquipmentSection.Title>
            <EquipmentSection.Items>ZWO EAF</EquipmentSection.Items>
          </EquipmentSection>
        </motion.div>
        <div className="relative z-10 h-[42rem] w-11/12 cursor-pointer 2xl:w-[36rem] 2xl:max-w-screen-2xl">
          <FadeInImage
            src="https://i.imgur.com/pr23zob.jpeg"
            alt="equipment-picture"
            className="rounded-xl object-cover shadow-2xl shadow-black/80"
            sizes="30vw, 50vw, 100vw"
            fill
            unoptimized
          />
        </div>
      </div>
      <FadeInImage
        alt="bg"
        src="https://i.imgur.com/ZhgKoRc.png"
        fill
        className="object-cover object-top gradient-mask-t-0"
        priority
        quality={100}
      />
    </main>
  );
};

export default EquipmentPage;
