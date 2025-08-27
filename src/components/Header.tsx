"use client";
import React, { useState, useEffect } from "react";
import { t, Lang } from "../lib/i18n";

type HeaderProps = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

export default function Header({ lang, setLang }: HeaderProps) {
  const handleToggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <header className="sticky top-0 z-30 w-full bg-[#0b1024]/80 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <div className="flex items-center gap-2 font-extrabold text-2xl tracking-tight select-none">
          <span className="inline-block align-middle text-sky-400 text-3xl">●</span>
          <span className="lowercase">{t(lang, "brand")}</span>
        </div>
        <ul className="hidden md:flex gap-6 font-medium text-base">
          <li><a href="#solutions" className="hover:text-sky-400 transition">{t(lang, "nav_solutions")}</a></li>
          <li><a href="#how" className="hover:text-sky-400 transition">{t(lang, "nav_how")}</a></li>
          <li><a href="#pricing" className="hover:text-sky-400 transition">{t(lang, "nav_pricing")}</a></li>
          <li><a href="#faq" className="hover:text-sky-400 transition">{t(lang, "nav_faq")}</a></li>
          <li><a href="#contact" className="hover:text-sky-400 transition">{t(lang, "nav_contact")}</a></li>
        </ul>
        <div className="flex items-center gap-2 md:gap-4">
          <a href="#cta" className="rounded-2xl px-4 py-2 font-semibold bg-gradient-to-r from-sky-400 to-emerald-500 text-[#0b1024] shadow-md hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400">{t(lang, "nav_audit")}</a>
          <button
            aria-label="Toggle language"
            className="ml-2 px-2 py-1 rounded-xl text-sm font-bold border border-sky-400 text-sky-400 bg-transparent hover:bg-sky-400/10 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            type="button"
            onClick={handleToggle}
          >
            <span>EN</span> / <span>AR</span>
          </button>
        </div>
      </nav>
      {/* Mobile nav omitted for brevity */}
    </header>
  );
}
