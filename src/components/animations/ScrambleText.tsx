"use client";
import { useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (i < iteration) return char;
            if (char === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 0.5;
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 30);
  };

  return (
    <span onMouseEnter={scramble} className="inline-block">
      {display}
    </span>
  );
}
