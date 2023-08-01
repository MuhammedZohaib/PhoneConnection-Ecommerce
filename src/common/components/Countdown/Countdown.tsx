import React, { useState, useEffect } from "react";
import CSS from "./Countdown.module.css";

const Countdown: React.FC = () => {
  const initialCountdown =
    Number(localStorage.getItem("countdown")) || 30 * 24 * 60 * 60;
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;
        localStorage.setItem("countdown", String(newCountdown));
        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdown / (24 * 60 * 60));
  const hours = Math.floor((countdown % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className={CSS.Main}>
      <div className={CSS.subdiv}>
        <span>{formatTime(days)}</span>
        <p>Days</p>
      </div>
      <div className={CSS.subdiv}>
        <span>{formatTime(hours)}</span>
        <p>Hours</p>
      </div>
      <div className={CSS.subdiv}>
        <span>{formatTime(minutes)}</span>
        <p>Minutes</p>
      </div>
      <div className={CSS.subdiv}>
        <span>{formatTime(seconds)}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
