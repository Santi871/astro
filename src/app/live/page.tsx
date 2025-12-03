"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import TelescopeData from "@/components/TelescopeData";

const LivePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center bg-black pt-36">
            <Navbar page="/live" />
            <div className="container mx-auto">
                <TelescopeData />
            </div>
        </main>
    );
};

export default LivePage;
