// src/app/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import LangPill from "@/components/Langpill";
import SakuraLayer from "@/components/SakuraLayer";
import ProjectCard from "@/components/ProjectCard";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import { TablerBrandGithub } from "@/components/icons/Github";
import { TablerBrandLinkedin } from "@/components/icons/Linkedin";

const STR = { en, ja } as const;
type Lang = keyof typeof STR;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = STR[lang];

  // a11y
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const fadeDir = useMemo(
    () => (lang === "en" ? "fade-left" : "fade-right"),
    [lang]
  );

  const meta = {
    en: {
      title: "Landon Hadre — Software Engineer & Language Learner",
      description:
        "Portfolio showcasing projects, experience, and bilingual journey.",
    },
    ja: {
      title: "ランドン — ソフトウェアエンジニア＆言語学習者",
      description: "プロジェクト、経験、二言語学習のポートフォリオ。",
    },
  }[lang];

  // 🔑 force-update <title> and meta tags on toggle
  useEffect(() => {
    // title
    document.title = meta.title;

    // helper to set <meta name|property="x" content="...">
    const setMeta = (
      key: string,
      content: string,
      attr: "name" | "property" = "name"
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", meta.description, "name");
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
  }, [meta.title, meta.description]);

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {lang === "ja" && <SakuraLayer enabled />}

      <div className="relative z-10 min-h-screen">
        <LangPill lang={lang} setLang={setLang} />

        {/* Hero / About */}
        <section className="flex flex-col items-center pt-12">
          <h1
            key={lang}
            className={`text-3xl font-semibold text-center max-w-3xl ${fadeDir}`}
          >
            {t.hero}
          </h1>
          <hr
            className={`mt-12 border-l-2 h-40 mx-6 ${
              lang === "ja" ? "border-primary" : "border-black"
            }`}
          />
          <h4 className={`mt-12 text-xl font-semibold ${fadeDir}`}>
            {t["about.title"]}
          </h4>
          <p className={`mt-2 leading-8 text-lg text-black w-[75%] ${fadeDir}`}>
            {t["about.body"]}
          </p>
        </section>

        {/* Experience */}
        <div className="h-64" />
        <section className="flex flex-col items-center px-6">
          <h2 className={`text-2xl font-bold ${fadeDir}`}>
            {t["experience.title"]}
          </h2>

          <div
            className={`relative border-l-2 border-black mt-2 w-[75%] mx-auto ${fadeDir}`}
          >
            {t["experience.items"].map((item: any, i: number) => (
              <div
                key={`${lang}-exp-${i}`}
                className="relative flex items-start mb-2"
              >
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-2 border-white z-10 mt-2 -ml-[9px]" />
                <div className="pl-6">
                  <h3 className="font-extrabold text-base sm:text-lg break-words">
                    {item.role}
                    <span className="block sm:inline"> – {item.company}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500">
                    {item.dates}
                  </p>
                  <ul className="list-disc text-sm sm:text-base mt-3 pl-5">
                    {item.bullets.map((b: string, j: number) => (
                      <li key={j} className="pl-0">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <div className="h-64" />
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
          <h2
            className={`mb-6 text-center text-2xl font-bold text-black ${fadeDir}`}
          >
            {t["projects.title"]}
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t["projects.items"].map((item: any, i: number) => (
              <ProjectCard
                key={`${lang}-project-${i}`}
                title={item.title}
                desc={item.description}
                tech={item.technologies}
                year={String(item.year)}
                link={item.link}
                lang={lang}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <div className="h-64" />
        <section
          className={`mx-auto w-full max-w-2xl px-6 py-16 text-center ${fadeDir}`}
        >
          <h2 className={`mb-6 text-2xl font-bold ${fadeDir}`}>
            {t["contact.title"]}
          </h2>
          <p className={`mb-8 text-gray-600 ${fadeDir}`}>{t["contact.body"]}</p>

          <div className={`flex justify-center gap-8 ${fadeDir}`}>
            <a
              href={t["contact.links"].github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center ${
                lang === "ja" ? "hover:text-primary" : ""
              }`}
            >
              <TablerBrandGithub className="inline-block w-6 h-6 mr-2 align-middle" />
              <span>GitHub</span>
            </a>
            <a
              href={t["contact.links"].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center ${
                lang === "ja" ? "hover:text-primary" : ""
              }`}
            >
              <TablerBrandLinkedin className="inline-block w-6 h-6 mr-2 align-middle" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
        <div className="h-64" />
        {/* <div className="h-[120vh]" /> */}
      </div>
    </div>
  );
}
