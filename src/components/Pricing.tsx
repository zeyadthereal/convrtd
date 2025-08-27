import React from "react";
import { useInViewFade } from "../hooks/useInViewFade";
import { t, Lang } from "../lib/i18n";

export default function Pricing({ lang = "en" }: { lang?: Lang }) {
  useInViewFade();
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 md:px-8 py-12 fade-in-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{t(lang, "pricing_title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="glass rounded-2xl p-8 flex flex-col gap-6 shadow-lg border border-sky-400/30">
          <h3 className="font-bold text-xl mb-2">{t(lang, "pricing_starter")}</h3>
          <div className="text-3xl font-extrabold text-sky-400 mb-2">EGP 2,900<span className="text-base font-medium text-[#e5e7eb]/60">/mo</span></div>
          <ul className="space-y-2 text-sm">
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_starter_1")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_starter_2")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_starter_3")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_starter_4")}</span></li>
          </ul>
          <a href="#cta" className="rounded-2xl px-4 py-2 font-bold bg-sky-400 text-[#0b1024] shadow hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400">{t(lang, "pricing_trial")}</a>
        </div>
        {/* Growth (Most Popular) */}
        <div className="glass rounded-2xl p-8 flex flex-col gap-6 shadow-lg border-2 border-sky-400 gradient-stroke relative">
          <div className="absolute -top-4 right-4 bg-gradient-to-r from-sky-400 to-emerald-500 text-[#0b1024] px-3 py-1 rounded-full text-xs font-bold shadow">{t(lang, "pricing_popular")}</div>
          <h3 className="font-bold text-xl mb-2">{t(lang, "pricing_growth")}</h3>
          <div className="text-3xl font-extrabold text-sky-400 mb-2">EGP 5,900<span className="text-base font-medium text-[#e5e7eb]/60">/mo</span></div>
          <ul className="space-y-2 text-sm">
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_growth_1")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_growth_2")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_growth_3")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_growth_4")}</span></li>
          </ul>
          <a href="#cta" className="rounded-2xl px-4 py-2 font-bold bg-gradient-to-r from-sky-400 to-emerald-500 text-[#0b1024] shadow hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400">{t(lang, "pricing_trial")}</a>
        </div>
        {/* Premium */}
        <div className="glass rounded-2xl p-8 flex flex-col gap-6 shadow-lg border border-sky-400/30">
          <h3 className="font-bold text-xl mb-2">{t(lang, "pricing_premium")}</h3>
          <div className="text-3xl font-extrabold text-sky-400 mb-2">EGP 11,900<span className="text-base font-medium text-[#e5e7eb]/60">/mo</span></div>
          <ul className="space-y-2 text-sm">
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_premium_1")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_premium_2")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_premium_3")}</span></li>
            <li><span className="text-emerald-400">✔</span> <span>{t(lang, "pricing_premium_4")}</span></li>
          </ul>
          <a href="#cta" className="rounded-2xl px-4 py-2 font-bold bg-sky-400 text-[#0b1024] shadow hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400">{t(lang, "pricing_trial")}</a>
        </div>
      </div>
    </section>
  );
}
