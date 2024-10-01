"use client";

import Navbar from "@/components/Navbar";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import Counter from "@/components/Counter";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import ReactTimeAgo from "react-time-ago";
import ScopeDataWindow from "@/components/ScopeDataWindow";
import ScopeDataSection from "@/components/ScopeDataSection";
import FadeInImage from "@/components/FadeInImage";
import VideoFeed from "@/components/VideoFeed";
TimeAgo.addDefaultLocale(en);

interface PromQlQuery {
  status: string;
  data: PromQlQueryData;
}

interface PromQlQueryResult {
  metric: {
    hostname: string;
    instance: string;
    job: string;
    mount_name: string;
    profile: string;
    __name__: string;
  };
  value: any[];
}

interface PromQlQueryData {
  resultType: string;
  result: PromQlQueryResult[];
}

const LivePage = () => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [connectError, setConnectError] = useState<boolean>(false);
  const [mountAlt, setMountAlt] = useState<number | null>();
  const [lastRefresh, setLastRefresh] = useState<number | null>();

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("https://scopehub.santivegega.com/hub")
      .withAutomaticReconnect([1, 10, 30])
      .configureLogging(LogLevel.Information)
      .build();
    setConnection(connect);
    connect
      .start()
      .then(() => {
        setConnected(true);
        setConnectError(false);
        connect.onclose(() => setConnected(false));
        connect.on("SendStatus", (data: string) => {
          const result: PromQlQuery = JSON.parse(data);
          setLastRefresh(result.data.result[0].value[0]);
          setMountAlt(Number(result.data.result[0].value[1]));
        });
        connect?.invoke("FetchStatus");
        setInterval(() => {
          console.log("invoke");
          connect?.invoke("FetchStatus").catch(() => setConnectError(true));
        }, 5000);
      })

      .catch((err) => {
        console.error("Error while connecting to SignalR Hub:", err);
        setConnectError(true);
        setConnected(false);
      });

    return () => {
      if (connection) {
        connection.off("ReceiveMessage");
        connection.stop();
      }
    };
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pb-12 pt-32 ${connected && lastRefresh ? "text-white" : "text-neutral-600"} transition-all`}
    >
      <Navbar page="/live" />
      <div className="flex flex-col items-center justify-start gap-3 rounded-xl bg-neutral-900 p-5 underline-offset-4 shadow-xl">
        <h2 className="text-3xl text-white">Live Telescope Telemetry</h2>
        <ScopeDataSection>
          <h6 className="col-span-full text-xl text-white underline">Mount</h6>
          <ScopeDataWindow
            name="Altitude"
            unit="deg"
            value={mountAlt}
            connected={connected}
          />
          <ScopeDataWindow
            name="Azimuth"
            unit="deg"
            value={mountAlt}
            connected={connected}
          />
          <ScopeDataWindow
            name="Right Ascension"
            unit="deg"
            value={mountAlt}
            connected={connected}
          />
          <ScopeDataWindow
            name="Declination"
            unit="deg"
            value={mountAlt}
            connected={connected}
          />
          <div className="relative left-4 col-start-1 col-end-3 row-start-11 row-end-13 my-2 flex h-52 w-96 items-center justify-center overflow-hidden rounded-xl bg-neutral-950 text-center shadow-md lg:top-4 lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-8 lg:flex">
            <p className="absolute z-0 text-neutral-500">
              Video feed unavailable
            </p>
            <VideoFeed src="https://scopefeed.santivegega.com/stream/27aec28e-6181-4753-9acd-0456a75f0289/channel/0/hls/live/index.m3u8" />
          </div>
          <h6 className="col-span-2 text-xl text-white underline">Camera</h6>
          <ScopeDataWindow
            name="Sensor Temp"
            unit="°C"
            value={mountAlt}
            connected={connected}
          />
          <ScopeDataWindow
            name="Cooler Power"
            unit="%"
            value={mountAlt}
            connected={connected}
          />
          <h6 className="col-span-2 text-xl text-white underline">Guider</h6>
          <ScopeDataWindow
            name="RA Error"
            unit="arcsec"
            value={mountAlt}
            connected={connected}
          />
          <ScopeDataWindow
            name="Dec Error"
            unit="arcsec"
            value={mountAlt}
            connected={connected}
          />
          <h6 className="col-span-2 text-xl text-white underline">
            Latest Image
          </h6>
          <ScopeDataWindow
            name="Stars"
            unit="count"
            value={mountAlt}
            connected={connected}
          />
          <ScopeDataWindow
            name="HFR"
            unit="px"
            value={mountAlt}
            connected={connected}
          />
          <ScopeDataWindow
            name="Scale"
            unit="arcsec/px"
            value={mountAlt}
            connected={connected}
          />
          <ScopeDataWindow
            name="Exposure Time"
            unit="sec"
            value={mountAlt}
            connected={connected}
          />
        </ScopeDataSection>
        <div className="flex flex-none items-center justify-start gap-2 place-self-end text-sm text-neutral-500">
          <div
            className={`h-2 w-2 rounded-full ${connected ? "bg-green-500" : connectError ? "bg-red-500" : "bg-neutral-500"} transition-colors`}
          />
          <div className="flex items-center justify-center gap-1">
            Backend
            {connected && lastRefresh && (
              <ReactTimeAgo
                date={new Date(lastRefresh * 1000)}
                timeStyle="twitter"
                locale="en-US"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LivePage;
