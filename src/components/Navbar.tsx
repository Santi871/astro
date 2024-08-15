import Link from "next/link";
import React, { ReactNode } from "react";
import NavbarItem from "./NavbarItem";
import { TbExternalLink } from "react-icons/tb";

interface NavbarProps {
  page: string;
}

const Navbar = ({ page }: NavbarProps) => (
  <nav className="fixed top-0 flex w-screen justify-center gap-5 p-10 text-center text-white">
    <Link href="/">
      <NavbarItem highlight={page === "/"}>
        <p>Home</p>
      </NavbarItem>
    </Link>
    <Link href="/resume">
      <NavbarItem highlight={page === "/resume"}>
        <p>Resume</p>
      </NavbarItem>
    </Link>
    <a href="https://astro.santivegega.com" target="_blank">
      <NavbarItem>
        <p>Astro</p>
        <TbExternalLink />
      </NavbarItem>
    </a>
  </nav>
);

export default Navbar;
