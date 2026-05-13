import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  current: number;
  total: number;
  label: string;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
}

export function SlideControls({ current, total, label, onPrev, onNext, onJump }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-8 lg:px-12 pb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-body">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="w-px h-4 bg-white/15" />
        <AnimatePresence mode="wait">
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-white/50 text-xs font-body"
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onJump(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-24 bg-white" : "w-8 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <span className="w-px h-4 bg-white/15" />
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            disabled={current === 0}
            className="w-8 h-8 rounded-full text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-20 flex items-center justify-center transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            disabled={current === total - 1}
            className="w-8 h-8 rounded-full text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-20 flex items-center justify-center transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideControls;