import React from "react";
import { useInViewFade } from "../hooks/useInViewFade";
import ChatMock from "./ChatMock";
import { t, Lang } from "../lib/i18n";

export default function Hero({ lang = "en" }: { lang?: Lang }) {
  useInViewFade();
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center fade-in-up relative overflow-hidden px-0"
      id="hero"
      style={{
        background:
          "radial-gradient(ellipse at 60% 0%, rgba(56,189,248,0.18) 0%, transparent 60%), " +
          "radial-gradient(ellipse at 20% 100%, rgba(16,185,129,0.14) 0%, transparent 70%), " +
          "linear-gradient(120deg, #0b1024 60%, #1e293b 100%)",
      }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 px-4 md:px-8 py-12 md:py-20 z-10">
        <div className="flex-1 space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            {t(lang, "hero_headline")}
          </h1>
          <p className="text-lg md:text-xl text-[#e5e7eb]/90 max-w-xl drop-shadow">
            {t(lang, "hero_subcopy")}
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#cta" className="rounded-2xl px-6 py-3 font-bold bg-gradient-to-r from-sky-400 to-emerald-500 text-[#0b1024] shadow-lg hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400">
              {t(lang, "hero_demo")}
            </a>
            <a href="https://wa.me/201000000000" target="_blank" rel="noopener" className="rounded-2xl px-6 py-3 font-bold border border-sky-400 text-sky-400 bg-transparent hover:bg-sky-400/10 focus:outline-none focus:ring-2 focus:ring-sky-400 transition">
              {t(lang, "hero_whatsapp")}
            </a>
          </div>
        </div>
        <div className="flex-1 w-full flex items-center justify-center mt-10 md:mt-0">
          <div className="min-w-[360px] max-w-[480px] w-full">
            <ChatMock lang={lang} />
          </div>
        </div>
      </div>
      {/* Decorative blurred gradient shapes */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] bg-sky-400/20 rounded-full blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[340px] h-[340px] bg-emerald-400/20 rounded-full blur-2xl z-0" />
    </section>
  );
}
