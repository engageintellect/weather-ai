"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by Open AI, Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
