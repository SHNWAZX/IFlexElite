import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, Pause } from "lucide-react";
import TitleSlide from "@/slides/TitleSlide";
import ProblemSlide from "@/slides/ProblemSlide";
import CapabilitiesSlide from "@/slides/CapabilitiesSlide";
import WhyUsSlide from "@/slides/WhyUsSlide";
import StatsSlide from "@/slides/StatsSlide";
import TestimonialsSlide from "@/slides/TestimonialsSlide";
import CtaSlide from "@/slides/CtaSlide";
import SlideControls from "./SlideControls";

const slides = [
  { Component: TitleSlide, label: "Introduction" },
  { Component: ProblemSlide, label: "The Process" },
  { Component: CapabilitiesSlide, label: "Capabilities" },
  { Component: WhyUsSlide, label: "Differentiators" },
  { Component: StatsSlide, label: "Traction" },
  { Component: TestimonialsSlide, label: "Social Proof" },
  { Component: CtaSlide, label: "Next Steps" },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-30%" : "30%", opacity: 0, scale: 0.95 }),
};

export default function SlideDeck() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [autoplay, setAutoplay] = useState(false);
  const lockRef = useRef(false);
  const touchStart = useRef<number | null>(null);

  const go = (next: number, direction: number) => {
    if (lockRef.current) return;
    if (next < 0 || next >= slides.length) return;
    lockRef.current = true;
    setState([next, direction]);
    setTimeout(() => {
      lockRef.current = false;
    }, 800);
  };

  const next = () => go(index + 1, 1);
  const prev = () => go(index - 1, -1);

  // Autoplay loop — advances every 6s, loops back to start
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      if (lockRef.current) return;
      setState(([i]) => {
        const next = (i + 1) % slides.length;
        lockRef.current = true;
        setTimeout(() => {
          lockRef.current = false;
        }, 800);
        return [next, 1];
      });
    }, 6000);
    return () => clearInterval(id);
  }, [autoplay]);

  const pauseOnInteract = () => {
    if (autoplay) setAutoplay(false);
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30 && Math.abs(e.deltaX) < 30) return;
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      pauseOnInteract();
      if (d > 0) next();
      else prev();
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault();
        pauseOnInteract();
        next();
      } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        pauseOnInteract();
        prev();
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStart.current == null) return;
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) {
        pauseOnInteract();
        if (diff > 0) next();
        else prev();
      }
      touchStart.current = null;
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [index, autoplay]);

  const Current = slides[index].Component;

  return (
    <div className="fixed inset-0 bg-black overflow-hidden font-body text-white">
      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      {/* Autoplay toggle */}
      <button
        onClick={() => setAutoplay((v) => !v)}
        className="fixed top-6 right-8 lg:right-12 z-50 liquid-glass-strong rounded-full px-4 py-2 inline-flex items-center gap-2 text-white text-xs font-body font-medium hover:bg-white/10 transition"
        title={autoplay ? "Pause autoplay" : "Start autoplay"}
      >
        {autoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        <span className="tracking-[0.15em] uppercase">
          {autoplay ? "Auto · On" : "Auto · Off"}
        </span>
      </button>

      {/* Autoplay progress bar */}
      {autoplay && (
        <motion.div
          key={index}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="fixed top-0 left-0 h-0.5 bg-white/70 z-50"
        />
      )}

      <SlideControls
        current={index}
        total={slides.length}
        label={slides[index].label}
        onPrev={() => {
          pauseOnInteract();
          prev();
        }}
        onNext={() => {
          pauseOnInteract();
          next();
        }}
        onJump={(i) => {
          pauseOnInteract();
          go(i, i > index ? 1 : -1);
        }}
      />
    </div>
  );
}