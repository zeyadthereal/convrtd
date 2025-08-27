"use client";
import React, { useState } from "react";
import { useInViewFade } from "../hooks/useInViewFade";
import { FAQS } from "../lib/faq";
import { t, Lang } from "../lib/i18n";

export default function FAQ({ lang = "en" }: { lang?: Lang }) {
  useInViewFade();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 md:px-8 py-12 fade-in-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{t(lang, "faq_title")}</h2>
      <div className="space-y-4">
        {FAQS.map((item, i) => (
          <div key={item.key} className="glass rounded-2xl shadow p-4">
            <button
              type="button"
              aria-expanded={open === i}
              aria-controls={`faq-${i}`}
              className="w-full flex justify-between items-center font-bold text-base focus:outline-none focus:ring-2 focus:ring-sky-400 transition group"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{item[lang].q}</span>
              <svg aria-hidden="true" className={`w-5 h-5 ml-2 text-sky-400 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div
              id={`faq-${i}`}
              className={`overflow-hidden transition-all duration-300 text-sm text-[#e5e7eb]/80 mt-2 ${open === i ? 'max-h-40' : 'max-h-0'}`}
              aria-hidden={open !== i}
              style={{ maxHeight: open === i ? '200px' : '0' }}
            >
              {item[lang].a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
