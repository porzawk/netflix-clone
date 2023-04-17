"use client";
import dynamic from "next/dynamic";
import React from "react";
import { IVideos } from "types/movie";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Trailer = ({ videos }: { videos: IVideos[] }) => {
  const youtube = videos.find(
    (item) =>
      item.site === "YouTube" &&
      item.name.toLowerCase().includes("trailer" || "Teaser")
  );
  return (
    <div className="flex justify-center mb-3">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${youtube?.key}`}
        controls={true}
      />
    </div>
  );
};

export default Trailer;
