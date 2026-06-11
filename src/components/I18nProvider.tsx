"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "@/lib/translations";

type Language = "vi" | "en";
type Translations = typeof translations.vi;

interface I18nContextType {
  lang: Language;
  t: (key: keyof Translations) => any;
  setLang: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("vi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang-preference") as Language;
    if (saved && (saved === "vi" || saved === "en")) {
      setLang(saved);
    } else {
      setLang("vi");
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang-preference", newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: keyof Translations) => {
    if (!mounted) return translations.vi[key]; // Default for SSR
    return translations[lang][key];
  };

  return (
    <I18nContext.Provider value={{ lang: mounted ? lang : "vi", t, setLang: handleSetLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
