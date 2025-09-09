// src/components/ProjectCard.tsx
"use client";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech?: string[];
  year?: string;
  link?: string;
  lang?: "en" | "ja";
}

export default function ProjectCard({
  title,
  desc,
  tech,
  year,
  link,
  lang = "en",
}: ProjectCardProps) {
  const isJapanese = lang === "ja";

  return (
    <article
      className={[
        // base card
        "group relative flex h-full flex-col rounded-2xl border bg-white/90 p-6",
        "shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-md overflow-hidden",
        // border (same for now, kept explicit for future theming)
        "border-neutral-200",
      ].join(" ")}
    >
      {/* JP-only hover overlay (subtle blossom tint) */}
      {isJapanese && (
        <span
          className="pointer-events-none absolute inset-0 bg-pink-100 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
          aria-hidden
        />
      )}

      {/* Header */}
      <div className="relative z-10 mb-3 flex items-start justify-between">
        <h3 className="text-xl font-medium tracking-wide text-neutral-900">
          {title}
        </h3>

        {year && (
          <span
            className={[
              "ml-3 shrink-0 rounded-full px-2.5 py-0.5 text-xs tracking-wider font-light",
              isJapanese
          ? "border border-primary bg-[color:var(--foreground,#111827)]/5 text-neutral-600"
          : "bg-neutral-100 text-neutral-600",
            ].join(" ")}
          >
            {year}
          </span>
        )}
      </div>

      {/* Body */}
      <p className="relative z-10 leading-relaxed text-neutral-600">{desc}</p>

      {/* Tech badges */}
      {tech?.length ? (
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className={[
                "rounded px-2 py-0.5 text-[11px] uppercase tracking-wide",
                "border-2 text-neutral-600",
                isJapanese ? "border-primary" : "border-neutral-300",
              ].join(" ")}
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {/* Spacer to push footer */}
      <div className="mt-6 flex-1" />

      {/* Footer */}
      <div className="relative z-10 mt-4 border-t border-[color:var(--primary,#e60023)]/40 pt-4">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex items-center text-sm underline-offset-4 transition-colors",
              "rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              isJapanese
                ? "text-[color:var(--primary,#e60023)] hover:underline focus-visible:ring-pink-300"
                : "text-neutral-700 hover:underline focus-visible:ring-neutral-400",
            ].join(" ")}
          >
            View Project
            <svg
              className="ml-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V15a1 1 0 11-2 0V5.414L9.707 7.707A1 1 0 018.293 6.293l4-4z" />
            </svg>
          </a>
        ) : null}
      </div>

      {/* Accent dot */}
      <span
        className={[
          "pointer-events-none absolute right-3 top-3 h-2 w-2 rounded-full transition-all",
          isJapanese
            ? "bg-[color:var(--primary,#e60023)] opacity-90 group-hover:opacity-100"
            : "bg-neutral-200 group-hover:bg-neutral-300",
        ].join(" ")}
        aria-hidden
      />
    </article>
  );
}

export type { ProjectCardProps };
