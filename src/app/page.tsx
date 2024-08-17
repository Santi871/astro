"use client";

import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";

const Home = () => (
  <main className="flex min-h-screen items-end justify-center bg-neutral-950 pt-36 lg:items-center lg:justify-end">
    <Navbar page="/" />
    <AnimatePresence>
      <motion.div
        key="image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.3 }}
        className="flex"
      >
        <Image
          src="https://cdn.astrobin.com/thumbs/6Crznu1BZ6XT_16536x0_ieTZ0INm.jpg"
          alt="moon"
          fill
          className="object-cover"
        />
        <motion.div key="tour-button" className="z-0">
          <Link
            className="flex flex-col items-center justify-center gap-5 lg:mr-48 lg:text-2xl"
            href="/carina"
            prefetch
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center gap-5"
            >
              <p>Take a tour</p>
              <motion.div
                animate={{
                  x: [-15, 15, -15],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <BsArrowRightCircle className="z-50 hidden h-16 w-16 cursor-pointer lg:block" />
              </motion.div>
              <BsArrowDownCircle className="z-50 mb-10 h-16 w-16 cursor-pointer lg:hidden" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </main>
);

export default Home;
