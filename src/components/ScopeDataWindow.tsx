import React from "react";
import Counter from "./Counter";

interface ScopeDataWindowProps {
  name: string;
  unit: string;
  connected: boolean;
  value?: number | null;
}

const ScopeDataWindow = ({
  name,
  unit,
  connected,
  value,
}: ScopeDataWindowProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white">
        {name} <span className="text-neutral-500">[{unit}]</span>
      </p>{" "}
      <Counter value={connected && value ? value : 0} />
    </div>
  );
};

export default ScopeDataWindow;
