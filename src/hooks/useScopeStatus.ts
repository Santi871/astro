import { MountStatus } from "@/app/live/page";
import { useState, useEffect } from "react";

const useScopeStatus = () => {
    const [connected, setConnected] = useState<boolean>(false);

    useEffect(() => {
      fetch("https://scopehub.santivegega.com/ScopeStatus")
        .then((res) => res.json())
        .then((status: MountStatus) => {
          if (status.connected) {
            setConnected(true);
          }
        });
    }, []);
  
    return {
        connected,
    }
}

export default useScopeStatus;