"use client";
import React from "react";
import { useCountdown } from "@/lib/hooks/useCountdown";

export default function CountdownTimer({ targetDate }: any) {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  if (hours + minutes + seconds <= 0) {
    return <ShowCounter hours={0} minutes={0} seconds={0} />;
  } else {
    return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />;
  }
}

const ShowCounter = ({ hours, minutes, seconds }: any) => {
  return (
    <text className="text-xs font-bold text-whity">{`${hours}h ${minutes}m ${seconds}s`}</text>
  );
};
