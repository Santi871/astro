warning: in the working copy of 'src/components/Navbar.tsx', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/src/app/live/page.tsx b/src/app/live/page.tsx[m
[1mindex 11742b5..905e2e5 100644[m
[1m--- a/src/app/live/page.tsx[m
[1m+++ b/src/app/live/page.tsx[m
[36m@@ -1,15 +1,10 @@[m
 "use client";[m
 [m
 import Navbar from "@/components/Navbar";[m
[31m-import {[m
[31m-  HubConnection,[m
[31m-  HubConnectionBuilder,[m
[31m-  LogLevel,[m
[31m-} from "@microsoft/signalr";[m
[31m-import React, { useEffect, useState } from "react";[m
 import ScopeDataWindow from "@/components/ScopeDataWindow";[m
 import ScopeDataSection from "@/components/ScopeDataSection";[m
 import VideoFeed from "@/components/VideoFeed";[m
[32m+[m[32mimport useScopeHub from "@/hooks/useScopeHub";[m
 [m
 export interface ScopeStatus {[m
   RightAscension: number;[m
[36m@@ -23,50 +18,9 @@[m [mexport interface MountStatus {[m
 }[m
 [m
 const LivePage = () => {[m
[31m-  const [connection, setConnection] = useState<HubConnection | null>(null);[m
[31m-  const [connected, setConnected] = useState<boolean>(false);[m
[31m-  const [connectError, setConnectError] = useState<boolean>(false);[m
[31m-  const [mountAlt, setMountAlt] = useState<number | null>();[m
[31m-  const [mountStatus, setMountStatus] = useState<ScopeStatus | null>();[m
[31m-  const [lastRefresh, setLastRefresh] = useState<number | null>();[m
[31m-[m
[31m-  useEffect(() => {[m
[31m-    const connect = new HubConnectionBuilder()[m
[31m-      .withUrl("https://scopehub.santivegega.com/hub")[m
[31m-      .withAutomaticReconnect([1, 10, 30])[m
[31m-      .configureLogging(LogLevel.Information)[m
[31m-      .build();[m
[31m-    setConnection(connect);[m
[31m-    connect[m
[31m-      .start()[m
[31m-      .then(() => {[m
[31m-        setConnected(true);[m
[31m-        setConnectError(false);[m
[31m-        connect.onclose(() => setConnected(false));[m
[31m-        connect.on("SendStatusV2", (data: string) => {[m
[31m-          const result: ScopeStatus = JSON.parse(data);[m
[31m-          setLastRefresh(Date.now());[m
[31m-          setMountStatus(result);[m
[31m-        });[m
[31m-        connect?.invoke("FetchStatusV2");[m
[31m-        setInterval(() => {[m
[31m-          connect?.invoke("FetchStatusV2").catch(() => setConnectError(true));[m
[31m-        }, 5000);[m
[31m-      })[m
[31m-[m
[31m-      .catch((err) => {[m
[31m-        console.error("Error while connecting to SignalR Hub:", err);[m
[31m-        setConnectError(true);[m
[31m-        setConnected(false);[m
[31m-      });[m
[31m-[m
[31m-    return () => {[m
[31m-      if (connection) {[m
[31m-        connection.off("ReceiveMessage");[m
[31m-        connection.stop();[m
[31m-      }[m
[31m-    };[m
[31m-  }, []);[m
[32m+[m[32m  const { connected, connectError, mountStatus } = useScopeHub([m
[32m+[m[32m    "https://scopehub.santivegega.com/hub",[m
[32m+[m[32m  );[m
 [m
   return ([m
     <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pb-12 pt-32 transition-all">[m
[36m@@ -109,26 +63,26 @@[m [mconst LivePage = () => {[m
           <ScopeDataWindow[m
             name="Sensor Temp"[m
             unit="°C"[m
[31m-            value={mountAlt}[m
[32m+[m[32m            value={0}[m
             connected={connected}[m
           />[m
           <ScopeDataWindow[m
             name="Cooler Power"[m
             unit="%"[m
[31m-            value={mountAlt}[m
[32m+[m[32m            value={0}[m
             connected={connected}[m
           />[m
           <h6 className="col-span-2 text-xl text-white underline">Guider</h6>[m
           <ScopeDataWindow[m
             name="RA Error"[m
             unit="arcsec"[m
[31m-            value={mountAlt}[m
[32m+[m[32m            value={0}[m
             connected={connected}[m
           />[m
           <ScopeDataWindow[m
             name="Dec Error"[m
             unit="arcsec"[m
[31m-            value={mountAlt}[m
[32m+[m[32m            value={0}[m
             connected={connected}[m
           />[m
           <h6 className="col-span-2 text-xl text-white underline">[m
[36m@@ -137,25 +91,25 @@[m [mconst LivePage = () => {[m
           <ScopeDataWindow[m
             name="Stars"[m
             unit="count"[m
[31m-            value={mountAlt}[m
[32m+[m[32m            value={0}[m
             connected={connected}[m
           />[m
           <ScopeDataWindow[m
             name="HFR"[m
             unit="px"[m
[31m-            value={mountAlt}[m
[32m+[m[32m            value={0}[m
             connected={connected}[m
           />[m
           <ScopeDataWindow[m
             name="Scale"[m
             unit="arcsec/px"[m
[31m-            value={mountAlt}[m
[32m+[m[32m            value={0}[m
             connected={connected}[m
           />[m
           <ScopeDataWindow[m
             name="Exposure Time"[m
             unit="sec"[m
[31m-            value={mountAlt}[m
[32m+[m[32m            value={0}[m
             connected={connected}[m
           />[m
         </ScopeDataSection>[m
[1mdiff --git a/src/components/Navbar.tsx b/src/components/Navbar.tsx[m
[1mindex 684b3de..e8ee2e3 100644[m
[1m--- a/src/components/Navbar.tsx[m
[1m+++ b/src/components/Navbar.tsx[m
[36m@@ -1,8 +1,8 @@[m
 import Link from "next/link";[m
[31m-import React, { ReactNode, useEffect, useState } from "react";[m
[32m+[m[32mimport React from "react";[m
 import NavbarItem from "./NavbarItem";[m
 import { TbExternalLink } from "react-icons/tb";[m
[31m-import { MountStatus, ScopeStatus } from "@/app/live/page";[m
[32m+[m[32mimport useScopeStatus from "@/hooks/useScopeStatus";[m
 [m
 interface NavbarProps {[m
   page: string;[m
[36m@@ -10,17 +10,7 @@[m [minterface NavbarProps {[m
 }[m
 [m
 const Navbar = ({ page, noGradient = false }: NavbarProps) => {[m
[31m-  const [connected, setConnected] = useState<boolean>(false);[m
[31m-[m
[31m-  useEffect(() => {[m
[31m-    fetch("https://scopehub.santivegega.com/ScopeStatus")[m
[31m-      .then((res) => res.json())[m
[31m-      .then((status: MountStatus) => {[m
[31m-        if (status.connected) {[m
[31m-          setConnected(true);[m
[31m-        }[m
[31m-      });[m
[31m-  }, []);[m
[32m+[m[32m  const { connected } = useScopeStatus();[m
 [m
   return ([m
     <nav[m
