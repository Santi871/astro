"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Carina = () => {
  return (
    <>
      <Navbar page="/" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="items-center justify-between 2xl:flex 2xl:flex-row"
      >
        <div className="relative h-[calc(87vh-150px)] 2xl:left-96 2xl:min-h-screen 2xl:w-1/2">
          <Image
            src="https://cdn.astrobin.com/thumbs/k7FfrMzfDyXS_1824x0_CvlzE9Ft.png"
            alt="moon"
            fill
            className="z-0 object-cover"
          />
        </div>
        <div className="">
          <h4 className="text-5xl">Dragons of Ara</h4>
          <Link
            href="/dragons"
            className="z-0 flex flex-col items-center justify-center gap-5 pt-24 2xl:mr-48 2xl:pr-96 2xl:pt-96 2xl:text-2xl"
          >
            <p>Continue</p>
            <BsArrowRightCircle className="z-50 hidden h-16 w-16 cursor-pointer 2xl:block" />
            <BsArrowDownCircle className="z-50 mb-10 h-16 w-16 cursor-pointer 2xl:hidden" />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Carina;
