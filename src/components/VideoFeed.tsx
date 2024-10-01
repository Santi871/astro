"use client";

import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoFeed: React.FC<VideoFeedProps> = ({ src }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>();

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      setPlayer(
        videojs(
          videoElement,
          {
            errorDisplay: false,
            loadingDisplay: false,
          },
          () => {
            console.log("player is ready");
          },
        ),
      );
    }
  }, [videoRef]);

  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [player]);

  return (
    <video ref={videoRef} autoPlay muted className="z-50">
      <source src={src} type="application/x-mpegURL" />
    </video>
  );
};

interface VideoFeedProps {
  src: string;
}

export default VideoFeed;
