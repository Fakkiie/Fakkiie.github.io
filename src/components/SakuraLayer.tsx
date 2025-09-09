'use client';
import { useEffect, useRef } from 'react';

type Petal = {
  x: number; y: number; r: number;
  vy: number; vx: number; rot: number; vr: number; sway: number;
};

export default function SakuraLayer({ enabled }: { enabled: boolean }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const lastScrollY = useRef(0);
  const scrollBoost = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const canvas = ref.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      seed();
    };

    const PETAL_COUNT = prefersReduced ? 16 : 40;
    function seed() {
      petalsRef.current = Array.from({ length: PETAL_COUNT }, spawn);
    }

    function spawn(): Petal {
      const r = rand(6, 14);
      return {
        x: Math.random() * w,
        y: Math.random() * -h,
        r,
        vy: rand(20, 42) / 100,
        vx: rand(-22, 22) / 100,
        rot: Math.random() * Math.PI * 2,
        vr: rand(-8, 8) / 1000,
        sway: rand(8, 22),
      };
    }
    function rand(min: number, max: number) { return Math.random() * (max - min) + min; }

    function onScroll() {
      const y = window.scrollY || 0;
      const dy = y - lastScrollY.current;
      lastScrollY.current = y;
      scrollBoost.current = Math.max(-0.6, Math.min(0.6, dy / 60));
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });

    seed();

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      t += 0.016;

      for (const p of petalsRef.current) {
        p.y += p.vy + Math.abs(scrollBoost.current) * 0.2;
        p.x += p.vx + Math.sin(t + p.y / 50) * (p.sway / 200);
        p.rot += p.vr;

        if (p.y - p.r > h + 20 || p.x < -40 || p.x > w + 40) {
          const r = rand(6, 14);
          p.x = Math.random() * w;
          p.y = -rand(10, h / 2);
          p.r = r;
          p.vy = rand(20, 42) / 100;
          p.vx = rand(-22, 22) / 100;
          p.rot = Math.random() * Math.PI * 2;
          p.vr = rand(-8, 8) / 1000;
          p.sway = rand(8, 22);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);

        const g = ctx.createRadialGradient(0, 0, 1, 0, 0, p.r);
        g.addColorStop(0, 'rgba(233, 64, 102, 0.36)');
        g.addColorStop(1, 'rgba(233, 64, 102, 0.10)');
        ctx.fillStyle = g;

        ctx.beginPath();
        ctx.moveTo(0, -p.r * 0.8);
        ctx.quadraticCurveTo(p.r * 0.9, -p.r * 0.3, 0, p.r);
        ctx.quadraticCurveTo(-p.r * 0.9, -p.r * 0.3, 0, -p.r * 0.8);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      scrollBoost.current *= 0.92;
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      ctx.clearRect(0, 0, w, h);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      width={0}
      height={0}
      aria-hidden
    />
  );
}
