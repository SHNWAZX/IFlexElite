import { motion } from "motion/react";
import { Zap, Palette, BarChart3, Shield } from "lucide-react";

const cards = [
  { Icon: Zap, title: "Days, Not Months", desc: "Concept to launch at a pace that redefines fast. Because waiting is not a strategy." },
  { Icon: Palette, title: "Obsessively Crafted", desc: "Every detail considered. Every element refined. Design so precise, it feels inevitable." },
  { Icon: BarChart3, title: "Built to Convert", desc: "Layouts informed by data. Decisions backed by performance. Results you can measure." },
  { Icon: Shield, title: "Secure by Default", desc: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included." },
];

export default function WhyUsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-auto gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4"
            >
              Why Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9] whitespace-pre-line"
            >
              {"The difference\nis everything."}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/35 font-body font-light text-sm max-w-sm"
          >
            We do not just build websites. We engineer competitive advantages that compound over time.
          </motion.p>
        </div>
        <div className="flex-1 flex items-end">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
            {cards.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="liquid-glass rounded-2xl p-6 lg:p-8 flex flex-col"
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm md:text-base font-body font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs font-body font-light text-white/40 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}