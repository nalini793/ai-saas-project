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
    prompt_b: prompt
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

    const response = await replicate.run("riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05", { input });
    if (!isPro) {
      await increaseApiLimit();
    }
    return NextResponse.json(response)
  }
  catch (error) {
    console.log("[MUSIC_ERROR]", error)
    return new NextResponse("Internal error", {status: 500})
  }
}