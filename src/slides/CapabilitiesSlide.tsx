import { motion } from "motion/react";
import HlsVideo from "@/components/HlsVideo";

const cards = [
  {
    title: "Designed to convert. Built to perform.",
    body: "Every pixel is intentional. Our AI studies what works across thousands of top sites — then builds yours to outperform them all.",
    videoSrc:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4",
    hls: false,
  },
  {
    title: "It gets smarter. Automatically.",
    body: "Your site evolves on its own. AI monitors every click, scroll, and conversion — then optimizes in real time.",
    videoSrc: "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8",
    hls: true,
  },
];

export default function CapabilitiesSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <HlsVideo
        src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.5 }}
      />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 pb-20">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4"
        >
          Capabilities
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-heading italic text-white tracking-tight leading-[0.85] mb-8 lg:mb-auto whitespace-pre-line"
        >
          {"Pro features.\nZero complexity."}
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.15 }}
              className="liquid-glass rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="h-44 lg:h-56 overflow-hidden relative">
                {c.hls ? (
                  <HlsVideo src={c.videoSrc} className="w-full h-full object-cover" />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src={c.videoSrc}
                  />
                )}
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-lg md:text-xl font-heading italic text-white mb-2 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm font-body font-light text-white/40 leading-relaxed">
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}