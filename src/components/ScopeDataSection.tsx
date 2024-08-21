import { connected } from "process";
import React from "react";
import ScopeDataWindow from "./ScopeDataWindow";

const ScopeDataSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{children}</div>
    </div>
  );
};

export default ScopeDataSection;
