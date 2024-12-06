import { getVideos } from "@/utills/getVideos";
import Image from "next/image";
import React from "react";
import SuggestedVideos from "./SuggestedVideos";
import { notFound } from "next/navigation"; 

export default async function VideoDetails({ id, dict }) {
  const videos = await getVideos();
  const singleVideo = videos.find((video) => video.videoId === id);
  const suggestedVideos = videos.filter((video) => video.videoId !== id);
  if (!singleVideo) {
    notFound()
  }


  return (
    <>
      <div className="lg:w-3/4">
        <div className="relative">
          <iframe
            src={`https://www.youtube.com/embed/${singleVideo?.videoId}`}
            title={singleVideo?.title}
            frameBorder="0"
            className="w-full aspect-video h-[500px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center space-x-4">
              <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
              <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">
              {dict.live}
              </div>
              <span className="text-sm">46:02</span>
              <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
              {dict.donate}
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-4">{singleVideo?.title}</h1>
        <div className="flex items-center space-x-4 mt-2">
          {/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
          <Image
            src="/avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
            width={20}
            height={20}
          />

          <div>
            <p className="font-semibold">{singleVideo?.channelTitle}</p>
          </div>
          <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
          {dict.subscribe}
          </button>
        </div>
      </div>
      <div className="lg:w-1/4">
        <h2 className="text-xl font-semibold mb-4">{dict.you_may_like}</h2>
        <div className="space-y-4 overflow-y-scroll max-h-[600px]">
          <SuggestedVideos suggestedVideos={suggestedVideos} />
        </div>
      </div>
    </>
  );
}
