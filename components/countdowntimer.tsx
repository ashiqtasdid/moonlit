"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const now = new Date().getTime();
    let endTime = localStorage.getItem("countdownEndTime");

    if (endTime) {
      // Convert endTime from string to number
      const endTimeNumber = parseInt(endTime, 10);
      const remainingTime = endTimeNumber - now;

      if (remainingTime <= 0) {
        // Countdown has finished, reset the end time
        const newEndTime = now + 12 * 60 * 60 * 1000; // 12 hours from now
        localStorage.setItem("countdownEndTime", newEndTime.toString());
        setTimeLeft(12 * 60 * 60 * 1000); // Reset to 12 hours
      } else {
        setTimeLeft(remainingTime);
      }
    } else {
      // No countdown time in localStorage, start a new countdown
      const newEndTime = now + 12 * 60 * 60 * 1000; // 12 hours from now
      localStorage.setItem("countdownEndTime", newEndTime.toString());
      setTimeLeft(12 * 60 * 60 * 1000); // Set initial time
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1000;
        if (newTimeLeft <= 0) {
          clearInterval(timer);
          // Countdown has finished, reset the end time for the next countdown period
          localStorage.setItem("countdownEndTime", (now + 12 * 60 * 60 * 1000).toString());
        }
        return newTimeLeft > 0 ? newTimeLeft : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft <= 0) return null;

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="py-1 w-full font-semibold flex items-center text-center  justify-center bg-red-500 text-white">
      <div className="mx-10">
      🔥Limited time offer: Get 50% off your first month! Use Code: SAVE50{" "}
        <span className="font-bold">
          {`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
        </span>
        🔥
      </div>
    </div>
  );
};

export default CountdownTimer;
