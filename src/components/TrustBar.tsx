import React from "react";
import { useInViewFade } from "../hooks/useInViewFade";
import { t, Lang } from "../lib/i18n";
import { SiShopify, SiInstagram, SiWhatsapp, SiMessenger } from "react-icons/si";



export default function TrustBar({ lang = "en" }: { lang?: Lang }) {
  useInViewFade();
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 fade-in-up" aria-label="Works with">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-80">
        <span className="text-xl font-semibold">{t(lang, "marquee_works")}</span>
        {/* Platform SVGs */}

    <SiShopify className="w-6 h-6 text-green-500" />
    <SiInstagram className="w-6 h-6 text-cyan-600" />
    <SiWhatsapp className="w-6 h-6 text-green-400" />
    <SiMessenger className="w-6 h-6  text-cyan-600" />

      </div>
    </section>
  );
}
