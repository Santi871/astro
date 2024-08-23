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
      className={`z-0 flex ${grow ? "grow" : ""} flex-col items-center justify-center gap-2 px-2 text-center 2xl:min-w-[36rem] 2xl:px-24`}
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

const Filters = ({ type }: { type: "rgb" | "sho" }) => {
  const renderFilters = () => {
    switch (type) {
      case "rgb":
        return (
          <h6>
            <span className="text-red-500">R</span>,{" "}
            <span className="text-green-500">G</span>,{" "}
            <span className="text-blue-500">B</span>
          </h6>
        );
      case "sho":
        return (
          <h6>
            <span className="text-red-500">SII</span>,{" "}
            <span className="text-green-500">Hα</span>,{" "}
            <span className="text-blue-500">OIII</span>
          </h6>
        );
      default:
        return null;
    }
  };

  return <div className="mb-2 px-2 text-left text-xl">{renderFilters()}</div>;
};

const Details = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-4 w-full max-w-lg rounded text-left text-sm text-neutral-500">
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
