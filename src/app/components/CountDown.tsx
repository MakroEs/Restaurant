"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-12-31");

const CountDown = () => {
  return (
    <Countdown
      date={endingDate}
      className="font-bold text-5xl text-yellow-400"
    />
  );
};

export default CountDown;
