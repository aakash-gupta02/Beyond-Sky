"use client";
import { useState, useEffect } from "react";

const Countdown = ({ net, small = false }) => {
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

  if (timeLeft.expired) {
    return (
      <div
        className={`${small ? "text-lg" : "text-4xl"
          } font-light tracking-tight text-red-400`}
      >
        Launched
      </div>
    );
  }

  // Format into T–DD:HH:MM:SS
  // const format = `T-${timeLeft.days ?? 0}d:${timeLeft.hours ?? 0}h:${timeLeft.minutes ?? 0}m:${timeLeft.seconds ?? 0}s`;
  //  const format = `T-${timeLeft.days ?? 0}d : ${timeLeft.hours ?? 0}h : ${timeLeft.minutes ?? 0}m : ${timeLeft.seconds ?? 0}s`;
  const format = `T-${timeLeft.days ?? 0}d:${timeLeft.hours ?? 0}:${timeLeft.minutes ?? 0}:${timeLeft.seconds ?? 0}`;


  return (
    <div
      className={`${small ? "text-2xl" : "text-4xl sm:text-5xl lg:text-6xl"
        } font-light tracking-tight`}
    >
      {format}
    </div>
  );
};

export default Countdown;
