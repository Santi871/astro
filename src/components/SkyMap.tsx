"use client";

import React, { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        Celestial: any;
        d3: any;
    }
}

interface SkyMapProps {
    ra: number; // Hours
    dec: number; // Degrees
}

const SkyMap: React.FC<SkyMapProps> = ({ ra, dec }) => {
    const [loaded, setLoaded] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Dynamic import to ensure client-side execution
        const initCelestial = async () => {
            try {
                // d3-celestial might depend on global d3 or include it.
                // We import it here. It usually attaches to window.Celestial
                // @ts-ignore
                await import("d3-celestial");

                if (window.Celestial) {
                    setLoaded(true);
                } else {
                    console.error("Celestial not found on window after import");
                }
            } catch (error) {
                console.error("Failed to load d3-celestial:", error);
            }
        };

        initCelestial();
    }, []);

    useEffect(() => {
        if (loaded && window.Celestial) {
            const config = {
                width: 0, // Responsive
                projection: "airy",
                transform: "equatorial",
                center: [ra * 15, dec, 0],
                background: { fill: "#000000" },
                adaptable: true,
                interactive: true,
                stars: {
                    show: true,
                    colors: true,
                    names: true,
                    style: { fill: "#ffffff", opacity: 1 },
                    limit: 6,
                },
                dsos: { show: true, limit: 6 },
                constellations: {
                    show: true,
                    names: true,
                    lines: true,
                    lineStyle: { stroke: "#cccccc", width: 1, opacity: 0.5 },
                },
                mw: { show: true, style: { fill: "#ffffff", opacity: 0.1 } },
                lines: {
                    graticule: {
                        show: true,
                        stroke: "#cccccc",
                        width: 0.6,
                        opacity: 0.3,
                    },
                    equatorial: { show: true, stroke: "#aaaaaa", width: 1.3, opacity: 0.7 },
                },
                datapath: window.location.origin + "/data/",
            };

            // Clear previous map if any
            if (mapRef.current) {
                mapRef.current.innerHTML = "";
            }

            console.log("Initializing Celestial with config:", config);
            window.Celestial.display(config);
        }
    }, [loaded]);

    useEffect(() => {
        if (loaded && window.Celestial) {
            // Convert RA from hours to degrees (1h = 15deg)
            const center = [ra * 15, dec, 0];

            if (window.Celestial.rotate) {
                window.Celestial.rotate({ center });
            }

            // The error "window.Celestial.config is not a function" suggests config() is not exposed.
            // We can try to re-display or just rotate.
            // If we need to apply changes, we might need to call display again or just rely on rotate.
            // window.Celestial.apply(config) seems to be internal or requires a config object, not a function call.

            // For now, just rotate should be enough if the map is already displayed.
        }
    }, [ra, dec, loaded]);

    return (
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-black">
            <div id="celestial-map" ref={mapRef} className="h-full w-full"></div>

            {/* Reticle Overlay */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-red-500 opacity-80"></div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-2 -translate-x-1/2 -translate-y-1/2 transform bg-red-500"></div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-1 -translate-x-1/2 -translate-y-1/2 transform bg-red-500"></div>
        </div>
    );
};

export default SkyMap;
