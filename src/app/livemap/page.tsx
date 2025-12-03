"use client";

import Navbar from "@/components/Navbar";
import SkyMap from "@/components/SkyMap";
import React, { useEffect, useState } from "react";

interface TelescopeData {
    ra: number;
    dec: number;
    az: number;
    alt: number;
    timestamp: string;
}

const LivePage = () => {
    const [data, setData] = useState<TelescopeData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/telescope");
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error("Failed to fetch telescope data", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 2000); // Poll every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pb-4 pt-20 2xl:pt-36">
            <Navbar page="/live" />

            <div className="flex w-11/12 flex-col gap-6 2xl:w-[64rem]">
                <div className="flex flex-col justify-between gap-4 rounded-xl bg-neutral-900 p-6 shadow-2xl shadow-black/80 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-light text-white">Live Telescope View</h1>
                        <p className="text-sm text-neutral-400">
                            Real-time pointing coordinates
                        </p>
                    </div>

                    {data && (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-neutral-300">
                            <div className="flex flex-col">
                                <span className="text-xs text-neutral-500">RA</span>
                                <span className="font-mono">{data.ra.toFixed(4)}h</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-neutral-500">DEC</span>
                                <span className="font-mono">{data.dec.toFixed(4)}°</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-neutral-500">AZ</span>
                                <span className="font-mono">{data.az.toFixed(2)}°</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-neutral-500">ALT</span>
                                <span className="font-mono">{data.alt.toFixed(2)}°</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative h-[50vh] w-full overflow-hidden rounded-xl border border-neutral-800 bg-black shadow-2xl shadow-black/80 2xl:h-[600px]">
                    {data ? (
                        <SkyMap ra={data.ra} dec={data.dec} />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-neutral-500">
                            Loading telescope data...
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default LivePage;
