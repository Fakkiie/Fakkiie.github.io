
'use client';

type Lang = 'en' | 'ja';

interface LangPillProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function LangPill({ lang, setLang }: LangPillProps) {
  const isJA = lang === 'ja';

  return (
    <div className="fixed right-4 top-4 z-50">
      <div className="relative inline-flex h-10 w-[140px] items-center rounded-full border border-black/10 bg-white/70 px-1 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
        {/* Sliding thumb */}
        <span
          className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-black transition-transform duration-300
            ${isJA ? 'translate-x-full' : 'translate-x-0'}`}
          aria-hidden
        />
        {/* EN */}
        <button
          onClick={() => setLang('en')}
          className={`relative z-10 flex-1 px-3 text-sm transition-colors ${
            !isJA ? 'text-white' : 'text-black'
          }`}
          aria-pressed={!isJA}
        >
          EN
        </button>
        {/* JA */}
        <button
          onClick={() => setLang('ja')}
          className={`relative z-10 flex-1 px-3 text-sm transition-colors ${
            isJA ? 'text-primary' : 'text-black'
          }`}
          aria-pressed={isJA}
        >
          日本
        </button>
      </div>
    </div>
  );
}
