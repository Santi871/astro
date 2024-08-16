"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Carina = () => (
  <>
    <Navbar page="/" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="items-center justify-start gap-80 2xl:flex 2xl:w-11/12 2xl:flex-row"
    >
      <div className="gradient-mask-b-80 2xl:gradient-mask-r-80 relative h-[calc(87vh-150px)] 2xl:min-h-screen 2xl:w-2/3">
        <Image
          src="https://cdn.discordapp.com/attachments/544305081009438720/1087034206858780775/1.jpg?ex=66bf6f7f&is=66be1dff&hm=bdee36ea0d6c6b62f4609de909b059b9bd04477231cf85b04f6a7bedd847b2db&"
          alt="carina"
          fill
          className="z-0 object-cover"
        />
      </div>
      <div className="relative z-0 mt-8 flex flex-col items-center justify-center gap-2 text-center">
        <h4 className="text-4xl 2xl:text-5xl">Eta Carina Widefield</h4>
        <h4 className="text-xl">
          Eta Carina Nebula, Running Chicken Nebula, Southern Pleiades cluster
        </h4>
        <h6 className="text-xl">
          <span className="text-red-500">R</span>,{" "}
          <span className="text-green-500">G</span>,{" "}
          <span className="text-blue-500">B</span>
        </h6>
        <div className="mt-8 max-w-xl px-4 text-left">
          <p className="text-md">Right Ascension: 49</p>
          <p className="text-md">Declination: 49</p>
          <p className="mt-4 text-justify text-sm">
            One of the crown jewels of the southern sky, the Eta Carinae Nebula
            is a large, complex area of bright and dark nebulosity in the
            constellation Carina, located in the Carina–Sagittarius Arm of the
            Milky Way galaxy. The nebula is approximately 8,500 light-years from
            Earth.
          </p>
          <p className="mt-4 text-justify text-sm">
            The title star, η (eta) Carinae, is a supergiant of about 100 solar
            masses that is ready to go supernova "any cosmic day now".
          </p>
        </div>
        <Link
          href="/dragons"
          className="flex flex-col items-center justify-center gap-5 pt-24 2xl:text-2xl"
        >
          <p>Continue</p>
          <BsArrowRightCircle className="z-50 hidden h-16 w-16 cursor-pointer 2xl:block" />
          <BsArrowDownCircle className="z-50 mb-10 h-16 w-16 cursor-pointer 2xl:hidden" />
        </Link>
      </div>
    </motion.div>
  </>
);

export default Carina;
