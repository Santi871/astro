import React from "react";

const ScopeDataSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{children}</div>
    </div>
  );
};

export default ScopeDataSection;
