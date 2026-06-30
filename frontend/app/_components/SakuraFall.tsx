"use client";

import { useEffect, useRef, useState } from "react";

const PETAL_COUNT = 28;

type Petal = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleOffset: number;
};

function makePetal(canvasWidth: number, fromTop = false): Petal {
  return {
    x: Math.random() * canvasWidth,
    y: fromTop ? -20 - Math.random() * 100 : Math.random() * -600,
    size: 6 + Math.random() * 7,
    speedY: 0.6 + Math.random() * 0.8,
    speedX: -0.3 + Math.random() * 0.6,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (-0.02 + Math.random() * 0.04),
    opacity: 0.55 + Math.random() * 0.35,
    wobble: 0,
    wobbleSpeed: 0.02 + Math.random() * 0.02,
    wobbleOffset: Math.random() * Math.PI * 2,
  };
}

function drawPetal(ctx: CanvasRenderingContext2D, p: Petal) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.globalAlpha = p.opacity;

  ctx.beginPath();
  // Simple oval petal shape
  ctx.ellipse(0, 0, p.size * 0.55, p.size, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#f9b8c8";
  ctx.fill();

  // Slightly darker center vein
  ctx.beginPath();
  ctx.moveTo(0, -p.size * 0.8);
  ctx.lineTo(0, p.size * 0.8);
  ctx.strokeStyle = "#e8889a";
  ctx.lineWidth = 0.7;
  ctx.stroke();

  ctx.restore();
}

export function SakuraFall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const rafRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    petalsRef.current = Array.from({ length: PETAL_COUNT }, () =>
      makePetal(canvas.width, false)
    );

    let tick = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      petalsRef.current.forEach((p) => {
        p.wobble = Math.sin(tick * p.wobbleSpeed + p.wobbleOffset) * 1.2;
        p.x += p.speedX + p.wobble;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 30) {
          Object.assign(p, makePetal(canvas.width, true));
        }

        drawPetal(ctx, p);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -5 }}
      aria-hidden
    />
  );
}
