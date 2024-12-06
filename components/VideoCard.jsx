import React from "react";
import Link from "next/link"; // Make sure to import Link from 'next/link'
import Image from "next/image";

export default function VideoCard({ video }) {
  return (
    <Link href={`/videos/${video.videoId}`}>
      <div className="rounded-lg overflow-hidden bg-color-gray hover:shadow-lg cursor-pointer">
        <Image
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-40 object-cover"
          height={300}
          width={300}
        />
        <div className="p-2">
          <p className="font-semibold">{video.title}</p>
          <p className="text-sm text-gray-400">{video.channelTitle}</p>
        
        </div>
      </div>
    </Link>
  );
}
