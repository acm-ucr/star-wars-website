"use client";

import { useState, useEffect } from "react";

type stars = {
  left: string;
  top: string;
  animationDuration: string;
  size: number;
};

const Stars = () => {
  const [stars, setStars] = useState<stars[]>([]);

  useEffect(() => {
    const generateStars = (): stars[] => {
      return Array.from({ length: 500 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 1}s`,
        size: Math.random() * 3 + 1,
      }));
    };
    setStars(generateStars());
  }, []);

  return (
    <div className="-z-10 h-full bg-black">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute animate-twinkle rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
