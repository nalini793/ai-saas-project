import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

import Replicate from 'replicate';
import { checkSubscription } from "@/lib/subscription";
const replicate = new Replicate();







export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json();
    const { prompt } = body;

const input = {
    fps: 24,
    width: 1024,
    height: 576,
    prompt: prompt,
    guidance_scale: 17.5,
    negative_prompt: "very blue, dust, noisy, washed out, ugly, distorted, broken"
};

    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

   
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    
    const freeTrial = await checkApiLimit();
     const isPro = await checkSubscription();
    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired.", {status: 403})
    }

    const response = await replicate.run("anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351", { input });
    await increaseApiLimit();
    if (!isPro) {
      await increaseApiLimit();
    }
  }
  catch (error) {
    console.log("[MUSIC_ERROR]", error)
    return new NextResponse("Internal error", {status: 500})
  }
}