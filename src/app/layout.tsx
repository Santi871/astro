import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santi871 Astro",
  description: "Astrophotography by Santi871",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={`${robotoMono.className} bg-black text-white`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
