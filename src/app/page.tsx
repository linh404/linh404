"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FadeUp } from "@/components/FadeUp";
import { TypingText } from "@/components/TypingText";
import { useI18n } from "@/components/I18nProvider";
import { ApprovalFlow } from "@/components/ApprovalFlow";
import { DepthBackground } from "@/components/DepthBackground";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-6 pt-4 md:px-24 md:pb-24 md:pt-4 selection:bg-accent selection:text-black parallax-fg">
      <DepthBackground />
      
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

        {/* PROJECTS */}
        <FadeUp id="projects" delay={0.2} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent text-sm">{t("projects_label")}</span>
            <h3 className="text-3xl font-bold tracking-tight">{t("projects_title")}</h3>
            <p className="text-muted">{t("projects_subtitle")}</p>
          </div>
          
          <div className="flex flex-col gap-12">
            {/* ══════ TWMS ══════ */}
            <FadeUp delay={0.3}>
              <div className="depth-card relative border border-border bg-card p-6 md:p-8 rounded-lg group">
                <div className="depth-glow" />
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="text-2xl font-bold">Teaching Workload Management System (TWMS)</h4>
                      <span className="border border-accent/30 text-accent bg-accent/5 px-2 py-0.5 text-xs font-mono rounded">{t("project_flagship")}</span>
                    </div>

                    {/* Timeline badge */}
                    <div className="flex items-center gap-2 text-xs font-mono text-secondary bg-card-muted border border-border/50 px-3 py-1.5 rounded w-fit">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      {t("project_twms_timeline")}
                    </div>

                    <p className="text-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: t("project_twms_desc") }} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                        <div className="font-mono text-accent text-xs mb-2">{t("project_architecture")}</div>
                        <ul className="text-sm text-secondary space-y-2">
                          <li>• {t("project_twms_arch1")}</li>
                          <li>• {t("project_twms_arch2")}</li>
                          <li>• {t("project_twms_arch3")}</li>
                        </ul>
                      </div>
                      <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                        <div className="font-mono text-accent text-xs mb-2">{t("project_features")}</div>
                        <ul className="text-sm text-secondary space-y-2">
                          <li>• {t("project_twms_feat1")}</li>
                          <li>• {t("project_twms_feat2")}</li>
                          <li>• {t("project_twms_feat3")}</li>
                        </ul>
                      </div>
                    </div>


                    <ApprovalFlow />
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {[t("project_twms_tech1"), t("project_twms_tech2"), t("project_twms_tech3"), t("project_twms_tech4"), t("project_twms_tech5")].map(tech => (
                        <span key={tech} className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-6">
                      <Link href="/projects/twms" target="_blank" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                        {t("project_live_demo")}
                      </Link>
                      <a href="https://github.com/linh404/instructor_web" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-secondary">
                        {t("project_github")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* ══════ QUANTRA COFFEE ══════ */}
            <FadeUp delay={0.35}>
              <div className="depth-card relative border border-border bg-card p-6 md:p-8 rounded-lg group">
                <div className="depth-glow" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-2xl font-bold">QuanTra Coffee</h4>
                    <span className="border border-amber-500/30 text-amber-400 bg-amber-500/5 px-2 py-0.5 text-xs font-mono rounded">Full-stack</span>
                  </div>

                  {/* Timeline badge */}
                  <div className="flex items-center gap-2 text-xs font-mono text-secondary bg-card-muted border border-border/50 px-3 py-1.5 rounded w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {t("project_qt_timeline")}
                  </div>

                  <p className="text-muted leading-relaxed">{t("project_qt_back_desc")}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_architecture")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_qt_arch1")}</li>
                        <li>• {t("project_qt_arch2")}</li>
                        <li>• {t("project_qt_arch3")}</li>
                      </ul>
                    </div>
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_features")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_qt_feat1")}</li>
                        <li>• {t("project_qt_feat2")}</li>
                        <li>• {t("project_qt_feat3")}</li>
                      </ul>
                    </div>
                  </div>


                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Next.js 15</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">TypeScript</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Express</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">MySQL</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Prisma</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">NextAuth</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Gemini API</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">VNPay/MoMo</span>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <a href="https://github.com/linh404/backend-quantra-coffee" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-secondary">
                      {t("project_backend")}
                    </a>
                    <a href="https://github.com/linh404/frontend-quantra-coffee" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-secondary">
                      {t("project_frontend")}
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* ══════ KMA-FREERTOS ══════ */}
            <FadeUp delay={0.4}>
              <div className="depth-card relative border border-border bg-card p-6 md:p-8 rounded-lg group">
                <div className="depth-glow" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-2xl font-bold">KMA-FreeRTOS</h4>
                    <span className="border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 px-2 py-0.5 text-xs font-mono rounded">IoT</span>
                  </div>

                  {/* Timeline badge */}
                  <div className="flex items-center gap-2 text-xs font-mono text-secondary bg-card-muted border border-border/50 px-3 py-1.5 rounded w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {t("project_freertos_timeline")}
                  </div>

                  <p className="text-muted leading-relaxed">{t("project_freertos_desc")}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_architecture")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_freertos_arch1")}</li>
                        <li>• {t("project_freertos_arch2")}</li>
                        <li>• {t("project_freertos_arch3")}</li>
                      </ul>
                    </div>
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_features")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_freertos_feat1")}</li>
                        <li>• {t("project_freertos_feat2")}</li>
                        <li>• {t("project_freertos_feat3")}</li>
                      </ul>
                    </div>
                  </div>


                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Flutter</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Firebase RTDB</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">ESP32</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">FreeRTOS</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">fl_chart</span>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <a href="https://github.com/linh404/kma-freertos" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-secondary">
                      {t("project_github")}
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* ══════ CTL STORE ══════ */}
            <FadeUp delay={0.45}>
              <div className="depth-card relative border border-border bg-card p-6 md:p-8 rounded-lg group">
                <div className="depth-glow" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-2xl font-bold">CTL Store</h4>
                    <span className="border border-purple-500/30 text-purple-400 bg-purple-500/5 px-2 py-0.5 text-xs font-mono rounded">E-commerce</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-secondary bg-card-muted border border-border/50 px-3 py-1.5 rounded w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {t("project_ctl_timeline")}
                  </div>

                  <p className="text-muted leading-relaxed">{t("project_ctl_desc")}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_architecture")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_ctl_arch1")}</li>
                        <li>• {t("project_ctl_arch2")}</li>
                        <li>• {t("project_ctl_arch3")}</li>
                      </ul>
                    </div>
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_features")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_ctl_feat1")}</li>
                        <li>• {t("project_ctl_feat2")}</li>
                        <li>• {t("project_ctl_feat3")}</li>
                      </ul>
                    </div>
                  </div>


                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">PHP</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">MySQL</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">MVC</span>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Link href="https://ctl01.infy.uk/" target="_blank" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                      {t("project_live_demo")}
                    </Link>
                    <a href="https://github.com/linh404/CTL-web" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-secondary">
                      {t("project_source")}
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* ══════ OPTIMIZE GRAPHICS ANDROID ══════ */}
            <FadeUp delay={0.5}>
              <div className="depth-card relative border border-border bg-card p-6 md:p-8 rounded-lg group">
                <div className="depth-glow" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-2xl font-bold">Optimize Graphics Android</h4>
                    <span className="border border-rose-500/30 text-rose-400 bg-rose-500/5 px-2 py-0.5 text-xs font-mono rounded">Performance</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-secondary bg-card-muted border border-border/50 px-3 py-1.5 rounded w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {t("project_android_timeline")}
                  </div>

                  <p className="text-muted leading-relaxed">{t("project_android_desc")}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_architecture")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_android_arch1")}</li>
                        <li>• {t("project_android_arch2")}</li>
                        <li>• {t("project_android_arch3")}</li>
                      </ul>
                    </div>
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_features")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_android_feat1")}</li>
                        <li>• {t("project_android_feat2")}</li>
                        <li>• {t("project_android_feat3")}</li>
                      </ul>
                    </div>
                  </div>


                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Flutter</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">OpenGL ES</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Canvas 2D</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Image Processing</span>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <a href="https://github.com/linh404/optimize-graphics-android" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-secondary">
                      {t("project_source")}
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* ══════ SMART CARD ══════ */}
            <FadeUp delay={0.55}>
              <div className="depth-card relative border border-border bg-card p-6 md:p-8 rounded-lg group">
                <div className="depth-glow" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-2xl font-bold">Smart Card Programming</h4>
                    <span className="border border-sky-500/30 text-sky-400 bg-sky-500/5 px-2 py-0.5 text-xs font-mono rounded">Security</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-secondary bg-card-muted border border-border/50 px-3 py-1.5 rounded w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {t("project_smartcard_timeline")}
                  </div>

                  <p className="text-muted leading-relaxed">{t("project_smartcard_desc")}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_architecture")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_smartcard_arch1")}</li>
                        <li>• {t("project_smartcard_arch2")}</li>
                        <li>• {t("project_smartcard_arch3")}</li>
                      </ul>
                    </div>
                    <div className="border border-border/50 bg-card-muted p-4 rounded group-hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-accent text-xs mb-2">{t("project_features")}</div>
                      <ul className="text-sm text-secondary space-y-2">
                        <li>• {t("project_smartcard_feat1")}</li>
                        <li>• {t("project_smartcard_feat2")}</li>
                        <li>• {t("project_smartcard_feat3")}</li>
                      </ul>
                    </div>
                  </div>


                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Java Card</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">APDU</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">RSA</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">KDF</span>
                    <span className="bg-border text-foreground px-3 py-1 text-xs font-mono rounded-sm hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all cursor-default">Embedded</span>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <a href="https://github.com/linh404/smart_card" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors text-secondary">
                      {t("project_source")}
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
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
                <span className="text-secondary font-mono text-sm">2025 — 2026</span>
              </div>
              <p className="text-secondary text-sm font-mono mb-4">{t("exp_2_company")}</p>
              <p className="text-muted leading-relaxed">
                {t("exp_2_desc")}
              </p>
            </FadeUp>

            <FadeUp delay={0.45} className="relative">
              <div className="absolute w-3 h-3 bg-border -left-[29px] md:-left-[45px] top-1.5 rounded-sm"></div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h4 className="text-xl font-bold">{t("exp_3_role")}</h4>
                <span className="text-secondary font-mono text-sm">2024 - 2025</span>
              </div>
              <p className="text-secondary text-sm font-mono mb-4">{t("exp_3_company")}</p>
              <p className="text-muted leading-relaxed">
                {t("exp_3_desc")}
              </p>
            </FadeUp>
          </div>
        </FadeUp>

        {/* CONTACT */}
        <FadeUp id="contact" delay={0.2} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent text-sm">{t("contact_label")}</span>
            <h3 className="text-3xl font-bold tracking-tight">{t("contact_title")}</h3>
            <p className="text-muted">{t("contact_desc")}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="mailto:luulinh4399@gmail.com"
              className="flex items-center gap-4 border border-border bg-card hover:bg-border hover:border-zinc-500 active:scale-95 p-5 rounded-lg transition-all duration-200 group flex-1"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-mono text-secondary">{t("contact_email_label")}</span>
                <span className="text-foreground font-medium">luulinh4399@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:0964131543"
              className="flex items-center gap-4 border border-border bg-card hover:bg-border hover:border-zinc-500 active:scale-95 p-5 rounded-lg transition-all duration-200 group flex-1"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-mono text-secondary">{t("contact_phone_label")}</span>
                <span className="text-foreground font-medium">0964131543</span>
              </div>
            </a>
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