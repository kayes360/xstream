import {  getVideoById, videos } from "@/data/videos";
import { NextResponse } from "next/server";

export async function GET(_request, {params}) {
    const videoId = params?.id 
    const data = await getVideoById(videoId) 
    return NextResponse.json(data)
} 

export async function PATCH(request, {params}) {
    const videoUpdateData = await request.json()
    const videoId = params?.id 
    const videoIndex = videos.findIndex((video) => video.videoId === videoId)

    videos[videoIndex].title =videoUpdateData.title
    videos[videoIndex].description =videoUpdateData.description
    

    return NextResponse.json(videos[videoIndex])
} 

 

export async function DELETE(_request, {params}) {
    const videoId = params?.id 
    const videoIndex = videos.findIndex((video) => video.videoId === videoId)
    const videoToDelete = videos[videoIndex]
    videos.splice(videoIndex, 1)

    return NextResponse.json(videoToDelete)
} 