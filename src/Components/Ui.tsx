"use client";

import type { CSSProperties } from "react";
import React, { useEffect, useId, useRef, useState } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number; // 1 is default speed, 2 is twice as fast, 0.5 is half speed
}

export function AuroraText({
  children,
  className = "",
  colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8", "#a855f7", "#2dd4bf"],
  speed = 1,
}: AuroraTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isReady, setIsReady] = useState(false);
  const maskId = useId();

  // Compute text styles
  useEffect(() => {
    if (containerRef.current) {
      const computedStyle = window.getComputedStyle(containerRef.current);
      setIsReady(true);
    }
  }, [className]);

  // Update dimensions when className (Tailwind breakpoints) change
  useEffect(() => {
    const updateDimensions = () => {
      if (textRef.current) {
        const bbox = textRef.current.getBBox();
        setDimensions({ width: bbox.width, height: bbox.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [children, className]); // ✅ React when class changes

  // Animate the gradient effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let time = 0;
    const baseSpeed = 0.008;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += baseSpeed * speed;

      colors.forEach((color, i) => {
        const x =
          canvas.width *
          (0.5 +
            Math.cos(time * 0.8 + i * 1.3) * 0.4 +
            Math.sin(time * 0.5 + i * 0.7) * 0.2);
        const y =
          canvas.height *
          (0.5 +
            Math.sin(time * 0.7 + i * 1.5) * 0.4 +
            Math.cos(time * 0.6 + i * 0.8) * 0.2);

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          canvas.width * 0.4,
        );

        gradient.addColorStop(0, `${color}99`);
        gradient.addColorStop(0.5, `${color}33`);
        gradient.addColorStop(1, "#00000000");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      requestAnimationFrame(animate);
    }
    animate();
  }, [dimensions, colors, speed]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block align-middle ${className}`}
      style={{
        width: dimensions.width || "auto",
        height: dimensions.height || "auto",
      }}
    >
      {/* Hidden text for SEO */}
      <span className="sr-only">{children}</span>

      {/* Placeholder before rendering */}
      <span
        style={{
          opacity: isReady ? 0 : 1,
          transition: "opacity 0.2s ease-in",
          position: isReady ? "absolute" : "relative",
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* SVG Clipping with Canvas Animation */}
      <div
        className="absolute inset-0"
        style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.2s ease-in" }}
        aria-hidden="true"
      >
        <svg
          width={dimensions.width}
          height={dimensions.height}
          className="absolute inset-0"
        >
          <defs>
            <clipPath id={maskId}>
              <text
                ref={textRef}
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                style={{ fontSize: "inherit" }} // ✅ Let Tailwind control font size
              >
                {children}
              </text>
            </clipPath>
          </defs>
        </svg>

        <canvas
          ref={canvasRef}
          style={{
            clipPath: `url(#${maskId})`,
            WebkitClipPath: `url(#${maskId})`,
          }}
          className="h-full w-full"
        />
      </div>
    </span>
  );
}
