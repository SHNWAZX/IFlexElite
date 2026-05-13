import { useEffect, useRef } from "react";

const FRAMES = ["/cursor/0.png", "/cursor/1.png", "/cursor/2.png", "/cursor/3.png"];

export default function AnimatedCursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    const wide = window.innerWidth >= 1024;
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!fine || !wide || touch) return;

    document.documentElement.classList.add("custom-cursor");
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.display = "block";

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let raf = 0;
    let lastFrameSwap = performance.now();
    let frame = 0;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = (now: number) => {
      // smooth follow
      cx += (tx - cx) * 0.35;
      cy += (ty - cy) * 0.35;
      wrap.style.transform = `translate3d(${cx - 16}px, ${cy - 16}px, 0)`;

      // cycle frame every 110ms via class toggle (no React re-render)
      if (now - lastFrameSwap > 110) {
        const next = (frame + 1) % FRAMES.length;
        const prev = imgRefs.current[frame];
        const cur = imgRefs.current[next];
        if (prev) prev.style.opacity = "0";
        if (cur) cur.style.opacity = "1";
        frame = next;
        lastFrameSwap = now;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor");
      if (wrap) wrap.style.display = "none";
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] w-8 h-8 will-change-transform hidden"
    >
      {FRAMES.map((src, i) => (
        <img
          key={src}
          ref={(el) => {
            imgRefs.current[i] = el;
          }}
          src={src}
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full select-none"
          style={{ opacity: i === 0 ? 1 : 0, transition: "opacity 60ms linear" }}
        />
      ))}
    </div>
  );
}
