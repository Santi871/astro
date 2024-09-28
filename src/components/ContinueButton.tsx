import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  BsArrowRightCircle,
  BsArrowDownCircle,
  BsArrowReturnLeft,
} from "react-icons/bs";

interface NextImageProps {
  text: string;
  href: string;
  animate?: boolean;
}

const ContinueButton = ({ text, href, animate = false }: NextImageProps) => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const fromGallery = from === "gallery";

  return (
    <motion.div key="tour-button" className="z-0">
      <Link
        className="relative flex flex-col items-center justify-center gap-5 text-lg 2xl:text-2xl"
        href={fromGallery ? "/gallery" : href}
        prefetch
      >
        <motion.div
          whileTap={{ scale: 0.85 }}
          className={`flex flex-col items-center ${animate ? "gap-3" : "gap-2 2xl:gap-3"}`}
        >
          <p>{fromGallery ? "Return" : text}</p>
          <motion.div
            animate={
              animate
                ? {
                    x: [-10, 10, -10],
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {fromGallery ? (
              <BsArrowReturnLeft className="z-50 hidden h-14 w-14 cursor-pointer 2xl:block" />
            ) : (
              <BsArrowRightCircle className="z-50 hidden h-14 w-14 cursor-pointer 2xl:block" />
            )}
          </motion.div>
          <motion.div
            animate={
              animate
                ? {
                    y: [-10, 10, -10],
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {fromGallery ? (
              <BsArrowReturnLeft className="z-50 mb-8 h-12 w-12 cursor-pointer 2xl:hidden" />
            ) : (
              <BsArrowDownCircle className="z-50 mb-8 h-12 w-12 cursor-pointer 2xl:hidden" />
            )}
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ContinueButton;
