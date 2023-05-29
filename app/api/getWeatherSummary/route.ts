import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // Weatherdata in the body of the POST request
  const { weatherData } = await request.json();

  const reponse = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you're an advanced AI assistant that will be presenting a summary of the weather. Introduce yourself as JARVIS. Then state the city you will be providing a summary for, Then give a summary of todays weather only, converting temps to farenheit. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions, such as wear SPF if the UV is high etc. Use the uv_index data provided to provide UV advice. Provide a joke regarding the weather. Assume the data came from the internet and not the user.`,
      },
      {
        role: "user",
        content: `Hi, can I get a summary of todays weather, use the following information to get the waether data: 
				${JSON.stringify(weatherData)}`,
      },
    ],
  });

  const { data } = reponse;

  console.log("DATA IS: ", data);

  return NextResponse.json(data.choices[0].message);
}
