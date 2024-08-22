"use client";

import FadeInImage from "@/components/FadeInImage";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";

const EquipmentPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pb-4 pt-16 2xl:flex-row 2xl:items-start 2xl:justify-center 2xl:pt-36">
      <Navbar page="/equipment" />
      <div className="flex flex-col items-center gap-8 2xl:absolute 2xl:right-12 2xl:flex-row 2xl:items-start 2xl:justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="z-10 flex w-5/6 flex-col gap-1 rounded-xl bg-neutral-900 p-6 shadow-2xl shadow-black/80 2xl:w-[36rem]"
        >
          <p className="text-xl underline underline-offset-2">Telescopes</p>
          <p className="text-lg">AT-60ED / 5" Newtonian</p>
          <p className="text-xl underline underline-offset-2">Mounts</p>
          <p className="text-lg">EQM-35 / Skywatcher Star Adventurer 2i</p>
          <p className="text-xl underline underline-offset-2">
            Imaging Cameras
          </p>
          <p className="text-lg">
            ZWO ASI1600MM / ZWO ASI462MC / Fujifilm X-T30ii
          </p>
          <p className="text-xl underline underline-offset-2">Filters</p>
          <p className="text-lg">
            ZWO LRGB 1.25" / Antlia SHO 3nm 1.25" / ZWO UVIR Cut 1.25"
          </p>
          <p className="text-xl underline underline-offset-2">Guiding</p>
          <p className="text-lg">SVbony 30mm mini / ASI120MM</p>
          <p className="text-xl underline underline-offset-2">Focuser</p>
          <p className="text-lg">ZWO EAF</p>
        </motion.div>
        <div className="relative z-10 h-[36rem] w-5/6 cursor-pointer 2xl:h-[42rem] 2xl:w-[36rem] 2xl:max-w-screen-2xl">
          <FadeInImage
            src="https://cdn.discordapp.com/attachments/866005042824740864/974921922179653662/20220415_071258.jpg?ex=66c6db4b&is=66c589cb&hm=0f064538c041cc74dfde8366e644f8581f881d1326caf87c7998888dbd265e78&"
            alt="equipment-picture"
            className="rounded-xl bg-neutral-900 object-cover shadow-2xl shadow-black/80"
            sizes="30vw, 50vw, 100vw"
            unoptimized
            fill
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
