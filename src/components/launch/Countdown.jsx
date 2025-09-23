"use client";
import { useState, useEffect } from "react";

const Countdown = ({ net }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const launchTime = new Date(net).getTime();
      const diff = launchTime - now;

      if (diff <= 0) {
        setTimeLeft({ expired: true });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [net]);

  if (timeLeft.expired) return <span className="text-red-400">Launched</span>;

  return (
    <span className="text-sm font-medium">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  );
};

export default Countdown;
