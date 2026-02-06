// App.tsx — adds a centered ABOUT section with subtle kanji background
"use client";
import React, { useEffect, useRef, useState } from "react";

import { Mail, Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";

export default function App() {
  const HERO = {
    name: "Landon Hadre",
    jp: "縁をつくる",
    en: "CREATING CONNECTION",
    sub: "languages · blockchain · connections",
  };

  const LINKS = [
    { label: "Email", href: "mailto:landonhadrework@gmail.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/fakkiie", icon: Github },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/landonhadre",
      icon: Linkedin,
    },
    { label: "X", href: "https://x.com/fakkiie", icon: SiX },
  ];

  const [activePaper, setActivePaper] = useState<null | {
    title: string;
    meta: string;
    read: string;
    desc: string;
    tagJp: string;
    tagEn: string;
    href: string;
    pdfHref?: string;
  }>(null);

  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    if (!activePaper) return;

    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastScrollY.current - 18) {
        setActivePaper(null);
        return;
      }
      lastScrollY.current = y;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePaper(null);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePaper]);

  const papers = [
    {
      title:
        "Evaluating Early Stopping and Pre-filtering Optimizations for Eclat and FP-Growth",
      meta: "In preparation",
      read: "15 min read",
      desc: "improving efficiency in frequent itemset mining through adaptive techniques.",
      tagJp: "策",
      tagEn: "strategy",
      href: "/papers/eclat.pdf",
    },
    {
      title:
        "Secure Charging Session Management in V2G Systems using Blockchain",
      meta: "Submitted",
      read: "9 min read",
      desc: "a blockchain-based framework to ensure integrity and security in vehicle-to-grid charging sessions. (3 page poster)",
      tagJp: "継",
      tagEn: "consistency",
      href: "/papers/evposter.pdf",
    },
    // {
    //   title: "A Secure Session Resumption Mechanism for Vehicle-to-Grid Charging",
    //   meta: "Draft",
    //   read: "10 min read",
    //   desc:
    //     "Proposing a method to securely resume V2G charging sessions using blockchain technology to ensure continuity and trust. (6 page paper)",
    //   tagJp: "信",
    //   tagEn: "trust",
    //   href: "/papers/onchain-coordination.pdf",
    // },
    {
      title:
        "The Intelligent Gambler: An Artificial Intelligence Model for Optimal Play and Betting in Blackjack",
      meta: "Project Report",
      read: "12 min read",
      desc: "an AI model utilizing Q-learning to develop optimal strategies for playing and dynamically betting in blackjack.",
      tagJp: "和",
      tagEn: "balance",
      href: "/papers/blackjack.pdf",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515] font-['Noto_Sans_JP']">
      {/* =========================
          LANDING
      ========================== */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background watermark (UNIFIED, centered composition) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="relative flex items-center justify-center gap-2 md:gap-4">
              <div className="text-[120px] md:text-[180px] font-semibold tracking-[-0.02em] text-[#151515]/[0.06]">
                縁
              </div>

              <div className="relative">
                <div className="text-[120px] md:text-[180px] font-semibold tracking-[-0.04em] text-[#151515]/[0.05]">
                  つくる
                </div>

                <div className="absolute inset-0 translate-x-[6px] translate-y-[4px] text-[120px] md:text-[180px] font-semibold tracking-[-0.04em] text-[#151515]/[0.025]">
                  つくる
                </div>
                <div className="absolute inset-0 -translate-x-[4px] translate-y-[2px] text-[120px] md:text-[180px] font-semibold tracking-[-0.04em] text-[#151515]/[0.018]">
                  つくる
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02),transparent_70%)]" />
        </div>

        {/* Content */}
        <div className="relative min-h-screen">
          <div className="px-8 md:px-20">
            <div className="pt-24 md:pt-28 max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
                {HERO.name}
              </h1>

              <div className="mt-5 md:mt-6">
                <div className="text-2xl md:text-3xl font-medium tracking-[0.22em] text-[#151515]/60">
                  {HERO.jp}
                </div>
                <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.38em] text-[#151515]/45">
                  {HERO.en}
                </div>
              </div>

              <p className="mt-6 text-base md:text-lg text-[#151515]/55 tracking-wide">
                {HERO.sub}
              </p>

              <div className="mt-14 md:mt-16 flex flex-wrap items-center gap-x-8 gap-y-4">
                {LINKS.map((l) => {
                  const Icon = l.icon as React.ComponentType<{ className?: string }>;
                  return (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group inline-flex flex-col items-center gap-2 text-[#151515]/60 hover:text-[#151515] transition-all duration-300"
                      title={l.label}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
                      <span className="text-xs md:text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {l.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT (CENTERED)
      ========================== */}
      <section
        id="about"
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
      >
        {/* About background: soft kanji wash */}
        <div className="pointer-events-none absolute inset-0">
          {/* Big faint kanji centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 繋 (connect) */}
              <div className="text-[180px] md:text-[320px] font-semibold tracking-[-0.06em] text-[#151515]/[0.045] select-none">
                繋
              </div>
              {/* second layer for texture */}
              <div className="absolute inset-0 translate-x-[10px] translate-y-[8px] text-[180px] md:text-[320px] font-semibold tracking-[-0.06em] text-[#151515]/[0.02] select-none">
                繋
              </div>
              <div className="absolute inset-0 -translate-x-[8px] translate-y-[5px] text-[180px] md:text-[320px] font-semibold tracking-[-0.06em] text-[#151515]/[0.016] select-none">
                繋
              </div>
            </div>
          </div>

          {/* subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02),transparent_70%)]" />
        </div>

        {/* About content (centered, readable) */}
        <div className="relative w-full px-8 md:px-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Section header: Kanji + English */}
            <div className="inline-flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-semibold tracking-[0.18em] text-[#151515]/80">
                私について
              </div>
              <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.42em] text-[#151515]/45">
                ABOUT
              </div>
            </div>

            <p className="mt-10 text-base md:text-lg leading-relaxed text-[#151515]/70">
              i build systems that help people connect through languages,
              through shared incentives, and through tools that make progress
              feel real.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#151515]/68">
              language learning taught me patience and nuance. Blockchain taught
              me coordination and trust. What excites me most is combining both:
              designing experiences where effort compounds, identity is
              portable, and community can form naturally around practice.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#151515]/66">
              my focus is simple: build with intention, measure what matters,
              and make it easier for people to show up consistently, for
              themselves and for each other.
            </p>

            {/* small “principles” row */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm md:text-base text-[#151515]/55">
              <span className="tracking-[0.12em]">縁 / connection</span>
              <span className="tracking-[0.12em]">継続 / consistency</span>
              <span className="tracking-[0.12em]">信頼 / trust</span>
            </div>
          </div>
        </div>
      </section>
      {/* =========================
    EXPERIENCE / 道のり (PATH)
========================== */}
      <section id="experience" className="relative py-36 overflow-hidden">
        {/* faint background kanji */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-[260px] md:text-[440px] font-semibold tracking-[-0.10em] text-[#151515]/[0.02] select-none">
            道
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-8 md:px-20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold tracking-[0.18em] text-[#151515]/80">
              道のり
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.42em] text-[#151515]/45">
              PATH
            </div>
          </div>

          <div className="mt-20 relative">
            {/* main path line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[#151515]/15" />

            {/* stations */}
            {[
              {
                when: " Jul 2025 — Present",
                title: "CTO & Co-Founder · YAP",
                tagJp: "縁",
                tagEn: "connection",
                body: "building a speaking-first language learning platform using on-chain incentives to reward consistency and real effort.",
                side: "left",
              },
              {
                when: "Jan 2025 - Apr 2025",
                title: "AI Engineer Intern · Glendor",
                tagJp: "信",
                tagEn: "trust",
                body: "developed a pipeline for sanitizing pathology slides using AI image analysis.",
                side: "right",
              },
              {
                when: "Nov 2024 - Present",
                title: "Software Developer · JSOSIF",
                tagJp: "資",
                tagEn: "capital",
                body: "developed internal tools for the john simpson odette student investment fund managing a portfolio over 280k.",
                side: "left",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={[
                  "relative mb-16 md:mb-20",
                  "md:flex md:items-start",
                  item.side === "left" ? "md:justify-start" : "md:justify-end",
                ].join(" ")}
              >
                {/* station marker */}
                <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 top-2">
                  <div className="w-3 h-3 rounded-full bg-[#151515]/55" />
                  <div className="mt-3 w-px h-6 bg-[#151515]/15 mx-auto" />
                </div>

                {/* content card (very subtle, like a label) */}
                <div
                  className={[
                    "pl-12 md:pl-0",
                    "md:w-[46%]",
                    item.side === "left" ? "md:pr-14" : "md:pl-14",
                  ].join(" ")}
                >
                  <div className="text-sm text-[#151515]/50">{item.when}</div>

                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <div className="text-lg md:text-xl font-medium">
                      {item.title}
                    </div>

                    {/* tiny seal tag */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold tracking-[0.18em] text-[#151515]/65">
                        {item.tagJp}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.38em] text-[#151515]/45">
                        {item.tagEn}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-base leading-relaxed text-[#151515]/70">
                    {item.body}
                  </p>

                  <div className="mt-6 h-px w-16 bg-[#151515]/12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
    PROJECTS / 作品 (BOOKS)
========================== */}
      <section id="projects" className="relative py-36 overflow-hidden">
        {/* faint background kanji */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-[260px] md:text-[440px] font-semibold tracking-[-0.10em] text-[#151515]/[0.02] select-none">
            作
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl px-8 md:px-20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold tracking-[0.18em] text-[#151515]/80">
              作品
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.42em] text-[#151515]/45">
              SELECTED WORKS
            </div>
          </div>

          {/* Book shelf */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "YAP",
                themeJp: "縁",
                themeEn: "connection",
                desc: "speaking-first language learning with on-chain incentives for consistency.",
                links: [
                  { label: "Live", href: "https://goyap.ai/" },
                  {
                    label: "Whitepaper",
                    href: "https://yap-2.gitbook.io/yap-docs",
                  },
                ],
              },
              {
                title: "KYC Provider",
                themeJp: "継",
                themeEn: "habit",
                desc: "our ETH Global 2025 hackathon project out of New York: a decentralized KYC solution.",
                links: [
                  {
                    label: "GitHub",
                    href: "https://github.com/ethankonk/eth-global-2025",
                  },
                ],
              },
              {
                title: "Swyper",
                themeJp: "信",
                themeEn: "trust",
                desc: "a Solana crypto coin swapping platform.",
                links: [
                  {
                    label: "Github",
                    href: "https://github.com/Fakkiie/cryptodapp",
                  },
                ],
              },
              {
                title: "Blackjack AI",
                themeJp: "策",
                themeEn: "strategy",
                desc: "an AI that plays and dynamically bets blackjack using Q-learning.",
                links: [
                  {
                    label: "Github",
                    href: "https://github.com/Fakkiie/Blackjack-AI",
                  },
                ],
              },
              {
                title: "Capstone - COMP 4990",
                themeJp: "堅",
                themeEn: "integrity",
                desc: "secure charging session management in V2G systems using blockchain.",
                links: [
                  {
                    label: "Github",
                    href: "https://github.com/Fakkiie/comp-4990",
                  },
                ],
              },
            ].map((p) => (
              <article
                key={p.title}
                className="group relative rounded-2xl border border-[#151515]/12 bg-[#fbfaf7] overflow-hidden"
              >
                {/* book spine */}
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#151515]/[0.03] border-r border-[#151515]/10" />
                <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center">
                  <div className="-rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[0.45em] text-[#151515]/45">
                    {p.themeEn}
                  </div>
                </div>

                {/* label strip (like a library tag) */}
                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <span className="text-sm font-semibold tracking-[0.18em] text-[#151515]/65">
                    {p.themeJp}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.38em] text-[#151515]/45">
                    {p.themeEn}
                  </span>
                </div>

                <div className="pl-14 pr-6 py-8">
                  <h3 className="text-xl font-medium">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#151515]/70">
                    {p.desc}
                  </p>

                  <div className="mt-6 flex gap-6 text-sm text-[#151515]/60">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target={
                          l.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          l.href.startsWith("http") ? "noreferrer" : undefined
                        }
                        className="hover:text-[#151515] transition-colors"
                      >
                        → {l.label}
                      </a>
                    ))}
                  </div>

                  {/* subtle “page edge” */}
                  <div className="mt-8 h-px w-full bg-[#151515]/10" />
                  <div className="mt-2 h-px w-[70%] bg-[#151515]/[0.06]" />
                </div>

                {/* soft hover lift */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_55%)]" />
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* =========================
    PAPERS / 記録 (SCROLL GRID — 3 per row)
========================== */}
      <section id="papers" className="relative py-36 overflow-hidden">
        {/* faint background kanji */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-[240px] md:text-[420px] font-semibold tracking-[-0.10em] text-[#151515]/[0.02] select-none">
            巻
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-8 md:px-20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold tracking-[0.18em] text-[#151515]/80">
              記録
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.42em] text-[#151515]/45">
              PAPERS · RESEARCH · BLOGS
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {papers.map((paper) => (
              <article
                key={paper.title}
                onClick={() => setActivePaper(paper)}
                className="
            group relative overflow-hidden cursor-pointer
            rounded-[28px]
            border border-[#151515]/12
            bg-[#f7f3ea]
            px-7 py-9
            shadow-[0_1px_0_rgba(0,0,0,0.04)]
            transition-transform duration-300
            hover:-translate-y-1
          "
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActivePaper(paper);
                }}
              >
                {/* parchment depth */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.026),transparent_25%,transparent_75%,rgba(0,0,0,0.022))]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.018),transparent_62%)]" />

                {/* curled edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-[linear-gradient(to_right,rgba(0,0,0,0.06),transparent)]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-[linear-gradient(to_left,rgba(0,0,0,0.06),transparent)]" />

                {/* top/bottom rods */}
                <div className="pointer-events-none absolute left-10 right-10 top-5 h-[2px] bg-[#151515]/15" />
                <div className="pointer-events-none absolute left-10 right-10 bottom-5 h-[2px] bg-[#151515]/15" />

                {/* rollers (capsules) */}
                <div className="pointer-events-none absolute left-6 top-3 h-7 w-12 rounded-full bg-[#fbfaf7] border border-[#151515]/15 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]" />
                <div className="pointer-events-none absolute right-6 top-3 h-7 w-12 rounded-full bg-[#fbfaf7] border border-[#151515]/15 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]" />
                <div className="pointer-events-none absolute left-6 bottom-3 h-7 w-12 rounded-full bg-[#fbfaf7] border border-[#151515]/15 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]" />
                <div className="pointer-events-none absolute right-6 bottom-3 h-7 w-12 rounded-full bg-[#fbfaf7] border border-[#151515]/15 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]" />

                {/* content */}
                <div className="relative min-h-[340px] flex flex-col">
                  {/* top meta row */}
                  <div className="flex items-baseline justify-between gap-4 mb-6">
                    <div className="text-[10px] uppercase tracking-[0.38em] text-[#151515]/45">
                      {paper.read}
                    </div>
                    <div className="text-[10px] text-[#151515]/50">
                      {paper.meta}
                    </div>
                  </div>

                  {/* seal */}
                  <div className="flex items-baseline justify-between gap-4 mb-6">
                    <div className="text-sm font-semibold tracking-[0.18em] text-[#151515]/60">
                      {paper.tagJp}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.38em] text-[#151515]/45">
                      {paper.tagEn}
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-[#151515]/85 leading-snug mb-5">
                    {paper.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#151515]/70 leading-relaxed mb-6">
                    {paper.desc}
                  </p>
                </div>

                {/* hover depth */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_55%)]" />
              </article>
            ))}
          </div>

          <p className="mt-12 text-sm text-[#151515]/45 text-center">
            landon hadre · © {new Date().getFullYear()} · all rights reserved
          </p>
        </div>
      </section>

      {/* =========================
    PAPER MODAL
========================== */}
      {activePaper && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-[#151515]/40 backdrop-blur-[2px] animate-[fadeIn_180ms_ease-out]"
            onClick={() => setActivePaper(null)}
          />

          <div 
            className="absolute inset-0 flex items-center justify-center px-6"
            onClick={() => setActivePaper(null)}
          >
            <div
              className="
          relative w-full max-w-4xl
          rounded-[28px]
          border border-[#151515]/15
          bg-[#f7f3ea]
          overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.20)]
          animate-[riseIn_220ms_ease-out]
        "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none absolute left-10 right-10 top-6 h-[2px] bg-[#151515]/15" />
              <div className="pointer-events-none absolute left-10 right-10 bottom-6 h-[2px] bg-[#151515]/15" />
              <div className="pointer-events-none absolute left-6 top-4 h-8 w-14 rounded-full bg-[#fbfaf7] border border-[#151515]/15 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]" />
              <div className="pointer-events-none absolute right-6 top-4 h-8 w-14 rounded-full bg-[#fbfaf7] border border-[#151515]/15 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]" />
              <div className="pointer-events-none absolute left-6 bottom-4 h-8 w-14 rounded-full bg-[#fbfaf7] border border-[#151515]/15 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]" />
              <div className="pointer-events-none absolute right-6 bottom-4 h-8 w-14 rounded-full bg-[#fbfaf7] border border-[#151515]/15 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.028),transparent_22%,transparent_78%,rgba(0,0,0,0.022))]" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(to_right,rgba(0,0,0,0.06),transparent)]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(to_left,rgba(0,0,0,0.06),transparent)]" />

              <div className="relative px-8 md:px-10 py-8 md:py-10">
                <div className="flex items-start justify-end">
                  <button
                    onClick={() => setActivePaper(null)}
                    className="text-sm text-[#151515]/55 hover:text-[#151515] transition-colors"
                    aria-label="Close modal"
                  >
                    close
                  </button>
                </div>

                <div className="mt-4 rounded-2xl border border-[#151515]/15 bg-[#fbfaf7] overflow-hidden">
                  <iframe
                    title={activePaper.title}
                    src={activePaper.pdfHref ?? activePaper.href}
                    className="w-full h-[70vh]"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={activePaper.pdfHref ?? activePaper.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                inline-flex items-center justify-center
                rounded-xl
                border border-[#151515]/15
                bg-[#fbfaf7]
                px-5 py-3
                text-sm text-[#151515]/70
                hover:text-[#151515]
                hover:border-[#151515]/25
                transition-colors
              "
                  >
                    Open PDF ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          <style>{`
      @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      @keyframes riseIn {
        from { opacity: 0; transform: translateY(10px) scale(0.99); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
    `}</style>
        </div>
      )}
    </main>
  );
}
