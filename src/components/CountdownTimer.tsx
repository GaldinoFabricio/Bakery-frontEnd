import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  message: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialHours = 0,
  initialMinutes = 9,
  initialSeconds = 58,
  message,
}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 md:p-8 shadow-lg">
      <div className="flex items-center">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <div className="flex flex-col items-center">
            <span className="bg-gray-800 border-2 border-amber-500 rounded-lg p-3 md:p-4 w-full text-2xl md:text-4xl text-white font-mono font-bold text-center flex items-center justify-center">
              {formatTime(hours)}
            </span>
            <span className="text-xs md:text-sm text-gray-400 mt-2">HOURS</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="bg-gray-800 border-2 border-amber-500 rounded-lg p-3 md:p-4 w-full text-2xl md:text-4xl text-white font-mono font-bold text-center flex items-center justify-center">
              {formatTime(minutes)}
            </span>
            <span className="text-xs md:text-sm text-gray-400 mt-2">
              MINUTES
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="bg-gray-800 border-2 border-amber-500 rounded-lg p-3 md:p-4 w-full text-2xl md:text-4xl text-white font-mono font-bold text-center flex items-center justify-center">
              {formatTime(seconds)}
            </span>
            <span className="text-xs md:text-sm text-gray-400 mt-2">
              SECONDS
            </span>
          </div>
        </div>

        <div className="ml-4 md:ml-8 text-left">
          <p className="text-white text-sm md:text-lg lg:text-xl font-medium">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
