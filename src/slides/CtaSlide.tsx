import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

export default function CtaSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4"
      />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 pb-20">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4"
        >
          Next Steps
        </motion.span>
        <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading italic text-white leading-[0.85] tracking-tight mb-6 whitespace-pre-line"
            >
              {"Your next website\nstarts here."}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/40 font-body font-light text-sm md:text-base leading-relaxed max-w-md mb-10"
            >
              Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-semibold inline-flex items-center gap-2">
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-body font-medium text-white">
                View Pricing
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="liquid-glass rounded-2xl p-8 lg:p-10 w-full max-w-xs"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-body text-sm font-medium">Get in touch</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="text-white/70 text-sm font-body">hello@studio.ai</div>
              <div className="text-white/70 text-sm font-body">+1 (555) 000-0000</div>
            </div>
            <div className="pt-4 border-t border-white/10 space-y-1">
              <div className="text-white/30 text-xs font-body">San Francisco, CA</div>
              <div className="text-white/30 text-xs font-body">London, UK</div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex justify-between border-t border-white/10 pt-4"
        >
          <span className="text-white/30 text-xs font-body">© 2026 Studio. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a className="text-white/30 text-xs hover:text-white/60 font-body" href="#">Privacy</a>
            <a className="text-white/30 text-xs hover:text-white/60 font-body" href="#">Terms</a>
            <a className="text-white/30 text-xs hover:text-white/60 font-body" href="#">Contact</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}