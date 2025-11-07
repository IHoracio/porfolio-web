import { useState, useEffect, useRef } from "react";

export default function UltraSmoothTitleAnimation() {
  const [displayText, setDisplayText] = useState("MMM");
  const animationRef = useRef(null);
  const targetText = "Mario Martín Morilla";
  const transitionDuration = 2000;
  const delayBeforeStart = 0;

  useEffect(() => {
    let startTime = null;
    let currentLength = 3;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / transitionDuration, 1);

      const targetLength = targetText.length;
      let newLength = Math.floor(
        3 + (targetLength - 3) * easeInOutCubic(progress)
      );

      if (newLength === targetLength - 1) {
        newLength = targetLength;
      }

      if (newLength !== currentLength) {
        currentLength = newLength;
        setDisplayText(targetText.substring(0, newLength));
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetText);
      }
    };

    const timer = setTimeout(() => {
      startTime = null;
      animationRef.current = requestAnimationFrame(animate);
    }, delayBeforeStart);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  return (
    <h1
      className="text-[8cqw] font-bold text-blue-50 text-center mt-8 lg:mt-20 md:mt-10"
      style={{
        opacity: displayText === "MMM" ? 1 : 0.98,
        transform: displayText === "MMM" ? "scale(1)" : "scale(1.008)",
        textShadow:
          displayText !== "MMM" ? "0 0 12px rgba(100, 200, 255, 0.8)" : "none",
        transition: "all 0.15s cubic-bezier(0.33, 1, 0.68, 1)",
        whiteSpace: "nowrap",
      }}
    >
      {displayText}
    </h1>
  );
}
