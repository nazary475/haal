"use client";

/**
 * ModelSchematic — a tiny inline network diagram showing a small,
 * purpose-built model architecture: input nodes → dense layers → output,
 * beside a compact server icon.
 *
 * Uses the website's blue palette: Neon Cyan #2563EB, Psychedelic Aqua #0950CD,
 * Neon Aqua Blue #0950CD.
 */
export function ModelSchematic({ className = "" }: { className?: string }) {
  return (
    <svg
      width="120"
      height="48"
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Miniature neural network schematic: input layer, two dense layers, output, beside a server icon."
    >
      <defs>
        <linearGradient id="ms-node" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0950CD" />
        </linearGradient>
        <linearGradient id="ms-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(37,99,235,0)" />
          <stop offset="50%" stopColor="rgba(37,99,235,0.4)" />
          <stop offset="100%" stopColor="rgba(9,80,205,0)" />
        </linearGradient>
      </defs>

      {/* Connections: Input → Dense 1 */}
      {[16, 24, 32].map((y1) =>
        [10, 18, 26, 34].map((y2) => (
          <line key={`c1-${y1}-${y2}`} x1="8" y1={y1} x2="34" y2={y2} stroke="rgba(37,99,235,0.12)" strokeWidth="0.4" />
        ))
      )}
      {/* Connections: Dense 1 → Dense 2 */}
      {[10, 18, 26, 34].map((y1) =>
        [10, 18, 26, 34].map((y2) => (
          <line key={`c2-${y1}-${y2}`} x1="34" y1={y1} x2="60" y2={y2} stroke="rgba(37,99,235,0.10)" strokeWidth="0.4" />
        ))
      )}
      {/* Connections: Dense 2 → Output */}
      {[10, 18, 26, 34].map((y1) =>
        [18, 30].map((y2) => (
          <line key={`c3-${y1}-${y2}`} x1="60" y1={y1} x2="86" y2={y2} stroke="rgba(9,80,205,0.15)" strokeWidth="0.4" />
        ))
      )}

      {/* Animated data flow */}
      <path d="M8,24 L34,24 L60,24 L86,24" stroke="url(#ms-flow)" strokeWidth="1" fill="none" className="hl-flow" />

      {/* Input nodes */}
      {[16, 24, 32].map((y, i) => (
        <circle key={`in-${i}`} cx="8" cy={y} r="2" fill="url(#ms-node)" opacity="0.7" />
      ))}
      {/* Dense 1 nodes */}
      {[10, 18, 26, 34].map((y, i) => (
        <circle key={`d1-${i}`} cx="34" cy={y} r="2" fill="url(#ms-node)" className="hl-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      {/* Dense 2 nodes */}
      {[10, 18, 26, 34].map((y, i) => (
        <circle key={`d2-${i}`} cx="60" cy={y} r="2" fill="url(#ms-node)" className="hl-pulse" style={{ animationDelay: `${i * 0.3 + 0.5}s` }} />
      ))}
      {/* Output nodes */}
      {[18, 30].map((y, i) => (
        <circle key={`out-${i}`} cx="86" cy={y} r="2.5" fill="#0950CD" className="hl-pulse" style={{ animationDelay: `${i * 0.4 + 1}s` }} />
      ))}

      {/* Arrow to server */}
      <line x1="90" y1="24" x2="98" y2="24" stroke="rgba(74,111,165,0.3)" strokeWidth="0.6" />
      <polygon points="98,24 96,22 96,26" fill="rgba(74,111,165,0.4)" />

      {/* Server icon */}
      <g transform="translate(100, 14)">
        <rect x="0" y="0" width="18" height="20" rx="2" fill="none" stroke="rgba(74,111,165,0.4)" strokeWidth="0.8" />
        <line x1="3" y1="5" x2="15" y2="5" stroke="rgba(74,111,165,0.25)" strokeWidth="0.5" />
        <line x1="3" y1="10" x2="15" y2="10" stroke="rgba(74,111,165,0.25)" strokeWidth="0.5" />
        <line x1="3" y1="15" x2="15" y2="15" stroke="rgba(74,111,165,0.25)" strokeWidth="0.5" />
        <circle cx="5" cy="7.5" r="0.8" fill="#2563EB" className="hl-pulse" />
        <circle cx="5" cy="12.5" r="0.8" fill="#0950CD" opacity="0.5" />
      </g>

      {/* Layer labels */}
      <text x="8" y="46" fill="rgba(74,111,165,0.35)" fontSize="4" fontFamily="monospace" textAnchor="middle">IN</text>
      <text x="47" y="46" fill="rgba(74,111,165,0.35)" fontSize="4" fontFamily="monospace" textAnchor="middle">DENSE</text>
      <text x="86" y="46" fill="rgba(74,111,165,0.35)" fontSize="4" fontFamily="monospace" textAnchor="middle">OUT</text>
    </svg>
  );
}
