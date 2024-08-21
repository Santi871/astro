"use client";

import { motion } from "framer-motion";
import React from "react";

interface ObjectInfoProps {
  grow?: boolean;
  children: React.ReactNode;
}

const ObjectInfo = ({ grow = false, children }: ObjectInfoProps) => {
  return (
    <div
      className={`z-0 mt-8 flex ${grow ? "grow" : ""} flex-col items-center justify-center gap-2 px-2 text-center 2xl:min-w-[36rem] 2xl:px-24`}
    >
      {children}
    </div>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-4xl 2xl:text-5xl">{children}</div>;
};

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xl">{children}</div>;
};

const Filters = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-2 px-2 text-left text-xl">{children}</div>;
};

const Details = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-4 w-full max-w-lg rounded p-2 text-center text-sm text-neutral-500">
      {children}
    </div>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-10 flex max-w-lg flex-col gap-3 text-justify text-sm">
      {children}
    </div>
  );
};

ObjectInfo.Title = Title;
ObjectInfo.Subtitle = Subtitle;
ObjectInfo.Filters = Filters;
ObjectInfo.Details = Details;
ObjectInfo.Description = Description;

export default ObjectInfo;
