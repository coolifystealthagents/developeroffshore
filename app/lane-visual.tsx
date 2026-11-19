import type { ReactNode } from 'react';

const strokes = {
  blue: '#2f54ff',
  cyan: '#18bfe3',
  ink: '#0a1020',
  soft: '#dfe5ef',
  tint: '#eef3ff',
};

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-hidden="true" focusable="false">
      <rect width="320" height="220" fill="#f8faff" />
      {children}
    </svg>
  );
}

function Dot({ x, y, color = strokes.blue }: { x: number; y: number; color?: string }) {
  return <circle cx={x} cy={y} r="3" fill={color} />;
}

export function LaneVisual({ slug }: { slug: string }) {
  switch (slug) {
    case 'next-js-application-development':
      return (
        <Frame>
          <rect x="44" y="42" width="232" height="136" rx="7" fill="#fff" stroke={strokes.ink} strokeWidth="1.4" />
          <path d="M44 64h232" stroke={strokes.soft} />
          <circle cx="56" cy="53" r="2.4" fill={strokes.blue} />
          <circle cx="64" cy="53" r="2.4" fill={strokes.cyan} />
          <circle cx="72" cy="53" r="2.4" fill={strokes.soft} />
          <rect x="58" y="78" width="62" height="10" rx="3" fill={strokes.tint} stroke={strokes.blue} />
          <rect x="58" y="96" width="94" height="7" rx="2" fill={strokes.soft} />
          <rect x="58" y="109" width="76" height="7" rx="2" fill={strokes.soft} />
          <path d="M176 80v18m0 0 16 12m-16-12-16 12" stroke={strokes.blue} strokeWidth="1.3" fill="none" />
          <rect x="196" y="76" width="58" height="24" rx="4" fill="#fff" stroke={strokes.blue} />
          <rect x="196" y="104" width="58" height="24" rx="4" fill="#fff" stroke={strokes.cyan} />
          <rect x="196" y="132" width="58" height="24" rx="4" fill="#fff" stroke={strokes.soft} />
          <text x="216" y="91" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill={strokes.ink}>/app</text>
          <text x="216" y="119" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill={strokes.ink}>/docs</text>
          <text x="216" y="147" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">/api</text>
          <Dot x={160} y={98} />
        </Frame>
      );
    case 'react-frontend-development':
      return (
        <Frame>
          <rect x="48" y="48" width="92" height="58" rx="5" fill="#fff" stroke={strokes.blue} />
          <rect x="156" y="48" width="116" height="58" rx="5" fill="#fff" stroke={strokes.soft} />
          <rect x="48" y="120" width="92" height="56" rx="5" fill="#fff" stroke={strokes.soft} />
          <rect x="156" y="120" width="116" height="56" rx="5" fill="#fff" stroke={strokes.cyan} />
          <rect x="60" y="62" width="52" height="7" rx="2" fill={strokes.ink} />
          <rect x="60" y="76" width="66" height="5" rx="2" fill={strokes.soft} />
          <rect x="60" y="87" width="40" height="5" rx="2" fill={strokes.soft} />
          <rect x="168" y="62" width="58" height="7" rx="2" fill={strokes.soft} />
          <rect x="168" y="78" width="76" height="5" rx="2" fill={strokes.soft} />
          <rect x="60" y="134" width="56" height="6" rx="2" fill={strokes.soft} />
          <rect x="60" y="147" width="44" height="5" rx="2" fill={strokes.soft} />
          <rect x="168" y="134" width="66" height="8" rx="3" fill={strokes.blue} opacity=".2" stroke={strokes.blue} />
          <rect x="168" y="150" width="50" height="5" rx="2" fill={strokes.soft} />
          <path d="M214 90l22 22m0-22-22 22" stroke={strokes.cyan} strokeWidth="1.2" />
          <path d="M96 74l6-8 6 8" stroke={strokes.blue} strokeWidth="1.2" fill="none" transform="rotate(180 102 70)" />
        </Frame>
      );
    case 'node-js-api-development':
      return (
        <Frame>
          <rect x="42" y="44" width="70" height="32" rx="5" fill="#fff" stroke={strokes.ink} />
          <rect x="42" y="142" width="70" height="32" rx="5" fill="#fff" stroke={strokes.soft} />
          <rect x="206" y="70" width="72" height="80" rx="5" fill="#fff" stroke={strokes.ink} />
          <text x="55" y="64" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill={strokes.ink}>GET /v1</text>
          <text x="55" y="162" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8290a5">POST /v1</text>
          <text x="218" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill={strokes.ink}>service</text>
          <text x="218" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8290a5">validate</text>
          <text x="218" y="124" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8290a5">authorize</text>
          <path d="M112 60h48v70h46M112 158h48v-28h46" stroke={strokes.blue} strokeWidth="1.4" fill="none" />
          <circle cx="160" cy="60" r="4" fill={strokes.tint} stroke={strokes.blue} />
          <circle cx="160" cy="130" r="4" fill={strokes.tint} stroke={strokes.cyan} />
          <circle cx="160" cy="158" r="4" fill={strokes.tint} stroke={strokes.cyan} />
          <rect x="92" y="96" width="58" height="26" rx="4" fill="#fff" stroke={strokes.blue} />
          <text x="103" y="113" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill={strokes.blue}>JSON</text>
        </Frame>
      );
    case 'shopify-theme-development':
      return (
        <Frame>
          <rect x="48" y="52" width="224" height="116" rx="6" fill="#fff" stroke={strokes.ink} />
          <rect x="62" y="66" width="72" height="56" rx="3" fill={strokes.tint} stroke={strokes.blue} />
          <rect x="146" y="66" width="52" height="7" rx="2" fill={strokes.ink} />
          <rect x="146" y="80" width="88" height="5" rx="2" fill={strokes.soft} />
          <rect x="146" y="91" width="70" height="5" rx="2" fill={strokes.soft} />
          <rect x="146" y="108" width="58" height="16" rx="4" fill={strokes.blue} />
          <path d="M256 56l10 5-3 13-12-1z" fill="#fff" stroke={strokes.cyan} strokeWidth="1.2" />
          <path d="M256 72l6 6m-6-6-5 10" stroke={strokes.cyan} strokeWidth="1.2" />
          <rect x="62" y="132" width="46" height="22" rx="3" fill="#fff" stroke={strokes.soft} />
          <rect x="114" y="132" width="46" height="22" rx="3" fill="#fff" stroke={strokes.soft} />
          <rect x="166" y="132" width="46" height="22" rx="3" fill="#fff" stroke={strokes.soft} />
          <text x="72" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">card</text>
          <text x="124" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">grid</text>
          <text x="176" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">cart</text>
          <Dot x={98} y={176} color={strokes.cyan} />
        </Frame>
      );
    case 'wordpress-engineering':
      return (
        <Frame>
          <rect x="48" y="40" width="224" height="34" rx="4" fill="#fff" stroke={strokes.ink} />
          <rect x="48" y="88" width="108" height="88" rx="4" fill="#fff" stroke={strokes.blue} />
          <rect x="168" y="88" width="104" height="40" rx="4" fill="#fff" stroke={strokes.soft} />
          <rect x="168" y="136" width="104" height="40" rx="4" fill="#fff" stroke={strokes.soft} />
          <path d="M62 58h34M104 58h24M152 58h30" stroke={strokes.soft} strokeWidth="2" />
          <rect x="62" y="104" width="78" height="8" rx="2" fill={strokes.ink} />
          <rect x="62" y="120" width="64" height="5" rx="2" fill={strokes.soft} />
          <rect x="62" y="132" width="72" height="5" rx="2" fill={strokes.soft} />
          <rect x="62" y="150" width="50" height="14" rx="3" fill={strokes.tint} stroke={strokes.blue} />
          <rect x="180" y="100" width="54" height="6" rx="2" fill={strokes.soft} />
          <rect x="180" y="112" width="42" height="5" rx="2" fill={strokes.soft} />
          <rect x="180" y="148" width="64" height="6" rx="2" fill={strokes.soft} />
          <rect x="180" y="160" width="50" height="5" rx="2" fill={strokes.soft} />
        </Frame>
      );
    case 'qa-automation-engineering':
      return (
        <Frame>
          <rect x="48" y="46" width="224" height="128" rx="6" fill="#fff" stroke={strokes.ink} />
          <path d="M48 74h224" stroke={strokes.soft} />
          <text x="62" y="64" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill={strokes.ink}>test run · 42 checks</text>
          {[0, 1, 2, 3].map((row) => (
            <g key={row}>
              <rect x="62" y={88 + row * 19} width="12" height="12" rx="3" fill={row < 3 ? '#e7f8f1' : '#fff'} stroke={row < 3 ? '#12b981' : strokes.soft} />
              {row < 3 ? <path d={`M65 ${94 + row * 19}l3 3 5-6`} stroke="#0b9c6c" strokeWidth="1.4" fill="none" /> : null}
              <rect x="84" y={92 + row * 19} width={100 - row * 8} height="5" rx="2" fill={strokes.soft} />
              <rect x="220" y={92 + row * 19} width="34" height="5" rx="2" fill={row < 3 ? '#c9f2e2' : strokes.soft} />
            </g>
          ))}
          <rect x="62" y="164" width="196" height="1" fill={strokes.soft} />
          <text x="62" y="178" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">3 checks pending review</text>
          <Dot x={246} y={60} color={strokes.cyan} />
        </Frame>
      );
    case 'devops-release-support':
      return (
        <Frame>
          <path d="M52 110h52m24 0h40m24 0h56" stroke={strokes.blue} strokeWidth="1.4" />
          {[78, 154, 218].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="110" r="17" fill="#fff" stroke={i === 1 ? strokes.cyan : strokes.blue} strokeWidth="1.4" />
              <text x={x - 10} y="114" fontFamily="IBM Plex Mono, monospace" fontSize="6.5" fill={strokes.ink}>{['build', 'test', 'ship'][i]}</text>
            </g>
          ))}
          <rect x="54" y="54" width="76" height="28" rx="4" fill="#fff" stroke={strokes.soft} />
          <rect x="54" y="148" width="76" height="28" rx="4" fill="#fff" stroke={strokes.soft} />
          <text x="65" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">commit</text>
          <text x="65" y="166" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">rollback</text>
          <path d="M130 68h44v25M174 166h-44v-22" stroke={strokes.soft} strokeDasharray="3 3" />
          <Dot x={286} y={110} color="#12b981" />
          <Dot x={50} y={110} color={strokes.cyan} />
        </Frame>
      );
    case 'data-pipeline-development':
      return (
        <Frame>
          <rect x="46" y="74" width="58" height="72" rx="5" fill="#fff" stroke={strokes.ink} />
          <path d="M46 90h58M46 106h58" stroke={strokes.soft} />
          <rect x="128" y="58" width="70" height="104" rx="5" fill="#fff" stroke={strokes.blue} />
          <rect x="222" y="74" width="56" height="72" rx="5" fill="#fff" stroke={strokes.cyan} />
          <path d="M104 110h24M198 110h24" stroke={strokes.blue} strokeWidth="1.4" />
          <path d="M118 105l6 5-6 5M212 105l6 5-6 5" stroke={strokes.blue} strokeWidth="1.4" fill="none" />
          <text x="58" y="122" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">source</text>
          <text x="140" y="82" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill={strokes.ink}>validate</text>
          <rect x="140" y="92" width="46" height="5" rx="2" fill={strokes.soft} />
          <rect x="140" y="103" width="34" height="5" rx="2" fill={strokes.soft} />
          <rect x="140" y="122" width="42" height="16" rx="3" fill={strokes.tint} stroke={strokes.blue} />
          <text x="234" y="122" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">warehouse</text>
          <circle cx="170" cy="146" r="3" fill="#12b981" />
        </Frame>
      );
    case 'mobile-app-development':
      return (
        <Frame>
          <rect x="86" y="34" width="76" height="152" rx="12" fill="#fff" stroke={strokes.ink} strokeWidth="1.5" />
          <rect x="166" y="52" width="70" height="134" rx="11" fill="#fff" stroke={strokes.blue} />
          <rect x="94" y="50" width="60" height="120" rx="5" fill="#f8faff" stroke={strokes.soft} />
          <rect x="174" y="66" width="54" height="102" rx="4" fill="#f8faff" stroke={strokes.soft} />
          <rect x="102" y="60" width="44" height="7" rx="2" fill={strokes.ink} />
          <rect x="102" y="74" width="30" height="5" rx="2" fill={strokes.soft} />
          <rect x="102" y="88" width="44" height="30" rx="4" fill={strokes.tint} stroke={strokes.blue} />
          <rect x="182" y="78" width="38" height="6" rx="2" fill={strokes.soft} />
          <rect x="182" y="92" width="30" height="5" rx="2" fill={strokes.soft} />
          <rect x="182" y="110" width="38" height="40" rx="4" fill={strokes.tint} stroke={strokes.cyan} />
          <circle cx="124" cy="168" r="3.5" fill={strokes.ink} />
          <circle cx="201" cy="168" r="3" fill={strokes.blue} />
          <path d="M162 62l4 4m0-4-4 4" stroke={strokes.cyan} strokeWidth="1.1" />
        </Frame>
      );
    case 'legacy-application-maintenance':
      return (
        <Frame>
          <path d="M64 66l86-18 86 18-86 18z" fill="#fff" stroke={strokes.ink} />
          <path d="M64 66v64l86 22V84z" fill="#f8faff" stroke={strokes.soft} />
          <path d="M236 66v64l-86 22V84z" fill="#fff" stroke={strokes.soft} />
          <path d="M78 84v38M96 90v38M114 96v38" stroke={strokes.soft} />
          <path d="M148 110v28l50-10V98z" fill={strokes.tint} stroke={strokes.blue} />
          <path d="M160 118l10 10m-10 0 10-10" stroke={strokes.blue} strokeWidth="1.3" />
          <circle cx="232" cy="60" r="15" fill="#fff" stroke={strokes.cyan} />
          <path d="M226 60h12M232 54v12" stroke={strokes.cyan} strokeWidth="1.4" />
          <text x="72" y="172" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">module a</text>
          <text x="150" y="172" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill={strokes.blue}>bounded fix</text>
          <text x="244" y="172" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8290a5">tests</text>
        </Frame>
      );
    default:
      return (
        <Frame>
          <rect x="58" y="52" width="204" height="116" rx="7" fill="#fff" stroke={strokes.ink} />
          <path d="M90 140l28-32 24 20 30-44 34 34 20-18" stroke={strokes.blue} strokeWidth="1.6" fill="none" />
          <circle cx="118" cy="108" r="4" fill={strokes.cyan} />
          <circle cx="172" cy="84" r="4" fill={strokes.cyan} />
          <circle cx="202" cy="130" r="4" fill={strokes.cyan} />
        </Frame>
      );
  }
}
