import React from "react";
import { useInViewFade } from "../hooks/useInViewFade";
import { t, Lang } from "../lib/i18n";
import { SiShopify, SiInstagram, SiWhatsapp, SiMessenger,SiGoogletranslate,  } from "react-icons/si";
import { MdPerson, MdLocalShipping, MdAnalytics, MdChat  } from "react-icons/md";

export default function ValueProps({ lang = "en" }: { lang?: Lang }) {
  useInViewFade();
  return (
    <section id="solutions" className="max-w-7xl mx-auto px-4 md:px-8 py-12 fade-in-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="glass rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg hover:scale-[1.03] transition-all group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-400/20 text-sky-400"><MdChat className="w-5 h-5 text-cyan-600" /></span>
          <h3 className="font-bold text-lg">{t(lang, "vp_247")}</h3>
          <p className="text-sm text-[#e5e7eb]/80">{t(lang, "vp_247_desc")}</p>
        </div>
        {/* Card 2 */}
        <div className="glass rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg hover:scale-[1.03] transition-all group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-400"><SiShopify className="w-5 h-5 text-green-600" /></span>
          <h3 className="font-bold text-lg">{t(lang, "vp_shopify")}</h3>
          <p className="text-sm text-[#e5e7eb]/80">{t(lang, "vp_shopify_desc")}</p>
        </div>
        {/* Card 3 */}
        <div className="glass rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg hover:scale-[1.03] transition-all group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-400/20 text-sky-400"><MdPerson className="w-6 h-6 text-cyan-600" /></span>
          <h3 className="font-bold text-lg">{t(lang, "vp_human")}</h3>
          <p className="text-sm text-[#e5e7eb]/80">{t(lang, "vp_human_desc")}</p>
        </div>
        {/* Card 4 */}
        <div className="glass rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg hover:scale-[1.03] transition-all group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-400"><MdLocalShipping className="w-6 h-6 text-green-600" /></span>
          <h3 className="font-bold text-lg">{t(lang, "vp_courier")}</h3>
          <p className="text-sm text-[#e5e7eb]/80">{t(lang, "vp_courier_desc")}</p>
        </div>
        {/* Card 5 */}
        <div className="glass rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg hover:scale-[1.03] transition-all group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-400/20 text-sky-400"><SiGoogletranslate className="w-5 h-5 text-cyan-600" /></span>
          <h3 className="font-bold text-lg">{t(lang, "vp_bilingual")}</h3>
          <p className="text-sm text-[#e5e7eb]/80">{t(lang, "vp_bilingual_desc")}</p>
        </div>
        {/* Card 6 */}
        <div className="glass rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg hover:scale-[1.03] transition-all group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-400"><MdAnalytics className="w-5 h-5 text-green-600" /></span>
          <h3 className="font-bold text-lg">{t(lang, "vp_analytics")}</h3>
          <p className="text-sm text-[#e5e7eb]/80">{t(lang, "vp_analytics_desc")}</p>
        </div>
      </div>
    </section>
  );
}
