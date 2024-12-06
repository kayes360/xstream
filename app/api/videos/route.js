import { getAllVideos } from "@/data/videos";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await getAllVideos()

    return NextResponse.json(data)
} 