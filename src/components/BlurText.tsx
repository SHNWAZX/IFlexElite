import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export function BlurText({ text, className, delay = 100 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={
            visible
              ? {
                  filter: ["blur(5px)", "blur(0px)"],
                  opacity: [0.5, 1],
                  y: [-5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: (i * delay) / 1000,
            ease: "easeOut",
          }}
        >
          {w}
        </motion.span>
      ))}
    </div>
  );
}

export default BlurText;