"use client";

import React, { useEffect, useState } from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { ScopeData } from "../types";

const TelescopeData = () => {
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [data, setData] = useState<ScopeData | null>(null);
    const [status, setStatus] = useState<string>("Disconnected");

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:5209/telescopeHub")
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection
                .start()
                .then(() => {
                    setStatus("Connected");
                    connection.on("ReceiveTelescopeData", (message: ScopeData) => {
                        setData(message);
                    });
                })
                .catch((e) => {
                    console.error("Connection failed: ", e);
                    setStatus("Connection failed");
                });
        }
    }, [connection]);

    return (
        <div className="flex flex-col items-center justify-center gap-8 p-8 text-white">
            <h2 className="text-3xl font-light tracking-widest">LIVE TELESCOPE DATA</h2>

            <div className="flex flex-col gap-2 text-center">
                <p className="text-neutral-400">Status: <span className={status === "Connected" ? "text-green-400" : "text-red-400"}>{status}</span></p>
            </div>

            {data ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Azimuth</h3>
                        <p className="text-2xl font-light">{data.mount.azimuth.toFixed(2)}°</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Altitude</h3>
                        <p className="text-2xl font-light">{data.mount.altitude.toFixed(2)}°</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Right Ascension</h3>
                        <p className="text-2xl font-light">{data.mount.rightAscension.toFixed(4)}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Declination</h3>
                        <p className="text-2xl font-light">{data.mount.declination.toFixed(4)}</p>
                    </div>
                    <div className="col-span-1 flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:col-span-2 lg:col-span-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Pier Side</h3>
                        <div className="flex gap-4">
                            <p className={`text-xl font-light ${data.mount.sideOfPierEast ? "text-white" : "text-neutral-600"}`}>East</p>
                            <p className={`text-xl font-light ${data.mount.sideOfPierWest ? "text-white" : "text-neutral-600"}`}>West</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="animate-pulse text-neutral-500">
                    Waiting for data...
                </div>
            )}
        </div>
    );
};

export default TelescopeData;
