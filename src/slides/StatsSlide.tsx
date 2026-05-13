import { motion } from "motion/react";
import HlsVideo from "@/components/HlsVideo";

const stats = [
  { num: "200+", desc: "Sites launched and generating measurable results for brands across industries" },
  { num: "98%", desc: "Client satisfaction rate across all projects delivered in the last two years" },
  { num: "3.2x", desc: "Average conversion uplift compared to previous client sites and industry benchmarks" },
  { num: "5 days", desc: "Average delivery from concept to production-ready launch across all project types" },
];

function Stat({ s, delay }: { s: (typeof stats)[number]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex flex-col gap-8"
    >
      <div className="h-px bg-white/15 w-full" />
      <div className="flex items-start gap-10 lg:gap-14">
        <span className="text-7xl md:text-8xl lg:text-[9.5rem] font-heading italic text-white leading-none shrink-0">
          {s.num}
        </span>
        <p className="pt-3 lg:pt-4 pr-8 lg:pr-20 flex-1 text-white text-base md:text-lg lg:text-2xl font-body font-normal leading-relaxed">
          {s.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0)" }}
      />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 pb-20 overflow-y-auto">
        <div className="mb-auto">
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-6"
          >
            Traction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] max-w-4xl"
          >
            Numbers that speak for themselves
          </motion.h2>
        </div>
        <div className="flex flex-col gap-6 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Stat s={stats[0]} delay={0.35} />
            <Stat s={stats[1]} delay={0.45} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Stat s={stats[2]} delay={0.55} />
            <Stat s={stats[3]} delay={0.65} />
          </div>
        </div>
      </div>
    </div>
  );
}