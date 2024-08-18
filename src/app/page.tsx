"use client";

import FadeInImage from "@/components/FadeInImage";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import ContinueButton from "@/components/ContinueButton";

const Home = () => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://localhost:5053/hub")
      .withAutomaticReconnect([1, 3, 6])
      .configureLogging(LogLevel.Information)
      .build();
    setConnection(connect);
    connect
      .start()
      .then(() => {
        setConnected(true);
        connect.onclose(() => setConnected(false));
      })

      .catch((err) =>
        console.error("Error while connecting to SignalR Hub:", err),
      );

    return () => {
      if (connection) {
        connection.off("ReceiveMessage");
      }
    };
  }, []);

  useEffect(() => {
    console.log(connected);
  }, [connected]);

  return (
    <main className="right-10 flex min-h-screen items-end justify-center bg-black pt-36 2xl:items-center 2xl:justify-end">
      <Navbar page="/" />
      <AnimatePresence>
        <motion.div
          key="image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          className="flex"
        >
          <FadeInImage
            src="https://cdn.astrobin.com/thumbs/6Crznu1BZ6XT_16536x0_ieTZ0INm.jpg"
            alt="moon"
            className="object-cover"
            quality={100}
            fill
            priority
          />
          <div className="relative bottom-20 2xl:right-24">
            <ContinueButton text="Take a tour" href="/gallery/carina" animate />
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Home;
