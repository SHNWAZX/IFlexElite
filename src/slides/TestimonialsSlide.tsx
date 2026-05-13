import { motion } from "motion/react";

const testimonials = [
  {
    quote: "A complete rebuild in five days. The result outperformed everything we had spent months building before.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
    initials: "SC",
  },
  {
    quote: "Conversions up 4x. That is not a typo. The design just works differently when it is built on real data.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
    initials: "MW",
  },
  {
    quote: "They did not just design our site. They defined our brand. World-class does not begin to cover it.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
    initials: "EV",
  },
];

export default function TestimonialsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
      />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 pb-20">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4"
        >
          Social Proof
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9] mb-auto whitespace-pre-line"
        >
          {"Don't take our\nword for it."}
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 mt-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="liquid-glass rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
            >
              <div className="mb-8">
                <span className="text-3xl font-heading italic text-white/15 block mb-4">“</span>
                <p className="text-white/70 font-body font-light text-sm lg:text-base italic leading-relaxed">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/60 font-body text-xs font-medium">{t.initials}</span>
                </div>
                <div>
                  <div className="text-white font-body font-medium text-sm">{t.name}</div>
                  <div className="text-white/40 font-body font-light text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}