import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import BlurText from "@/components/BlurText";

export default function TitleSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104229_49794008-3d16-4cb6-9a8c-73d7751b0e79.mp4"
      />
      <div className="relative z-10 h-full flex flex-col justify-between px-10 lg:px-20 py-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="font-heading italic text-sm text-black">S</span>
          </div>
          <span className="font-heading italic text-white/80 text-lg">Studio</span>
          <span className="w-px h-5 bg-white/20 mx-2" />
          <span className="text-white/30 font-body text-[10px] tracking-[0.2em] uppercase">
            Pitch Deck 2026
          </span>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="liquid-glass rounded-full inline-flex items-center gap-2 pl-1 pr-4 py-1 self-start mb-6"
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
              New
            </span>
            <span className="text-white/70 text-xs font-light">
              AI-powered web design
            </span>
          </motion.div>

          <BlurText
            text="The Website Your Brand Deserves"
            delay={80}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-heading italic text-white leading-[0.85] tracking-[-3px] mb-8"
          />

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="text-base md:text-lg text-white/50 font-body font-light leading-relaxed max-w-xl mb-10"
          >
            Stunning design. Blazing performance. Built by AI, refined by experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 self-start text-white text-sm font-body font-medium cursor-pointer"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-6 flex-wrap"
        >
          <span className="text-white/30 text-xs uppercase tracking-[0.2em] font-body">
            Trusted by
          </span>
          {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((b) => (
            <span key={b} className="text-lg md:text-xl font-heading italic text-white/20">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}