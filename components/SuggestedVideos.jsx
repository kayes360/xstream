import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SuggestedVideos({ suggestedVideos }) { 
  return (
    <div>
      {suggestedVideos.map((video) => (
        <Link
          href={`/videos/${video.videoId}`}
          key={video.videoId}
          className="flex items-start space-x-4 hover:bg-slate-700"
        >
          <Image
            src={video.thumbnail} // Use the correct thumbnail URL from the `video` object
            alt={video.title} // Use the title of the video as the alt text
            className="w-30 h-20 rounded object-cover"
            height={200}
            width={200}
          />
          <div>
            <h3 className="font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-400">{video.channelName}</p>
            <p className="text-sm text-gray-400">{video.views} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
