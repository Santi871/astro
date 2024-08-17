"use client";

import FadeInImage from "@/components/FadeInImage";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";

const Home = () => (
  <main className="right-10 flex min-h-screen items-end justify-center bg-black pt-36 2xl:items-center 2xl:justify-end">
    <Navbar page="/" />
    <AnimatePresence>
      <motion.div
        key="image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.3 }}
        className="flex"
      >
        <FadeInImage
          src="https://cdn.astrobin.com/thumbs/6Crznu1BZ6XT_16536x0_ieTZ0INm.jpg"
          alt="moon"
          fill
          className="object-cover"
        />
        <motion.div key="tour-button" className="z-0">
          <Link
            className="relative bottom-6 flex flex-col items-center justify-center gap-5 2xl:mr-24 2xl:text-2xl"
            href="/carina"
            prefetch
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center gap-3"
            >
              <p>Take a tour</p>
              <motion.div
                animate={{
                  x: [-10, 10, -10],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <BsArrowRightCircle className="r z-50 hidden h-16 w-16 cursor-pointer 2xl:block" />
              </motion.div>
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <BsArrowDownCircle className="r z-50 h-12 w-12 cursor-pointer 2xl:hidden" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </main>
);

export default Home;
