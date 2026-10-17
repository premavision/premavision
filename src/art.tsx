/* Hand-drawn SVG for the hero: scattered notes on the left (a process that
 * still lives in a head) get connected into one path, the path runs into a
 * phone and a watch, and the phone shows the steps. Lines draw once on load,
 * then a short thread of light (Ariadne's) keeps walking the path. Static
 * under prefers-reduced-motion. Decorative: hidden from screen readers. */

const SKY = '#00A8F0';
const ICE = '#90D8F0';
const SUN = '#FFC81E';

const PATH = 'M60 110 C 120 110, 110 200, 170 210 S 230 300, 290 290 S 330 220, 372 220';

export function HeroArt({ className = '' }: { className?: string }) {
  const nodes = [
    { x: 60, y: 110, d: 0.2 },
    { x: 170, y: 210, d: 0.5 },
    { x: 290, y: 290, d: 0.8 }
  ];
  const loose = [
    { x: 40, y: 220, r: 3 },
    { x: 95, y: 300, r: 2.5 },
    { x: 140, y: 60, r: 2.5 },
    { x: 225, y: 120, r: 3 },
    { x: 60, y: 380, r: 2 },
    { x: 200, y: 390, r: 2.5 }
  ];
  const steps = [
    { y: 170, w: 92, done: true },
    { y: 204, w: 76, done: true },
    { y: 238, w: 100, now: true },
    { y: 272, w: 70 },
    { y: 306, w: 84 }
  ];

  return (
    <svg viewBox="0 0 560 460" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pv-path" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={ICE} stopOpacity="0.2" />
          <stop offset="0.6" stopColor={SKY} />
          <stop offset="1" stopColor={SUN} />
        </linearGradient>
        <radialGradient id="pv-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={SKY} stopOpacity="0.35" />
          <stop offset="1" stopColor={SKY} stopOpacity="0" />
        </radialGradient>
        <pattern id="pv-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke={ICE} strokeOpacity="0.07" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="560" height="460" fill="url(#pv-grid)" />
      <circle cx="440" cy="240" r="200" fill="url(#pv-glow)" />

      {/* loose thoughts: dashed, unconnected */}
      {loose.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="none"
          stroke={ICE}
          strokeOpacity="0.45"
          strokeDasharray="2 2"
          className="node-pop"
          style={{ ['--delay' as string]: `${0.1 * i}s` }}
        />
      ))}

      {/* the path that connects them */}
      <path d={PATH} fill="none" stroke="url(#pv-path)" strokeWidth="2.5" strokeLinecap="round" className="draw" style={{ ['--len' as string]: 520 }} />
      <path d={PATH} fill="none" stroke={SUN} strokeWidth="3.5" strokeLinecap="round" className="thread" />

      {nodes.map((n, i) => (
        <g key={i} className="node-pop" style={{ ['--delay' as string]: `${0.6 + n.d}s` }}>
          <rect x={n.x - 9} y={n.y - 9} width="18" height="18" rx="3" transform={`rotate(45 ${n.x} ${n.y})`} fill="#0A1640" stroke={i === 2 ? SUN : SKY} strokeWidth="2" />
        </g>
      ))}

      {/* the phone */}
      <g className="node-pop" style={{ ['--delay' as string]: '1.2s' }}>
        <rect x="372" y="96" width="132" height="268" rx="26" fill="#0A1640" fillOpacity="0.85" stroke={ICE} strokeOpacity="0.7" strokeWidth="2" />
        <rect x="414" y="108" width="48" height="12" rx="6" fill={ICE} fillOpacity="0.25" />
        <text x="388" y="150" fill={ICE} fillOpacity="0.8" fontSize="11" fontFamily="Inter, system-ui, sans-serif" fontWeight="600">
          Step 3 of 5
        </text>
        {steps.map((s, i) => (
          <g key={i}>
            <rect
              x="388"
              y={s.y}
              width={s.w}
              height="22"
              rx="11"
              fill={s.now ? SUN : s.done ? SKY : '#ffffff'}
              fillOpacity={s.now ? 0.95 : s.done ? 0.35 : 0.08}
              className="node-pop"
              style={{ ['--delay' as string]: `${1.5 + i * 0.12}s` }}
            />
          </g>
        ))}
      </g>

      {/* the watch */}
      <g className="node-pop" style={{ ['--delay' as string]: '1.9s' }}>
        <rect x="516" y="190" width="34" height="14" rx="4" fill={ICE} fillOpacity="0.2" />
        <rect x="516" y="276" width="34" height="14" rx="4" fill={ICE} fillOpacity="0.2" />
        <rect x="508" y="200" width="50" height="80" rx="14" fill="#0A1640" stroke={ICE} strokeOpacity="0.7" strokeWidth="2" />
        <circle cx="533" cy="240" r="12" fill={SUN} fillOpacity="0.95" />
        <path d="M528 240l3.5 3.5 6-7" fill="none" stroke="#050B24" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* A small diamond lattice used as a section mark: the logo as architecture. */
export function DiamondMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false">
      <g fill="none" strokeWidth="5" strokeLinejoin="round">
        <path d="M60 8 112 60 60 112 8 60Z" stroke={SKY} />
        <path d="M60 26 94 60 60 94 26 60Z" stroke={SUN} />
        <path d="M60 44 76 60 60 76 44 60Z" stroke={ICE} />
      </g>
    </svg>
  );
}
