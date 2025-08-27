"use client";
import React, { useState } from "react";
import { useInViewFade } from "../hooks/useInViewFade";
import { t, Lang } from "../lib/i18n";

export default function CTA({ lang = "en" }: { lang?: Lang }) {
  useInViewFade();
  const [success, setSuccess] = useState(false);
  return (
    <section id="cta" className="max-w-2xl mx-auto px-4 md:px-8 py-10 fade-in-up">
      <div className="glass rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{t(lang, "cta_title")}</h3>
          <p className="text-base text-[#e5e7eb]/80 mb-2">{t(lang, "cta_sub")}</p>
        </div>
        <form
          className="flex flex-col md:flex-row gap-3 w-full md:w-auto"
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            setSuccess(true);
          }}
        >
          <input
            type="text"
            name="contact"
            required
            placeholder="Email or WhatsApp"
            className="rounded-2xl px-4 py-2 bg-[#0b1024] border border-sky-400/40 text-[#e5e7eb] placeholder-[#e5e7eb]/60 focus:outline-none focus:ring-2 focus:ring-sky-400 transition w-full md:w-56"
            aria-label="Email or WhatsApp"
          />
          <button
            type="submit"
            className="rounded-2xl px-4 py-2 font-bold bg-gradient-to-r from-sky-400 to-emerald-500 text-[#0b1024] shadow hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            {t(lang, "cta_btn")}
          </button>
        </form>
        {success && (
          <div className="text-emerald-400 font-semibold mt-2 md:mt-0">{t(lang, "cta_success")}</div>
        )}
      </div>
    </section>
  );
}
