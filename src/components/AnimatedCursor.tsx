import { useEffect, useRef, useState } from "react";

const FRAMES = ["/cursor/0.png", "/cursor/1.png", "/cursor/2.png", "/cursor/3.png"];

export default function AnimatedCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const el = ref.current;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      cx += (tx - cx) * 0.25;
      cy += (ty - cy) * 0.25;
      if (el) el.style.transform = `translate3d(${cx - 16}px, ${cy - 16}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);

    const cycle = window.setInterval(() => {
      setFrame((f) => (f + 1) % FRAMES.length);
    }, 90);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      window.clearInterval(cycle);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] w-8 h-8 will-change-transform"
      style={{ mixBlendMode: "normal" }}
    >
      {FRAMES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full select-none"
          style={{ opacity: i === frame ? 1 : 0 }}
        />
      ))}
    </div>
  );
}