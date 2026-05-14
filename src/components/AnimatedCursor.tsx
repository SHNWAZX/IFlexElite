import { useEffect } from "react";

export default function AnimatedCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    const wide = window.innerWidth >= 1024;
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!fine || !wide || touch) return;
    document.documentElement.classList.add("custom-cursor");
    return () => {
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return null;
}
