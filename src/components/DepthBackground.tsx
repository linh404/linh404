"use client";

import { useEffect, useRef } from "react";

const codeLines = [
  `const stack = ["Node.js", "Next.js", "MySQL"];`,
  `function deploy() { pm2.start("app.js"); }`,
  `SELECT * FROM users WHERE role = 'dev';`,
  `git commit -m "feat: add depth layer"`,
  `await db.query("SELECT 1");`,
  `res.status(200).json({ data });`,
  `docker compose up -d --build`,
  `nginx -t && systemctl reload nginx`,
  `interface Developer { name: string; stack: string[]; }`,
  `const lin404 = new Developer("Linh");`,
];

export function DepthBackground() {
  const midRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!midRef.current) return;
      const scrollY = window.scrollY;
      // Slow parallax: move at 20% of scroll speed
      midRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
    };

    // Mouse tracking for depth-card glow
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>(".depth-card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* ─── Background layer: grid ─── */}
      <div className="parallax-bg">
        <div className="absolute inset-[-100%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-flow" />
      </div>

      {/* ─── Middle layer: glow orbs, shapes, code ─── */}
      <div ref={midRef} className="parallax-mid" style={{ willChange: "transform" }}>
        {/* Glow orbs */}
        <div className="glow-orb w-[400px] h-[400px] bg-accent top-[-5%] left-[-5%] animate-orb-drift" />
        <div className="glow-orb w-[300px] h-[300px] bg-purple-600 bottom-[20%] right-[-3%] animate-orb-drift" style={{ animationDelay: "-4s" }} />
        <div className="glow-orb w-[250px] h-[250px] bg-cyan-500 top-[50%] left-[60%] animate-orb-drift" style={{ animationDelay: "-8s" }} />

        {/* Code snippets */}
        {codeLines.map((line, i) => {
          const top = 15 + i * 7; // staggered vertically
          const left = (i % 2 === 0) ? 3 + (i * 2) : 55 + (i * 1.5);
          return (
            <div
              key={i}
              className="code-snippet"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animation: i % 2 === 0
                  ? "particle-float 8s ease-in-out infinite"
                  : "particle-float 10s ease-in-out infinite",
                animationDelay: `${-i * 1.2}s`,
              }}
            >
              {line}
            </div>
          );
        })}

        {/* Geometric shapes */}
        <div className="geo-shape w-20 h-20 top-[15%] right-[8%] rotate-12" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }} />
        <div className="geo-shape w-16 h-16 bottom-[30%] left-[5%] -rotate-12" style={{ borderRadius: "50% 50% 20% 80% / 50% 30% 70% 50%" }} />
        <div className="geo-shape w-12 h-12 top-[60%] right-[15%] rotate-45" style={{ borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%" }} />
        <div className="geo-shape w-24 h-24 bottom-[10%] left-[40%] -rotate-6" style={{ borderRadius: "30% 70% 50% 50% / 30% 50% 50% 70%", borderColor: "var(--accent)" }} />

        {/* Small dots */}
        <div className="absolute w-1 h-1 rounded-full bg-accent/20 top-[25%] left-[20%]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-accent/15 top-[70%] left-[75%]" />
        <div className="absolute w-1 h-1 rounded-full bg-purple-500/20 top-[40%] left-[85%]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-accent/10 bottom-[15%] left-[15%]" />
        <div className="absolute w-1 h-1 rounded-full bg-cyan-400/20 top-[10%] left-[45%]" />
        <div className="absolute w-1 h-1 rounded-full bg-accent/15 top-[80%] left-[50%]" />

        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60 pointer-events-none" />
      </div>
    </>
  );
}