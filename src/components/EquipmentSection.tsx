import React from "react";

const EquipmentSection = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="mb-1 text-xl text-neutral-400 underline underline-offset-2">
      {children}
    </h4>
  );
};

const Items = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-lg">{children}</p>;
};

EquipmentSection.Title = Title;
EquipmentSection.Items = Items;

export default EquipmentSection;
