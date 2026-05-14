import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Twitter,
  Zap,
  Palette,
  BarChart3,
  Shield,
  Menu,
  X,
} from "lucide-react";
import HlsVideo from "./HlsVideo";
import BlurText from "./BlurText";
import AnimatedCursor from "./AnimatedCursor";
import CopyGuard from "./CopyGuard";
import ScrollAudio from "./ScrollAudio";

const NAV = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md bg-black/30" : "py-5"
      }`}
    >
      <div className="px-5 sm:px-8 lg:px-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-heading italic text-white text-base sm:text-lg">
            IFlexElite
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase font-body transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex liquid-glass-strong rounded-full px-4 py-2 items-center gap-1.5 text-white text-xs font-body font-medium"
        >
          Hire me <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full liquid-glass-strong flex items-center justify-center text-white"
          aria-label="Menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-5 mt-3 rounded-2xl liquid-glass p-5 flex flex-col gap-4"
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm font-body tracking-wide"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-white text-black rounded-full px-4 py-2.5 text-xs font-body font-semibold inline-flex items-center justify-center gap-1.5"
          >
            Hire me <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-end px-5 sm:px-8 lg:px-16 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="liquid-glass rounded-full inline-flex items-center gap-2 pl-1 pr-3 py-1 self-start mb-5"
        >
          <span className="bg-white text-black rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider">
            Open
          </span>
          <span className="text-white/70 text-[11px] font-light">
            Available for new work · 2026
          </span>
        </motion.div>

        <BlurText
          text="Crafting interfaces that feel inevitable."
          delay={70}
          className="text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-8xl xl:text-[7rem] font-heading italic text-white tracking-[-1.5px] mb-6 max-w-5xl"
        />

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="text-sm sm:text-base lg:text-lg text-white/55 font-body font-light leading-relaxed max-w-xl mb-8"
        >
          I'm <span className="text-white">IFlexElite</span> — a web developer & UX
          strategist building fast, beautiful, conversion-focused experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <a
            href="https://github.com/IFlexElite?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full px-5 py-3 text-sm font-body font-semibold inline-flex items-center gap-2"
          >
            View work <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-5 py-3 text-sm font-body font-medium text-white inline-flex items-center gap-2"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Designed to convert. Built to perform.",
    body: "Landing experience for a SaaS platform — every pixel tuned for clarity and momentum.",
    tag: "Web Design",
    videoSrc:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4",
    hls: false,
  },
  {
    title: "Smart UX, automatically.",
    body: "Real-time UX system that learns from every click, scroll, and conversion to optimize itself.",
    tag: "Product · UX",
    videoSrc: "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8",
    hls: true,
  },
  {
    title: "Brand systems that scale.",
    body: "Visual identity & motion language built to grow with the brand across every surface.",
    tag: "Brand · Motion",
    videoSrc: "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8",
    hls: true,
  },
  {
    title: "Editorial-grade interfaces.",
    body: "Magazine-style storytelling layouts engineered for performance and accessibility.",
    tag: "Editorial",
    videoSrc: "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8",
    hls: true,
  },
];

function Work() {
  return (
    <section
      id="work"
      className="relative bg-black py-20 sm:py-28 px-5 sm:px-8 lg:px-16"
    >
      <div className="flex items-end justify-between mb-10 sm:mb-14">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl sm:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]"
          >
            Projects, in motion.
          </motion.h2>
        </div>
        <a
          href="https://github.com/IFlexElite"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex liquid-glass-strong rounded-full px-4 py-2 items-center gap-1.5 text-white text-xs font-body"
        >
          All projects <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="liquid-glass rounded-2xl overflow-hidden flex flex-col group transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="h-52 sm:h-64 relative overflow-hidden">
              {p.hls ? (
                <HlsVideo
                  src={p.videoSrc}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  src={p.videoSrc}
                />
              )}
              <span className="absolute top-3 left-3 liquid-glass-strong rounded-full px-3 py-1 text-[10px] tracking-wider uppercase text-white">
                {p.tag}
              </span>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-2xl font-heading italic text-white mb-2 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm font-body font-light text-white/45 leading-relaxed">
                {p.body}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-white/70 text-xs font-body tracking-wider uppercase relative w-fit">
                <span className="relative">
                  Skills
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-white/70 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  {
    Icon: Zap,
    title: "Web Development",
    desc: "Production-grade React & TypeScript builds. Fast, accessible, SEO-ready.",
  },
  {
    Icon: Palette,
    title: "UX & Interface",
    desc: "Interfaces refined to the pixel. Motion, hierarchy, and micro-interactions that feel alive.",
  },
  {
    Icon: BarChart3,
    title: "Conversion Strategy",
    desc: "Layouts informed by data. Decisions backed by performance. Results you can measure.",
  },
  {
    Icon: Shield,
    title: "Performance & Care",
    desc: "Edge-deployed, secure by default, and quietly maintained long after launch.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative bg-black py-20 sm:py-28 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0)", opacity: 0.35 }}
      />
      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
        >
          What I do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl sm:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-10 sm:mb-14 max-w-3xl"
        >
          Services built for momentum.
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            className="liquid-glass rounded-2xl p-6 sm:p-8 flex flex-col transition-transform duration-500 hover:-translate-y-1"
            >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5"
            >
              <Icon className="w-4 h-4 text-white" />
            </motion.div>
              <h3 className="text-base sm:text-lg font-body font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm font-body font-light text-white/45 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { num: "60+", desc: "Sites shipped across SaaS, brand, and editorial" },
  { num: "98%", desc: "Client satisfaction across the last two years" },
  { num: "3.2x", desc: "Average conversion uplift after a redesign" },
  { num: "5d", desc: "From concept to a production-ready launch" },
];

function Stats() {
  return (
    <section
      id="about"
      className="relative bg-black py-20 sm:py-28 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
        >
          About
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95] mb-10 max-w-3xl"
        >
          Independent designer & developer with a bias for craft and speed.
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {STATS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-black p-5 sm:p-8 flex flex-col gap-2"
            >
              <span className="text-4xl sm:text-6xl lg:text-7xl font-heading italic text-white leading-none">
                {s.num}
              </span>
              <p className="text-[11px] sm:text-sm font-body font-light text-white/50 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months on before.",
    name: "Priya Sharma",
    role: "CEO, Luminary",
    initials: "PS",
  },
  {
    quote:
      "Conversions up 4x. The design just works differently when it's built on real data.",
    name: "Ananya Iyer",
    role: "Head of Growth, Arcline",
    initials: "AI",
  },
  {
    quote:
      "Didn't just design our site — defined our brand. World-class doesn't begin to cover it.",
    name: "Meera Kapoor",
    role: "Brand Director, Helix",
    initials: "MK",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-black py-20 sm:py-28 px-5 sm:px-8 lg:px-16">
      <motion.span
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
      >
        Kind words
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="text-3xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95] mb-10 max-w-3xl"
      >
        Trusted by teams who care about details.
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-7 sm:p-9 flex flex-col justify-between"
          >
            <div className="mb-7">
              <span className="text-3xl font-heading italic text-white/15 block mb-3">
                "
              </span>
              <p className="text-white/75 font-body font-light text-sm sm:text-base italic leading-relaxed">
                {t.quote}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white/60 font-body text-xs font-medium">
                  {t.initials}
                </span>
              </div>
              <div>
                <div className="text-white font-body font-medium text-sm">
                  {t.name}
                </div>
                <div className="text-white/40 font-body font-light text-xs">
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black overflow-hidden px-5 sm:px-8 lg:px-16 py-20 sm:py-28"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4"
          >
            Let's talk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-5 whitespace-pre-line"
          >
            {"Your next website\nstarts here."}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 font-body font-light text-sm sm:text-base leading-relaxed max-w-md mb-8"
          >
            Tell me about the project. I'll get back within 24 hours with a clear
            plan, timeline, and price.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href="https://github.com/IFlexElite"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black rounded-full px-5 py-3 text-sm font-body font-semibold inline-flex items-center gap-2"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/IFlexElite"
              target="_blank"
              rel="noreferrer"
              className="liquid-glass-strong rounded-full px-5 py-3 text-sm font-body font-medium text-white inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="liquid-glass rounded-2xl p-7 sm:p-9"
        >
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/190835907?v=4"
              alt="IFlexElite"
              className="w-12 h-12 rounded-full object-cover ring-1 ring-white/20"
            />
            <div>
              <div className="text-white font-body text-sm font-medium">
                IFlexElite
              </div>
              <div className="text-white/40 text-[11px] font-body">
                Web Developer & UX Strategist
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <a
              href="https://github.com/IFlexElite"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 text-white/70 hover:text-white text-sm font-body transition border-t border-white/10 pt-3"
            >
              <span className="inline-flex items-center gap-2.5">
                <Github className="w-4 h-4" /> github.com/IFlexElite
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com/IFlexElite"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 text-white/70 hover:text-white text-sm font-body transition border-t border-white/10 pt-3"
            >
              <span className="inline-flex items-center gap-2.5">
                <Twitter className="w-4 h-4" /> @IFlexElite
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com/iflexelite"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 text-white/70 hover:text-white text-sm font-body transition border-t border-white/10 pt-3"
            >
              <span className="inline-flex items-center gap-2.5">
                <Instagram className="w-4 h-4" /> @iflexelite
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black px-5 sm:px-8 lg:px-16 py-8 border-t border-white/10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span className="text-white/30 text-xs font-body">
          © 2026 IFlexElite. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/IFlexElite"
            className="text-white/40 hover:text-white text-xs font-body"
          >
            GitHub
          </a>
          <a
            href="https://x.com/IFlexElite"
            className="text-white/40 hover:text-white text-xs font-body"
          >
            X
          </a>
          <a
            href="https://instagram.com/iflexelite"
            className="text-white/40 hover:text-white text-xs font-body"
          >
            Instagram
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-body antialiased">
      <AnimatedCursor />
      <CopyGuard />
      <ScrollAudio src="/ambient.m4a" targetId="testimonials" />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}