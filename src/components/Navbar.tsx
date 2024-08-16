import Link from "next/link";
import React, { ReactNode } from "react";
import NavbarItem from "./NavbarItem";
import { TbExternalLink } from "react-icons/tb";

interface NavbarProps {
  page: string;
  noGradient?: boolean;
}

const Navbar = ({ page, noGradient = false }: NavbarProps) => (
  <nav
    className={`fixed top-0 z-50 flex w-screen justify-center ${noGradient ? "" : "bg-gradient-to-t"} from-black/0 to-black/80 p-10 text-center text-white md:gap-5`}
  >
    <p className="absolute left-5 top-1 mx-auto ml-10 py-3 text-white/15 2xl:left-0 2xl:top-10">
      Astrophotography © Santiago Vegega 2024
    </p>
    <Link href="/">
      <NavbarItem highlight={page === "/"}>
        <p>Home</p>
      </NavbarItem>
    </Link>
    <a href="/gallery">
      <NavbarItem highlight={page === "/gallery"}>
        <p>Gallery</p>
      </NavbarItem>
    </a>
    <a href="https://astro.santivegega.com" target="_blank">
      <NavbarItem>
        <p>Equipment</p>
      </NavbarItem>
    </a>
    <a href="https://astro.santivegega.com" target="_blank">
      <NavbarItem>
        <p>About Me</p>
      </NavbarItem>
    </a>
    <a href="https://astro.santivegega.com" target="_blank">
      <NavbarItem>
        <p>Contact</p>
      </NavbarItem>
    </a>
  </nav>
);

export default Navbar;
