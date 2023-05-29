"use client";

import { Card, Metric, Text, Color } from "@tremor/react";

type Props = {
  title: string;
  metric: string;
  color?: Color;
};

function StatCard({ title, metric, color }: Props) {
  return (
    <Card
      className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white ring-0"
      decoration="top"
      decorationColor={color}
    >
      <Text className="text-zinc-400">{title}</Text>
      <Metric className="text-white">{metric}</Metric>
    </Card>
  );
}

export default StatCard;
