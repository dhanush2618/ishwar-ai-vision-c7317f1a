import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Ripple = {
  x: number;
  y: number;
  r: number;
  life: number; // 1 -> 0
};

interface Props {
  density?: number; // particles per 100k px^2
  linkDistance?: number;
  colorA?: string;
  colorB?: string;
}

// Full-bleed interactive canvas background for the hero
export default function InteractiveHeroBg({
  density = 0.12,
  linkDistance = 120,
  colorA = "#22d3ee", // cyan-400
  colorB = "#a78bfa", // violet-400
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas.parentElement!;
      canvas.width = Math.floor(clientWidth * dpr);
      canvas.height = Math.floor(clientHeight * dpr);
      canvas.style.width = clientWidth + "px";
      canvas.style.height = clientHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(clientWidth, clientHeight);
    };

    const initParticles = (w: number, h: number) => {
      const area = (w * h) / 100000; // 100k px^2 buckets
      const count = Math.max(40, Math.floor(area * density * 100));
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      }));
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => (mouseRef.current.active = false);
    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripplesRef.current.push({ x, y, r: 0, life: 1 });
    };

    setSize();
    window.addEventListener("resize", setSize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointerdown", onDown);

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      // backdrop gradient wash
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, "rgba(2,6,23,0.0)");
      grad.addColorStop(1, "rgba(2,6,23,0.25)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      const parts = particlesRef.current;
      const mr = mouseRef.current;

      // Update particles
      for (let p of parts) {
        // gentle attraction to mouse
        if (mr.active) {
          const dx = mr.x - p.x;
          const dy = mr.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 20000) {
            const f = 0.0008; // attraction strength
            p.vx += dx * f;
            p.vy += dy * f;
          }
        }
        // velocity clamp
        p.vx = Math.max(-1.2, Math.min(1.2, p.vx));
        p.vy = Math.max(-1.2, Math.min(1.2, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        // wrap at edges
        if (p.x < -5) p.x = w + 5; else if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5; else if (p.y > h + 5) p.y = -5;
      }

      // Links
      const maxD = linkDistance;
      for (let i = 0; i < parts.length; i++) {
        const p1 = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const p2 = parts[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) {
            const t = 1 - d / maxD;
            ctx.strokeStyle = `rgba(168,139,250,${0.22 * t})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Particles draw
      for (let p of parts) {
        const dx = mr.x - p.x;
        const dy = mr.y - p.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        const glow = Math.max(0, 1 - d / 200);
        const r = 1.3 + glow * 2.2;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        g.addColorStop(0, `${hexToRgba(colorA, 0.9)}`);
        g.addColorStop(1, `${hexToRgba(colorB, 0.0)}`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ripples
      if (!prefersReduced) {
        for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
          const rp = ripplesRef.current[i];
          rp.r += 3.2;
          rp.life -= 0.018;
          if (rp.life <= 0) {
            ripplesRef.current.splice(i, 1);
            continue;
          }
          ctx.strokeStyle = `rgba(34,211,238,${0.4 * rp.life})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    if (!prefersReduced) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      // Render a single static frame for reduced motion
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
    }

    return () => {
      window.removeEventListener("resize", setSize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onDown);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, linkDistance, colorA, colorB]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
    />
  );
}

function hexToRgba(hex: string, alpha = 1) {
  // support #RRGGBB only
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return `rgba(255,255,255,${alpha})`;
  const r = parseInt(m[1], 16);
  const g = parseInt(m[2], 16);
  const b = parseInt(m[3], 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
