import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  targetId: string;
  volume?: number;
}

export default function ScrollAudio({ src, targetId, volume = 0.45 }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const audio = audioRef.current;
    const target = document.getElementById(targetId);
    if (!audio || !target) return;
    audio.volume = volume;

    let inView = false;
    let userInteracted = false;

    const tryPlay = () => {
      if (!inView) return;
      audio.play().catch(() => {
        // autoplay blocked — wait for user interaction
      });
    };

    const onInteract = () => {
      userInteracted = true;
      tryPlay();
    };

    const fadeTo = (target: number, duration = 600) => {
      const start = audio.volume;
      const startTime = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        const v = start + (target - start) * t;
        audio.volume = Math.max(0, Math.min(1, v));
        if (t < 1) requestAnimationFrame(step);
        else if (target === 0) audio.pause();
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            inView = true;
            audio.volume = 0;
            audio.play()
              .then(() => fadeTo(volume, 800))
              .catch(() => {
                if (userInteracted) tryPlay();
              });
          } else {
            inView = false;
            if (!audio.paused) fadeTo(0, 500);
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
      audio.pause();
    };
  }, [targetId, volume, mounted]);

  if (!mounted) return null;

  return (
    <audio
      ref={audioRef}
      src={src}
      loop
      preload="auto"
      playsInline
      style={{ display: "none" }}
    />
  );
}
