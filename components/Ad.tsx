"use client";
import Image from "next/image";
import thumbnail from "@/public/images/adv-thumbnail.png";
import { Play } from "iconsax-react";
import { useState, useRef } from "react";

function Ad() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };
  
  return (
    <div className={`video-cotainer p-2 relative ${playing? "playing" : ""}`}>
      <div className="w-full video h-full">
        <Image src={thumbnail} alt="thumbnail" />
        <video ref={videoRef} src="/sbs.mp4" controls poster="/images/adv-thumbnail.png" />;
      </div>
      <span onClick={togglePlayPause} className="play-btn">
        <span>
          <Play />
        </span>
      </span>
    </div>
  );
}

export default Ad;
