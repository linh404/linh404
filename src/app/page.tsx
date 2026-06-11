"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FadeUp } from "@/components/FadeUp";
import { TypingText } from "@/components/TypingText";
import { useI18n } from "@/components/I18nProvider";
import { ApprovalFlow } from "@/components/ApprovalFlow";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-6 pt-4 md:px-24 md:pb-24 md:pt-4 selection:bg-accent selection:text-black">
      {/* Background grid */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-[-100%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-flow"></div>
      </div>
      
      <Navbar />

      <div className="w-full max-w-5xl flex flex-col gap-32">
        {/* HERO */}
        <FadeUp id="hero" className="flex flex-col md:flex-row gap-12 items-center md:items-start justify-between">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1 text-xs font-mono rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {t("hero_badge")}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-border/50 shrink-0">
                <Image src="/avt.png" alt="Lưu Hoàng Linh" fill className="object-cover" priority />
              </div>
              <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter leading-tight">
                Lưu Hoàng <span className="text-accent">Linh</span>
              </h1>
            </div>
            <h2 className="text-2xl text-muted font-medium tracking-tight h-8">
              <TypingText />
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              {t("hero_desc")}
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#projects" className="border border-accent text-accent hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] active:scale-95 font-mono text-sm px-6 py-3 transition-all duration-200">
                {t("hero_btn_projects")}
              </Link>
              <Link href="mailto:luuhoanglinh.2003@gmail.com" className="border border-border bg-card hover:bg-border hover:border-zinc-500 active:scale-95 text-foreground font-mono text-sm px-6 py-3 transition-all duration-200">
                {t("hero_btn_contact")}
              </Link>
            </div>
          </div>
          
          {/* Signature Terminal */}
          <div className="w-full md:w-[400px] border border-zinc-800 bg-[#09090b] rounded-md overflow-hidden shadow-2xl shadow-accent/10 animate-float">
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-black/50 px-4 py-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <span className="text-xs font-mono text-zinc-500 ml-2">sys_status.ts</span>
            </div>
            <div className="p-4 font-mono text-sm text-zinc-400">
              <p><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
              <p className="ml-4"><span className="text-zinc-300">name</span>: <span className="text-green-400">"Lưu Hoàng Linh"</span>,</p>
              <p className="ml-4"><span className="text-zinc-300">focus</span>: <span className="text-green-400">{t("terminal_focus")}</span>,</p>
              <p className="ml-4"><span className="text-zinc-300">edu</span>: <span className="text-green-400">{t("terminal_edu")}</span>,</p>
              <p className="ml-4"><span className="text-zinc-300">stack</span>: [<span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"MySQL"</span>],</p>
              <p className="ml-4"><span className="text-zinc-300">ops</span>: [<span className="text-green-400">"Linux"</span>, <span className="text-green-400">"PM2"</span>],</p>
              <p className="ml-4"><span className="text-zinc-300">status</span>: <span className="text-accent">{t("terminal_status")}</span></p>
              <p>&#125;;</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-accent">~</span>
                <span className="w-2 h-4 bg-accent animate-pulse"></span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* PROJECTS - Flagship */}
        <FadeUp id="projects" delay={0.2} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent text-sm">{t("projects_label")}</span>
            <h3 className="text-3xl font-bold tracking-tight">{t("projects_title")}</h3>
            <p className="text-muted">{t("projects_subtitle")}</p>
          </div>
          
          <div className="flex flex-col gap-12">
            {/* TWMS */}
            <FadeUp delay={0.3}>
              <div className="border border-border bg-card p-6 md:p-8 rounded-lg group hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="text-2xl font-bold">Teaching Workload Management System (TWMS)</h4>
                      <span className="border border-accent/30 text-accent bg-accent/5 px-2 py-0.5 text-xs font-mono rounded">{t("project_flagship")}</span>
                    </div>
                    <p className="text-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: t("project_twms_desc") }} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                        <div className="font-mono text-accent text-xs mb-2">{t("project_architecture")}</div>
                        <ul className="text-sm text-secondary space-y-2">
                          <li>• RESTful API Design</li>
                          <li>• Complex Relational Database Modeling</li>
                          <li>• Multi-step Approval Workflows</li>
                        </ul>
                      </div>
                      <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                        <div className="font-mono text-accent text-xs mb-2">{t("project_features")}</div>
                        <ul className="text-sm text-secondary space-y-2">
                          <li>• RBAC &amp; ABAC Authorization</li>
                          <li>• Automated Document Generation</li>
                          <li>• Advanced Excel Import/Export</li>
                        </ul>
                      </div>
                    </div>

                    <ApprovalFlow />
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Node.js", "Express", "MySQL", "Excel.js", "PM2"].map(tech => (
                        <span key={tech} className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-6">
                      <Link href="/projects/twms" target="_blank" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                        {t("project_live_demo")}
                      </Link>
                      <a href="https://github.com/holyBeastt/ttcs" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-secondary">
                        {t("project_github")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Other Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeUp delay={0.4}>
                <div className="border border-border bg-card p-6 rounded-lg flex flex-col gap-4 h-full hover:border-accent/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                  <h4 className="text-xl font-bold">QuanTra Coffee</h4>
                  <p className="text-sm text-muted flex-1">
                    {t("project_qt_back_desc")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono text-secondary">Next.js 15</span>
                    <span className="text-xs font-mono text-secondary">MySQL</span>
                    <span className="text-xs font-mono text-secondary">Payment Gateway</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <a href="https://github.com/linh404/backend-quantra-coffee" target="_blank" rel="noreferrer" className="text-xs font-mono hover:text-accent transition-colors">{t("project_backend")}</a>
                    <a href="https://github.com/linh404/frontend-quantra-coffee" target="_blank" rel="noreferrer" className="text-xs font-mono hover:text-accent transition-colors">{t("project_frontend")}</a>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.5}>
                <div className="border border-border bg-card p-6 rounded-lg flex flex-col gap-4 h-full hover:border-accent/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                  <h4 className="text-xl font-bold">Android App API Server</h4>
                  <p className="text-sm text-muted flex-1">
                    {t("project_android_desc")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono text-secondary">Node.js</span>
                    <span className="text-xs font-mono text-secondary">REST API</span>
                  </div>
                  <div className="mt-2">
                    <a href="https://github.com/holyBeastt/android_basic_app_server" target="_blank" rel="noreferrer" className="text-xs font-mono hover:text-accent transition-colors">{t("project_source")}</a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </FadeUp>

        {/* EXPERIENCE */}
        <FadeUp id="experience" delay={0.2} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent text-sm">{t("exp_label")}</span>
            <h3 className="text-3xl font-bold tracking-tight">{t("exp_title")}</h3>
          </div>
          
          <div className="flex flex-col border-l border-border/50 ml-4 pl-6 md:pl-10 space-y-12">
            <FadeUp delay={0.3} className="relative">
              <div className="absolute w-3 h-3 bg-accent -left-[29px] md:-left-[45px] top-1.5 rounded-sm"></div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h4 className="text-xl font-bold">{t("exp_1_role")}</h4>
                <span className="text-accent font-mono text-sm">2024 — Present</span>
              </div>
              <p className="text-secondary text-sm font-mono mb-4">{t("exp_1_company")}</p>
              <p className="text-muted leading-relaxed">
                {t("exp_1_desc")}
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="relative">
              <div className="absolute w-3 h-3 bg-border -left-[29px] md:-left-[45px] top-1.5 rounded-sm"></div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h4 className="text-xl font-bold">{t("exp_2_role")}</h4>
                <span className="text-secondary font-mono text-sm">2023 — 2024</span>
              </div>
              <p className="text-secondary text-sm font-mono mb-4">{t("exp_2_company")}</p>
              <p className="text-muted leading-relaxed">
                {t("exp_2_desc")}
              </p>
            </FadeUp>
          </div>
        </FadeUp>

        {/* FOOTER */}
        <footer className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="font-mono">{t("footer_infra")}</span>
          </div>
          <div>
            &copy; 2026 Lưu Hoàng Linh
          </div>
        </footer>
      </div>
    </main>
  );
}
