// HowItWorks.tsx
// Section: How it works, with animated steps and connectors

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { t, Lang } from "../lib/i18n";

// CountUp component: animates number from 0 to target when in view
function CountUp({ value, duration = 1.2, className = "" }: { value: number; duration?: number; className?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toString().padStart(2, "0")}
    </span>
  );
}

// Step data (i18n-aware)
const getSteps = (lang: Lang) => [
  {
    title: t(lang, "how_1"),
    desc: t(lang, "how_1_desc"),
  },
  {
    title: t(lang, "how_2"),
    desc: t(lang, "how_2_desc"),
  },
  {
    title: t(lang, "how_3"),
    desc: t(lang, "how_3_desc"),
  },
];

// Main HowItWorks section
export default function HowItWorks({ lang = "en" }: { lang?: Lang }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const steps = getSteps(lang);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 fade-in-up"
      style={{ background: "transparent" }}
      id="how"
    >
      {/* Section heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-fg text-center">{t(lang, "how_title")}</h2>
      {/* Steps + connectors */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
        {/* Connector line (desktop) */}
        <motion.div
          className="hidden md:block absolute top-1/2 left-0 right-0 h-1 z-0"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.2, type: "spring" }}
          style={{
            background: "linear-gradient(90deg, #38bdf8 0%, #34d399 100%)",
            transformOrigin: "left center",
          }}
        />
        {/* Connector line (mobile) */}
        <motion.div
          className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 z-0"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.2, type: "spring" }}
          style={{
            background: "linear-gradient(180deg, #38bdf8 0%, #34d399 100%)",
            transformOrigin: "top center",
          }}
        />
        {/* Steps */}
        {steps.map((step, i) => (
          <StepCard
            key={i}
            index={i}
            title={step.title}
            desc={step.desc}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}

// StepCard: single step with animation
function StepCard({ index, title, desc, inView }: { index: number; title: string; desc: string; inView: boolean }) {
  // Animation for fade-in and scale
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center text-center bg-white/5 backdrop-blur rounded-2xl px-6 py-10 md:py-12 w-full max-w-xs shadow-xl border border-white/10"
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.18, type: "spring" }}
    >
      {/* Animated number */}
      <CountUp
        value={index + 1}
        className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-emerald-500 select-none"
      />
      {/* Title */}
      <h3 className="text-lg font-bold text-fg mb-1">{title}</h3>
      {/* Description */}
      <p className="text-sm text-[#e5e7eb]/80">{desc}</p>
    </motion.div>
  );
}

// Utility: text-fg color
// Add this to your Tailwind config if not present:
// theme: { colors: { fg: '#e5e7eb' } }
