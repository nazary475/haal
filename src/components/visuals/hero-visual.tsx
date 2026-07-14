"use client";

import { useEffect, useRef } from "react";

/**
 * HeroVisual — "From your data to intelligent action" data-flow diagram.
 *
 * Shows a clear, top-down pipeline that anyone can understand:
 *
 *   Data Sources (6 inputs, left side)
 *        ↓
 *   Intelligence Layer (center — the AI processing)
 *        ↓
 *   Outputs (4 results, right side)
 *
 * Animated signal pulses travel from each source → through the
 * intelligence layer → to the outputs. Pure SVG + canvas, no images.
 *
 * This replaces the technical transformer diagram with something
 * a non-technical CEO or founder can immediately understand:
 * "Your data goes in, intelligence comes out."
 */
export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(15, Math.floor((rect.width * rect.height) / 20000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        r: Math.random() * 1.0 + 0.3,
        a: Math.random() * 0.2 + 0.05,
      }));
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.a})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Layout coordinates within the 800×500 viewBox
  const W = 800;
  const H = 500;

  // Data sources (left column, stacked vertically)
  const sources = [
    { y: 70, label: "Research Papers", icon: "📄" },
    { y: 125, label: "Lab Data", icon: "🔬" },
    { y: 180, label: "Internal Docs", icon: "📋" },
    { y: 235, label: "Emails", icon: "✉️" },
    { y: 290, label: "Databases", icon: "🗄️" },
    { y: 345, label: "Business Reports", icon: "📊" },
  ];

  const sourceX = 40;
  const sourceWidth = 160;
  const sourceHeight = 36;

  // Intelligence layer (center)
  const intelX = 340;
  const intelY = 180;
  const intelWidth = 140;
  const intelHeight = 140;
  const intelCenterX = intelX + intelWidth / 2;
  const intelCenterY = intelY + intelHeight / 2;

  // Outputs (right column, stacked)
  const outputs = [
    { y: 110, label: "Discoveries", icon: "💡" },
    { y: 195, label: "Insights", icon: "🧠" },
    { y: 280, label: "Decisions", icon: "✅" },
    { y: 365, label: "Automation", icon: "⚙️" },
  ];

  const outputX = 620;
  const outputWidth = 150;
  const outputHeight = 36;

  return (
    <div className="relative h-full w-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Data flow diagram: your data sources flow through an intelligence layer to produce discoveries, insights, decisions, and automation."
      >
        <defs>
          <linearGradient id="hv-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(37,99,235,0)" />
            <stop offset="50%" stopColor="rgba(37,99,235,0.6)" />
            <stop offset="100%" stopColor="rgba(9,80,205,0)" />
          </linearGradient>
          <linearGradient id="hv-flow-out" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(9,80,205,0)" />
            <stop offset="50%" stopColor="rgba(37,99,235,0.6)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0)" />
          </linearGradient>
          <linearGradient id="hv-intel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0950CD" />
          </linearGradient>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(37,99,235,0.3)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0)" />
          </radialGradient>
        </defs>

        {/* ── Section labels ── */}
        <text x={sourceX + sourceWidth / 2} y={30} fill="#2D4A7A" fontSize="11" fontFamily="monospace" fontWeight="600" textAnchor="middle" letterSpacing="2">
          YOUR DATA
        </text>
        <text x={intelCenterX} y={30} fill="#2563EB" fontSize="11" fontFamily="monospace" fontWeight="700" textAnchor="middle" letterSpacing="2">
          NEURAL NETWORK
        </text>
        <text x={outputX + outputWidth / 2} y={30} fill="#2D4A7A" fontSize="11" fontFamily="monospace" fontWeight="600" textAnchor="middle" letterSpacing="2">
          RESULTS
        </text>

        {/* ── Connection lines: Sources → Intelligence ── */}
        {sources.map((s, i) => {
          const startX = sourceX + sourceWidth;
          const startY = s.y + sourceHeight / 2;
          const endX = intelX;
          const endY = intelCenterY;
          const midX = (startX + endX) / 2;
          return (
            <g key={`src-line-${i}`}>
              {/* Base line */}
              <path
                d={`M${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`}
                stroke="rgba(37,99,235,0.15)"
                strokeWidth="1.2"
                fill="none"
              />
              {/* Animated flow signal */}
              <path
                d={`M${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`}
                stroke="url(#hv-flow)"
                strokeWidth="1.5"
                fill="none"
                className="hl-flow"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            </g>
          );
        })}

        {/* ── Connection lines: Intelligence → Outputs ── */}
        {outputs.map((o, i) => {
          const startX = intelX + intelWidth;
          const startY = intelCenterY;
          const endX = outputX;
          const endY = o.y + outputHeight / 2;
          const midX = (startX + endX) / 2;
          return (
            <g key={`out-line-${i}`}>
              <path
                d={`M${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`}
                stroke="rgba(9,80,205,0.15)"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d={`M${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`}
                stroke="url(#hv-flow-out)"
                strokeWidth="1.5"
                fill="none"
                className="hl-flow"
                style={{ animationDelay: `${i * 0.4 + 0.8}s` }}
              />
            </g>
          );
        })}

        {/* ── Data Source cards (left) ── */}
        {sources.map((s, i) => (
          <g key={`src-${i}`}>
            <rect
              x={sourceX}
              y={s.y}
              width={sourceWidth}
              height={sourceHeight}
              rx="8"
              fill="#F0F5FF"
              stroke="#CBD9EF"
              strokeWidth="1"
            />
            <circle
              cx={sourceX + 18}
              cy={s.y + sourceHeight / 2}
              r="3"
              fill="#2563EB"
              className="hl-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <text
              x={sourceX + 32}
              y={s.y + sourceHeight / 2 + 4}
              fill="#0A1A3A"
              fontSize="13"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
            >
              {s.label}
            </text>
          </g>
        ))}

        {/* ── Neural Network (center) ── */}
        <circle cx={intelCenterX} cy={intelCenterY} r={90} fill="url(#hv-glow)" />

        {/* Container background */}
        <rect
          x={intelX}
          y={intelY}
          width={intelWidth}
          height={intelHeight}
          rx="16"
          fill="#F0F5FF"
          stroke="#2563EB"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Neural network layers — 4 columns of nodes with connections */}
        {(() => {
          const layers = [
            { x: intelX + 25, nodes: [195, 215, 235, 255] },  // input layer (4 nodes)
            { x: intelX + 58, nodes: [200, 220, 240] },         // hidden 1 (3 nodes)
            { x: intelX + 91, nodes: [200, 220, 240] },         // hidden 2 (3 nodes)
            { x: intelX + 120, nodes: [210, 230] },             // output (2 nodes)
          ];
          const nodeRadius = 5;
          const nodeColor = "#2563EB";
          const lineColor = "rgba(37,99,235,0.2)";

          // Generate connections between all adjacent layers
          const connections: React.ReactElement[] = [];
          for (let li = 0; li < layers.length - 1; li++) {
            const from = layers[li];
            const to = layers[li + 1];
            from.nodes.forEach((fy) => {
              to.nodes.forEach((ty) => {
                connections.push(
                  <line
                    key={`conn-${li}-${fy}-${ty}`}
                    x1={from.x}
                    y1={fy}
                    x2={to.x}
                    y2={ty}
                    stroke={lineColor}
                    strokeWidth="0.6"
                  />
                );
              });
            });
          }

          return (
            <>
              {connections}
              {layers.map((layer, li) =>
                layer.nodes.map((ny, ni) => (
                  <circle
                    key={`node-${li}-${ni}`}
                    cx={layer.x}
                    cy={ny}
                    r={nodeRadius}
                    fill={nodeColor}
                    className="hl-pulse"
                    style={{ animationDelay: `${(li + ni) * 0.2}s` }}
                  />
                ))
              )}
              {/* Animated flow signal through the network */}
              <path
                d={`M ${layers[0].x} ${layers[0].nodes[1]} L ${layers[1].x} ${layers[1].nodes[1]} L ${layers[2].x} ${layers[2].nodes[1]} L ${layers[3].x} ${layers[3].nodes[0]}`}
                stroke="url(#hv-flow)"
                strokeWidth="2"
                fill="none"
                className="hl-flow"
              />
            </>
          );
        })()}

        {/* Neural network label */}
        <text
          x={intelCenterX}
          y={intelY + intelHeight - 12}
          fill="#2563EB"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="1.5"
        >
          NEURAL NETWORK
        </text>

        {/* ── Output cards (right) ── */}
        {outputs.map((o, i) => (
          <g key={`out-${i}`}>
            <rect
              x={outputX}
              y={o.y}
              width={outputWidth}
              height={outputHeight}
              rx="8"
              fill="#F0F5FF"
              stroke="#CBD9EF"
              strokeWidth="1"
            />
            <circle
              cx={outputX + 18}
              cy={o.y + outputHeight / 2}
              r="3"
              fill="#0950CD"
              className="hl-pulse"
              style={{ animationDelay: `${i * 0.3 + 1}s` }}
            />
            <text
              x={outputX + 32}
              y={o.y + outputHeight / 2 + 4}
              fill="#0A1A3A"
              fontSize="13"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
            >
              {o.label}
            </text>
          </g>
        ))}

        {/* ── Arrow indicators ── */}
        {/* Arrow from sources to intelligence */}
        <g transform="translate(280, 250)">
          <path d="M0,0 L20,0" stroke="#2563EB" strokeWidth="2" fill="none" />
          <polygon points="20,0 14,-4 14,4" fill="#2563EB" />
        </g>
        {/* Arrow from intelligence to outputs */}
        <g transform="translate(500, 250)">
          <path d="M0,0 L20,0" stroke="#0950CD" strokeWidth="2" fill="none" />
          <polygon points="20,0 14,-4 14,4" fill="#0950CD" />
        </g>

        {/* ── Bottom labels ── */}
        <text x={sourceX + sourceWidth / 2} y={420} fill="#2D4A7A" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.6">
          data sources
        </text>
        <text x={intelCenterX} y={420} fill="#2563EB" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.6" fontWeight="600">
          AI processes everything
        </text>
        <text x={outputX + outputWidth / 2} y={420} fill="#2D4A7A" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.6">
          you get results
        </text>
      </svg>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30" />
    </div>
  );
}
