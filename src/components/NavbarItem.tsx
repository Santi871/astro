import React, { ReactNode } from "react";

interface NavbarItemProps {
  children: ReactNode;
  highlight?: boolean;
}

const NavbarItem = ({ children, highlight = false }: NavbarItemProps) => (
  <div
    className={`flex cursor-pointer items-center gap-2 rounded-md px-5 py-3 transition-all hover:bg-slate-800 ${highlight ? "underline" : ""}`}
  >
    {children}
  </div>
);

export default NavbarItem;
