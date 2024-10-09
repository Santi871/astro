import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { TbExternalLink } from "react-icons/tb";
import { MountStatus, ScopeStatus } from "@/app/live/page";

interface NavbarProps {
  page: string;
  noGradient?: boolean;
}

const Navbar = ({ page, noGradient = false }: NavbarProps) => {
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://scopehub.santivegega.com/ScopeStatus")
      .then((res) => res.json())
      .then((status: MountStatus) => {
        if (status.connected) {
          setConnected(true);
        }
      });
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-screen flex-col items-center justify-center ${noGradient ? "" : "bg-gradient-to-t"} from-black/0 to-black/80 p-2 text-center text-white md:gap-3 2xl:p-10`}
    >
      <h5 className="absolute left-0 ml-24 hidden font-light text-neutral-400 2xl:block">
        Astrophotography © Santi871 2024
      </h5>
      <h5 className="relative text-sm font-light text-neutral-400 md:top-2 2xl:hidden">
        Astrophotography © Santi871 2024
      </h5>
      <div className="flex">
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
        <a href="/equipment">
          <NavbarItem highlight={page === "/equipment"}>
            <p>Equipment</p>
          </NavbarItem>
        </a>
        <a href="/live">
          <NavbarItem highlight={page === "/live"}>
            <p>Live</p>
            <div
              className={`h-2 w-2 rounded-full ${connected ? "bg-red-500" : "bg-neutral-500"} transition-colors`}
            />
          </NavbarItem>
        </a>
        <a href="https://www.astrobin.com/users/Santi871/" target="_blank">
          <NavbarItem>
            <p>Astrobin</p>
            <TbExternalLink />
          </NavbarItem>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
