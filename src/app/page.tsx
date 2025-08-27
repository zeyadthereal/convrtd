
"use client";
import React, { useState, useEffect } from "react";
import JsonLd from "../components/JsonLd";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import ValueProps from "../components/ValueProps";
import HowItWorks from "../components/HowItWorks";
import CaseStudy from "../components/CaseStudy";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


export default function Home() {
  // Language state is managed here and passed to all sections for i18n
  const [lang, setLang] = useState<Lang>(() =>
    typeof window !== "undefined" && localStorage.getItem("lang") === "ar" ? "ar" : "en"
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <>
      <JsonLd />
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <ValueProps lang={lang} />
      <HowItWorks lang={lang} />
      <CaseStudy lang={lang} />
      <Pricing lang={lang} />
      <FAQ lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
