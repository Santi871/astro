"use client";

import { useAnimation, motion } from "framer-motion";
import {
  useState,
  useEffect,
  DetailedHTMLProps,
  ImgHTMLAttributes,
  JSX,
  RefAttributes,
} from "react";
import Image from "next/image";
import {
  PlaceholderValue,
  OnLoadingComplete,
} from "next/dist/shared/lib/get-img-props";

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const FadeInImage = (
  props: JSX.IntrinsicAttributes &
    Omit<
      DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
      "ref" | "height" | "width" | "loading" | "alt" | "src" | "srcSet"
    > & {
      src: string | import("next/dist/shared/lib/get-img-props").StaticImport;
      alt: string;
      width?: number | `${number}` | undefined;
      height?: number | `${number}` | undefined;
      fill?: boolean | undefined;
      loader?: import("next/image").ImageLoader | undefined;
      quality?: number | `${number}` | undefined;
      priority?: boolean | undefined;
      loading?: "eager" | "lazy" | undefined;
      placeholder?: PlaceholderValue | undefined;
      blurDataURL?: string | undefined;
      unoptimized?: boolean | undefined;
      overrideSrc?: string | undefined;
      onLoadingComplete?: OnLoadingComplete | undefined;
      layout?: string | undefined;
      objectFit?: string | undefined;
      objectPosition?: string | undefined;
      lazyBoundary?: string | undefined;
      lazyRoot?: string | undefined;
    } & RefAttributes<HTMLImageElement | null>,
) => {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded]);
  return (
    <motion.div
      initial={"hidden"}
      animate={animationControls}
      variants={animationVariants}
      transition={{ ease: "easeOut", duration: 0.03 }}
    >
      <Image {...props} onLoad={() => setLoaded(true)} />
    </motion.div>
  );
};

export default FadeInImage;
