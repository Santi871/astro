import React, { ReactNode } from "react";

const HighlightedText = ({
  underlined = false,
  children,
}: {
  underlined?: boolean;
  children: ReactNode;
}) => (
  <span
    className={`${underlined ? "bg-yellow-400" : "bg-white"} px-1 py-0.5 text-black ${underlined ? "underline" : ""}`}
  >
    {children}
  </span>
);

export default HighlightedText;
