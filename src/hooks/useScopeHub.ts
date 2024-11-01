import { ScopeStatus } from "@/app/live/page";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useEffect, useState } from "react";

const useScopeHub = (url: string) => {
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [connected, setConnected] = useState<boolean>(false);
    const [connectError, setConnectError] = useState<boolean>(false);
    const [mountStatus, setMountStatus] = useState<ScopeStatus | null>();
    const [lastRefresh, setLastRefresh] = useState<number | null>();

    useEffect(() => {
        const connect = new HubConnectionBuilder()
          .withUrl(url)
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
            connect.on("SendStatusV2", (data: string) => {
              const result: ScopeStatus = JSON.parse(data);
              setLastRefresh(Date.now());
              setMountStatus(result);
            });
            connect?.invoke("FetchStatusV2");
            setInterval(() => {
              connect?.invoke("FetchStatusV2").catch(() => setConnectError(true));
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
    
    return {
        connection,
        connected,
        connectError,
        mountStatus,
        lastRefresh,
    }
}

export default useScopeHub;