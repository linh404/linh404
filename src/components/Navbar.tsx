"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "./I18nProvider";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
  const { lang, t, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md w-full max-w-5xl flex flex-col md:flex-row md:justify-between md:items-center mb-12 md:mb-24 py-4 border-b border-border/50">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" className="font-mono text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          linh<span className="text-accent">404</span>
        </Link>
        <button 
          className="md:hidden p-1 text-muted hover:text-foreground transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0 w-full md:w-auto pb-4 md:pb-0`}>
        <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium text-muted w-full md:w-auto items-center">
          <Link href="/#projects" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">/{t("nav_projects").toLowerCase()}</Link>
          <Link href="/#experience" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">/{t("nav_experience").toLowerCase()}</Link>
          <Link href="/LuuHoangLinh-Backend-CV.pdf" onClick={() => setIsOpen(false)} target="_blank" className="hover:text-accent transition-colors">/{t("nav_cv").toLowerCase()}</Link>
          <Link href="https://github.com/linh404" onClick={() => setIsOpen(false)} target="_blank" className="hover:text-accent transition-colors">/{t("nav_github").toLowerCase()}</Link>
        </nav>
        
        <div className="flex items-center justify-center gap-3 md:border-l md:border-border/50 md:pl-6 pt-4 md:pt-0 w-full md:w-auto border-t border-border/50 md:border-t-0">
          <button 
            onClick={() => { setLang(lang === "vi" ? "en" : "vi"); setIsOpen(false); }}
            className="flex items-center justify-center w-8 h-8 rounded-md text-xs font-mono font-bold text-muted hover:text-foreground hover:bg-accent/10 transition-all"
            aria-label="Toggle language"
          >
            {lang === "vi" ? "VI" : "EN"}
          </button>
          
          <button 
            onClick={() => { toggleTheme(); setIsOpen(false); }}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted hover:text-foreground hover:bg-accent/10 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
