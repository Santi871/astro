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
    className={`fixed top-0 z-10 flex w-screen justify-center ${noGradient ? "" : "bg-gradient-to-t"} from-black/0 to-black/80 p-2 text-center text-white md:gap-5 2xl:p-10`}
  >
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
    <a href="/live">
      <NavbarItem highlight={page === "/live"}>
        <p>Live</p>
      </NavbarItem>
    </a>
    <a href="https://astro.santivegega.com" target="_blank">
      <NavbarItem>
        <p>Equipment</p>
      </NavbarItem>
    </a>
  </nav>
);

export default Navbar;
