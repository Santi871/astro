"use client";

import Navbar from "@/components/Navbar";
import ScopeDataWindow from "@/components/ScopeDataWindow";
import ScopeDataSection from "@/components/ScopeDataSection";
import VideoFeed from "@/components/VideoFeed";
import useScopeHub from "@/hooks/useScopeHub";

export interface ScopeStatus {
  RightAscension: number;
  Declination: number;
  Altitude: number;
  Azimuth: number;
}

export interface MountStatus {
  connected: boolean;
}

const LivePage = () => {
  const { connected, connectError, mountStatus } = useScopeHub(
    "https://scopehub.santivegega.com/hub",
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-neutral-950 pb-12 pt-32 transition-all">
      <Navbar page="/live" />
      <div className="flex flex-col items-center justify-start gap-3 rounded-xl bg-neutral-900 p-5 underline-offset-4 shadow-xl">
        <h2 className="text-3xl text-white">Live Telescope Telemetry</h2>
        <ScopeDataSection>
          <h6 className="col-span-full text-xl text-white underline">Mount</h6>
          <ScopeDataWindow
            name="Altitude"
            unit="deg"
            value={mountStatus?.Altitude ?? 0}
            connected={connected}
          />
          <ScopeDataWindow
            name="Azimuth"
            unit="deg"
            value={mountStatus?.Azimuth ?? 0}
            connected={connected}
          />
          <ScopeDataWindow
            name="Right Ascension"
            unit="deg"
            value={mountStatus?.RightAscension ?? 0}
            connected={connected}
          />
          <ScopeDataWindow
            name="Declination"
            unit="deg"
            value={mountStatus?.Declination ?? 0}
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
            value={0}
            connected={connected}
          />
          <ScopeDataWindow
            name="Cooler Power"
            unit="%"
            value={0}
            connected={connected}
          />
          <h6 className="col-span-2 text-xl text-white underline">Guider</h6>
          <ScopeDataWindow
            name="RA Error"
            unit="arcsec"
            value={0}
            connected={connected}
          />
          <ScopeDataWindow
            name="Dec Error"
            unit="arcsec"
            value={0}
            connected={connected}
          />
          <h6 className="col-span-2 text-xl text-white underline">
            Latest Image
          </h6>
          <ScopeDataWindow
            name="Stars"
            unit="count"
            value={0}
            connected={connected}
          />
          <ScopeDataWindow
            name="HFR"
            unit="px"
            value={0}
            connected={connected}
          />
          <ScopeDataWindow
            name="Scale"
            unit="arcsec/px"
            value={0}
            connected={connected}
          />
          <ScopeDataWindow
            name="Exposure Time"
            unit="sec"
            value={0}
            connected={connected}
          />
        </ScopeDataSection>
        <div className="flex flex-none items-center justify-start gap-2 place-self-end text-sm text-neutral-500">
          <div
            className={`h-2 w-2 rounded-full ${connected ? "bg-green-500" : connectError ? "bg-red-500" : "bg-neutral-500"} transition-colors`}
          />
          <div className="flex items-center justify-center gap-1">Backend</div>
        </div>
      </div>
    </main>
  );
};

export default LivePage;
