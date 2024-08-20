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
  const [mountAlt, setMountAlt] = useState<number | null>();
  const [lastRefresh, setLastRefresh] = useState<number | null>();

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://localhost:5053/hub")
      .withAutomaticReconnect([1, 10, 30])
      .configureLogging(LogLevel.Information)
      .build();
    setConnection(connect);
    connect
      .start()
      .then(() => {
        setConnected(true);
        connect.onclose(() => setConnected(false));
        connect.on("SendStatus", (data: string) => {
          const result: PromQlQuery = JSON.parse(data);
          setLastRefresh(result.data.result[0].value[0]);
          setMountAlt(Number(result.data.result[0].value[1]));
        });
        // connect?.invoke("FetchStatus");
        setInterval(() => {
          console.log("invoke");
          connect?.invoke("FetchStatus");
        }, 5000);
      })

      .catch((err) =>
        console.error("Error while connecting to SignalR Hub:", err),
      );

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
      <div className="flex h-96 w-11/12 flex-col items-center justify-between rounded-xl bg-neutral-900 p-4 shadow-xl lg:w-1/4 2xl:max-w-[130rem]">
        <div className="flex gap-4">
          <div className="flex w-40 flex-col items-center gap-2">
            <p className="text-white">Altitude [deg]</p>{" "}
            <Counter value={connected && mountAlt ? mountAlt : 0} />
          </div>
          <div className="flex w-40 flex-col items-center gap-2">
            <p className="text-white">Azimuth [deg]</p> <Counter value={0} />
          </div>
        </div>
        <div className="flex flex-none items-center justify-start gap-3 place-self-end text-sm text-neutral-400">
          <div
            className={`h-2 w-2 rounded-full ${connected ? "bg-green-400" : "bg-red-400"}`}
          />
          <div className="flex flex-col items-center justify-center">
            {connected ? "Connected" : "Disconnected"}{" "}
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
