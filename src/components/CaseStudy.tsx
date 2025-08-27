import React from "react";
import { useInViewFade } from "../hooks/useInViewFade";
import { t, Lang } from "../lib/i18n";

export default function CaseStudy({ lang = "en" }: { lang?: Lang }) {
  useInViewFade();
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 fade-in-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{t(lang, "case_title")}</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-0">
          <div className="glass rounded-2xl p-6 flex flex-col items-center gap-2 shadow-lg">
            <span className="text-2xl font-extrabold text-sky-400">+31%</span>
            <span className="text-xs font-medium">{t(lang, "case_stat1")}</span>
          </div>
          <div className="glass rounded-2xl p-6 flex flex-col items-center gap-2 shadow-lg">
            <span className="text-2xl font-extrabold text-emerald-400">−38%</span>
            <span className="text-xs font-medium">{t(lang, "case_stat2")}</span>
          </div>
          <div className="glass rounded-2xl p-6 flex flex-col items-center gap-2 shadow-lg">
            <span className="text-2xl font-extrabold text-sky-400">92%</span>
            <span className="text-xs font-medium">{t(lang, "case_stat3")}</span>
          </div>
        </div>
        <div className="flex-1 text-[#e5e7eb]/90 text-base md:text-lg max-w-xl">
          {t(lang, "case_text")}
        </div>
      </div>
    </section>
  );
}
