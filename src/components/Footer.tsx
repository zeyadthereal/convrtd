import React from "react";
import { useInViewFade } from "../hooks/useInViewFade";
import { t, Lang } from "../lib/i18n";

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  useInViewFade();
  return (
    <footer className="max-w-7xl mx-auto w-full px-4 md:px-8 py-10 mt-auto fade-in-up">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
        <div>
          <h4 className="font-bold mb-2">{t(lang, "footer_company")}</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition">{t(lang, "footer_about")}</a></li>
            <li><a href="#solutions" className="hover:text-sky-400 transition">{t(lang, "footer_solutions")}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">{t(lang, "footer_solutions")}</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition">{t(lang, "footer_wa")}</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">{t(lang, "footer_ig")}</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">{t(lang, "footer_shopify")}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">{t(lang, "footer_legal")}</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition">{t(lang, "footer_terms")}</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">{t(lang, "footer_privacy")}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">{t(lang, "footer_contact")}</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="mailto:hello@convrtd.ai" className="hover:text-sky-400 transition">hello@convrtd.ai</a></li>
            <li><a href="https://wa.me/201000000000" target="_blank" rel="noopener" className="hover:text-sky-400 transition">WhatsApp</a></li>
            <li><span>{t(lang, "footer_cairo")}</span></li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-[#e5e7eb]/60 text-center pt-4 border-t border-[#e5e7eb]/10">{t(lang, "footer_copyright")}</div>
    </footer>
  );
}
