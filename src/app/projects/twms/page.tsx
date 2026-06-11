"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/I18nProvider";
import { FadeUp } from "@/components/FadeUp";
import { Navbar } from "@/components/Navbar";

export default function TwmsRedirect() {
  const { t } = useI18n();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      window.open("http://42.112.213.93:8888", "_blank");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-6 pt-4 md:px-24 md:pb-24 md:pt-4 selection:bg-accent selection:text-black">
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-[-100%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-flow"></div>
      </div>
      
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl mt-12 md:mt-0">
        <FadeUp className="w-full flex flex-col items-center text-center gap-8 border border-border bg-card p-8 md:p-12 rounded-lg shadow-2xl shadow-accent/5">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-2">
            <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-accent animate-spin"></div>
          </div>
          
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{t("redirect_title")}</h1>
            <p className="text-secondary">
              {t("redirect_msg_prefix")}<span className="text-accent font-mono font-bold text-lg">{countdown}</span>{t("redirect_msg_suffix")}
            </p>
          </div>

          <div className="w-full border border-border bg-card-muted rounded-md p-6 my-4 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-muted text-sm">{t("redirect_account")}</span>
              <span className="bg-border px-3 py-1 rounded font-mono text-foreground font-bold tracking-wider">test3</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-muted text-sm">{t("redirect_password")}</span>
              <span className="bg-border px-3 py-1 rounded font-mono text-foreground font-bold tracking-wider">1</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center w-full">
            <p className="text-xs text-muted mb-2">{t("redirect_manual")}</p>
            <a 
              href="http://42.112.213.93:8888" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black hover:bg-accent/90 active:scale-95 font-medium text-sm px-8 py-3 rounded-md transition-all duration-200"
            >
              {t("redirect_btn")}
            </a>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
