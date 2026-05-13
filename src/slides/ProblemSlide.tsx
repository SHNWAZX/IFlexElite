import { motion } from "motion/react";
import HlsVideo from "@/components/HlsVideo";

const cards = [
  {
    icon: "query_stats",
    title: "Streamlined Analytics",
    desc: "Our AI simplifies intricate data analysis, providing businesses with quick and accurate insights.",
  },
  {
    icon: "psychology",
    title: "Decision Optimization",
    desc: "Eliminate decision-making bottlenecks for timely and informed choices, enhancing overall operational efficiency.",
  },
  {
    icon: "integration_instructions",
    title: "Effortless Integration",
    desc: "Our algorithms seamlessly integrate AI with plug-and-play ease, empowering businesses without disruption.",
  },
];

export default function ProblemSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex px-10 lg:px-20 py-12 pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 w-full my-auto">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-6"
            >
              The Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8"
            >
              Our AI simplifies data analysis, eliminates decision bottlenecks, and seamlessly integrates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 font-body font-light text-sm md:text-base leading-relaxed max-w-xl"
            >
              Our AI algorithms strategically address industry challenges, enhancing efficiency and facilitating optimal decision-making, providing a definitive solution for businesses in the AI era.
            </motion.p>
          </div>
          <div className="w-full lg:w-[420px] flex flex-col gap-4 shrink-0">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="liquid-glass rounded-2xl p-6 lg:p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center">
                    <span className="material-symbol text-white text-[20px]">{c.icon}</span>
                  </div>
                  <h3 className="text-base font-body font-semibold text-white">{c.title}</h3>
                </div>
                <p className="text-sm font-body font-light text-white/40 leading-relaxed pl-[52px]">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}