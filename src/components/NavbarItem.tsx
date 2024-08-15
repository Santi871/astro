import React, { ReactNode } from "react";

interface NavbarItemProps {
  children: ReactNode;
  highlight?: boolean;
}

const NavbarItem = ({ children, highlight = false }: NavbarItemProps) => (
  <div
    className={`flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-2 transition-all hover:bg-white hover:text-black hover:underline md:px-5 ${highlight ? "underline" : ""}`}
  >
    {children}
  </div>
);

export default NavbarItem;
