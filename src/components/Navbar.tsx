import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => (
  <nav className="fixed top-0 flex w-screen justify-center gap-5 p-10 text-center text-white">
    {children}
  </nav>
);

export default Navbar;
