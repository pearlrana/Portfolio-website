/**
 * PearlIllustration.tsx
 *
 * Premium Editorial Vector Illustration of Pearl Rana — POSE SYSTEM
 * ────────────────────────────────────────────────────────────────
 *   <PearlIllustration pose="hero" />      — cover: open, welcoming
 *   <PearlIllustration pose="coding" />    — projects: laptop, typing
 *   <PearlIllustration pose="thinking" />  — skills: hand at chin, doodles
 *   <PearlIllustration pose="resume" />    — resume: holding a document
 *   <PearlIllustration pose="waving" />    — contact: waving + coffee
 *
 * Face, hair, and outfit silhouette are drawn ONCE (shared layers) so
 * likeness stays identical across every page. Only a small "pose overlay"
 * — arms, hands, props — swaps per pose, layered on top.
 */

import { cn } from "@/lib/utils";

export type PearlPose = "hero" | "coding" | "thinking" | "resume" | "waving";

interface PearlIllustrationProps {
  pose?: PearlPose;
  width?: number;
  height?: number;
  className?: string;
}

export default function PearlIllustration({
  pose = "hero",
  width = 240,
  height = 340,
  className,
}: PearlIllustrationProps) {
  return (
    <svg
      viewBox="0 0 240 340"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Editorial illustration of Pearl Rana, ${poseLabels[pose]}`}
      role="img"
      className={cn("select-none overflow-visible", className)}
      style={{ filter: "drop-shadow(0 6px 20px rgba(37,32,28,0.08))" }}
    >
      <SharedDefs />
      <BackHair />
      <TorsoAndGarment />
      <Head />
      <ForegroundHairCurtains />
      <PoseOverlay pose={pose} />
      <LooseHairStrands />
      <SketchImperfections />
    </svg>
  );
}

const poseLabels: Record<PearlPose, string> = {
  hero: "welcoming",
  coding: "typing on a laptop",
  thinking: "thinking, hand at chin",
  resume: "reading a document",
  waving: "waving, holding coffee",
};

function SharedDefs() {
  return (
    <defs>
      <filter id="editorial-sketch" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <linearGradient id="skin-tone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9E0CE" />
        <stop offset="100%" stopColor="#E3B796" />
      </linearGradient>
      <linearGradient id="hair-depth" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E1715" />
        <stop offset="70%" stopColor="#120B0A" />
        <stop offset="100%" stopColor="#080403" />
      </linearGradient>
      <linearGradient id="apparel-base" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E1F1B" />
        <stop offset="50%" stopColor="#231613" />
        <stop offset="100%" stopColor="#1C100E" />
      </linearGradient>
    </defs>
  );
}

function BackHair() {
  return (
    <path
      d="M 120 30 C 165 26, 215 42, 222 95 C 228 140, 220 195, 218 250 C 216 290, 222 315, 225 340 L 15 340 C 18 315, 24 290, 22 250 C 20 195, 12 140, 18 95 C 25 42, 75 26, 120 30 Z"
      fill="url(#hair-depth)"
      filter="url(#editorial-sketch)"
    />
  );
}

function TorsoAndGarment() {
  return (
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0 0; 0 -1.8; 0 0"
        dur="5.5s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
      />
      <path d="M 104 175 Q 102 215, 96 238 L 144 238 Q 138 215, 136 175 Z" fill="url(#skin-tone)" stroke="#BA9073" strokeWidth="0.6" />
      <path d="M 104 178 Q 120 192, 136 178 Q 120 182, 104 178 Z" fill="#9C7358" opacity="0.25" />
      <path d="M 96 238 C 102 255, 110 270, 120 280 C 130 270, 138 255, 144 238 Z" fill="url(#skin-tone)" />
      <path
        d="M 96 238 C 72 248, 42 268, 25 295 L 12 340 L 228 340 L 215 295 C 198 268, 168 248, 144 238 C 140 258, 132 282, 120 292 C 108 282, 100 258, 96 238 Z"
        fill="url(#apparel-base)"
        stroke="#120B0A"
        strokeWidth="0.8"
      />
      <path d="M 96 238 C 80 250, 65 272, 52 300" stroke="#E3B096" strokeWidth="0.7" fill="none" opacity="0.3" strokeDasharray="3 2" />
      <path d="M 82 245 C 68 265, 52 290, 40 320" stroke="#D19275" strokeWidth="0.6" fill="none" opacity="0.25" />
      <path d="M 55 270 C 45 285, 30 310, 25 340" stroke="#7A5243" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M 144 238 C 160 250, 175 272, 188 300" stroke="#E3B096" strokeWidth="0.7" fill="none" opacity="0.3" strokeDasharray="3 2" />
      <path d="M 158 245 C 172 265, 188 290, 200 320" stroke="#D19275" strokeWidth="0.6" fill="none" opacity="0.25" />
      <path d="M 185 270 C 195 285, 210 310, 215 340" stroke="#7A5243" strokeWidth="0.8" fill="none" opacity="0.4" />
      <circle cx="68" cy="278" r="3" fill="#D19275" opacity="0.3" />
      <circle cx="76" cy="310" r="4" fill="#C4806A" opacity="0.2" />
      <circle cx="172" cy="278" r="3" fill="#D19275" opacity="0.3" />
      <circle cx="164" cy="310" r="4" fill="#C4806A" opacity="0.2" />
      <circle cx="112" cy="325" r="3.5" fill="#C4806A" opacity="0.25" />
      <circle cx="130" cy="315" r="2.5" fill="#D19275" opacity="0.3" />
    </g>
  );
}

function Head() {
  return (
    <g id="head-group">
      <path
        d="M 120 54 C 166 54, 184 78, 181 114 C 178 146, 170 168, 154 182 C 142 192, 132 195, 120 195 C 108 195, 98 192, 86 182 C 70 168, 62 146, 59 114 C 56 78, 74 54, 120 54 Z"
        fill="url(#skin-tone)"
        stroke="#BA9073"
        strokeWidth="0.8"
        filter="url(#editorial-sketch)"
      />
      <ellipse cx="80" cy="142" rx="15" ry="8" fill="#D17D6E" opacity="0.15" />
      <ellipse cx="160" cy="142" rx="15" ry="8" fill="#D17D6E" opacity="0.15" />
      <path d="M 80 97 Q 94 90, 110 94 Q 96 92, 82 100 Z" fill="#1A1210" opacity="0.9" />
      <path d="M 160 97 Q 146 90, 130 94 Q 144 92, 158 100 Z" fill="#1A1210" opacity="0.9" />

      <g id="left-eye">
        <path d="M 82 112 Q 95 102, 110 112 Q 95 122, 82 112 Z" fill="#FFFFFF" opacity="0.95" />
        <circle cx="96" cy="112" r="7.5" fill="#4B3126" />
        <circle cx="96" cy="112" r="4" fill="#120A07" />
        <circle cx="98.5" cy="109.5" r="2" fill="#FFFFFF" />
        <path d="M 81 111 Q 95 101, 111 111" stroke="#120A07" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 84 115 Q 95 120, 107 115" stroke="#120A07" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.5" />
        <ellipse cx="96.5" cy="105.5" rx="15" ry="0" fill="#E3B796">
          <animate attributeName="ry" values="0; 0; 0; 10.5; 0; 0" keyTimes="0; 0.84; 0.88; 0.92; 0.96; 1" dur="4.8s" repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0.25 0 0.75 1; 0.25 0 0.75 1; 0 0 1 1" />
        </ellipse>
      </g>

      <g id="right-eye">
        <path d="M 130 112 Q 145 102, 158 112 Q 145 122, 130 112 Z" fill="#FFFFFF" opacity="0.95" />
        <circle cx="144" cy="112" r="7.5" fill="#4B3126" />
        <circle cx="144" cy="112" r="4" fill="#120A07" />
        <circle cx="146.5" cy="109.5" r="2" fill="#FFFFFF" />
        <path d="M 129 111 Q 145 101, 159 111" stroke="#120A07" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 133 115 Q 145 120, 156 115" stroke="#120A07" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.5" />
        <ellipse cx="144" cy="105.5" rx="15" ry="0" fill="#E3B796">
          <animate attributeName="ry" values="0; 0; 0; 10.5; 0; 0" keyTimes="0; 0.84; 0.88; 0.92; 0.96; 1" dur="4.8s" begin="0.06s" repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0.25 0 0.75 1; 0.25 0 0.75 1; 0 0 1 1" />
        </ellipse>
      </g>

      <path d="M 118 112 Q 115 138, 120 146 Q 124 150, 128 146" stroke="#A87B5F" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.65" />
      <path d="M 112 146 Q 116 149, 120 147" stroke="#A87B5F" strokeWidth="0.7" fill="none" opacity="0.4" />
      <path d="M 112 146 Q 107 148, 109 153 Q 112 156, 116 153" fill="none" stroke="#D6DBDC" strokeWidth="1.3" strokeLinecap="round" opacity="0.95" />
      <path d="M 106 164 Q 114 161, 120 163 Q 126 161, 134 164" stroke="#A65B4C" strokeWidth="1.0" fill="none" strokeLinecap="round" />
      <path d="M 105 166 Q 120 176, 135 166 Q 127 172, 120 172 Q 113 172, 105 166 Z" fill="#BD6A59" stroke="#A65B4C" strokeWidth="0.5" opacity="0.9" />

      <path
        d="M 120 54 C 100 50, 80 58, 70 70 C 85 64, 105 62, 120 63 C 135 62, 155 64, 170 70 C 160 58, 140 50, 120 54 Z"
        fill="#120B0A"
      />
      <path d="M 120 54 C 119 62, 118.5 72, 118.5 78" stroke="#080403" strokeWidth="0.8" fill="none" opacity="0.6" />
    </g>
  );
}

function ForegroundHairCurtains() {
  return (
    <>
      <path
        d="M 72 70 C 58 92, 52 118, 50 145 C 48 178, 51 210, 56 245 C 58 275, 56 305, 54 340 L 15 340 C 18 290, 24 245, 22 195 C 19 148, 22 105, 38 76 C 48 58, 58 64, 72 70 Z"
        fill="#120B0A"
        filter="url(#editorial-sketch)"
      />
      <path
        d="M 168 70 C 182 92, 188 118, 190 145 C 192 178, 189 210, 184 245 C 182 275, 184 305, 186 340 L 225 340 C 222 290, 216 245, 218 195 C 221 148, 218 105, 202 76 C 192 58, 182 64, 168 70 Z"
        fill="#120B0A"
        filter="url(#editorial-sketch)"
      />
    </>
  );
}

function LooseHairStrands() {
  return (
    <>
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 74 72; 1.8 74 72; -0.8 74 72; 0.4 74 72; 0 74 72" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.44 0 0.56 1; 0.44 0 0.56 1; 0.44 0 0.56 1; 0.44 0 0.56 1" />
        <path d="M 74 72 C 66 105, 60 145, 63 185 C 65 215, 68 250, 69 285" stroke="#1C1311" strokeWidth="2.0" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M 71 80 C 64 110, 58 150, 60 190" stroke="#2E201D" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.4" />
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 166 72; -1.4 166 72; 0.6 166 72; -0.3 166 72; 0 166 72" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.44 0 0.56 1; 0.44 0 0.56 1; 0.44 0 0.56 1; 0.44 0 0.56 1" />
        <path d="M 166 72 C 174 105, 180 145, 177 185 C 175 215, 171 250, 169 285" stroke="#1C1311" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.8" />
      </g>
    </>
  );
}

function SketchImperfections() {
  return (
    <>
      <path d="M 120 54 C 145 68, 172 92, 184 125 C 192 150, 191 185, 186 215" stroke="#120B0A" strokeWidth="0.4" fill="none" opacity="0.15" />
      <path d="M 120 54 C 95 68, 68 92, 56 125 C 48 150, 49 185, 54 215" stroke="#120B0A" strokeWidth="0.4" fill="none" opacity="0.15" />
    </>
  );
}

function PoseOverlay({ pose }: { pose: PearlPose }) {
  switch (pose) {
    case "coding":
      return <CodingOverlay />;
    case "thinking":
      return <ThinkingOverlay />;
    case "resume":
      return <ResumeOverlay />;
    case "waving":
      return <WavingOverlay />;
    case "hero":
    default:
      return <HeroOverlay />;
  }
}

function HeroOverlay() {
  return <path d="M 96 244 C 90 252, 88 262, 90 270" stroke="#BA9073" strokeWidth="0.6" fill="none" opacity="0.3" strokeLinecap="round" />;
}

function CodingOverlay() {
  return (
    <g>
      <path d="M 82 258 L 158 258 L 168 274 L 72 274 Z" fill="#2A211C" stroke="#120B0A" strokeWidth="0.7" />
      <path d="M 88 258 L 152 258 L 148 218 L 92 218 Z" fill="#241C18" stroke="#120B0A" strokeWidth="0.8" />
      <path d="M 93 254 L 147 254 L 144 223 L 96 223 Z" fill="var(--color-blush)" opacity="0.22" />
      <path d="M 98 232 L 132 232 M 98 238 L 138 238 M 98 244 L 126 244" stroke="var(--color-paper)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <path d="M 96 240 C 90 250, 88 258, 96 264 C 102 268, 108 267, 112 263" fill="url(#skin-tone)" stroke="#BA9073" strokeWidth="0.6" />
      <path d="M 144 240 C 150 250, 152 258, 144 264 C 138 268, 132 267, 128 263" fill="url(#skin-tone)" stroke="#BA9073" strokeWidth="0.6" />
      <path d="M 93 246 Q 98 250, 103 247" stroke="#231613" strokeWidth="3.2" strokeLinecap="round" opacity="0.85" />
      <path d="M 147 246 Q 142 250, 137 247" stroke="#231613" strokeWidth="3.2" strokeLinecap="round" opacity="0.85" />
    </g>
  );
}

function ThinkingOverlay() {
  return null;
}

function ResumeOverlay() {
  return (
    <g>
      <path d="M 94 240 C 86 248, 82 256, 86 264" fill="url(#skin-tone)" stroke="#BA9073" strokeWidth="0.6" />
      <path d="M 146 240 C 154 248, 158 256, 154 264" fill="url(#skin-tone)" stroke="#BA9073" strokeWidth="0.6" />
      <path d="M 90 244 Q 95 248, 100 245" stroke="#231613" strokeWidth="3.2" strokeLinecap="round" opacity="0.85" />
      <path d="M 150 244 Q 145 248, 140 245" stroke="#231613" strokeWidth="3.2" strokeLinecap="round" opacity="0.85" />
      <g transform="rotate(-2 120 244)">
        <rect x="90" y="212" width="60" height="76" rx="2" fill="var(--color-paper)" stroke="#BA9073" strokeWidth="0.8" />
        <rect x="99" y="224" width="30" height="4" rx="1" fill="var(--color-taupe)" opacity="0.7" />
        <path d="M 99 236 L 141 236 M 99 244 L 141 244 M 99 252 L 133 252 M 99 262 L 141 262 M 99 270 L 125 270" stroke="var(--color-ink-soft)" strokeWidth="1" opacity="0.35" strokeLinecap="round" />
      </g>
    </g>
  );
}

function WavingOverlay() {
  return (
    <g>
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-6 158 232; 10 158 232; -6 158 232" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
        <path d="M 148 236 C 158 218, 168 198, 172 176" fill="none" stroke="url(#skin-tone)" strokeWidth="13" strokeLinecap="round" />
        <path d="M 152 226 Q 158 231, 163 227" stroke="#231613" strokeWidth="3.4" strokeLinecap="round" opacity="0.85" />
        <ellipse cx="174" cy="171" rx="7.5" ry="8.5" fill="url(#skin-tone)" stroke="#BA9073" strokeWidth="0.6" />
        <path d="M 169 165 L 168 158 M 173 163 L 173 155 M 177 164 L 178 156 M 180 167 L 183 160" stroke="#BA9073" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      </g>
      <g opacity="0.4" stroke="var(--color-blush)" fill="none" strokeWidth="1.4" strokeLinecap="round">
        <path d="M 188 160 Q 194 168, 188 178" />
        <path d="M 195 156 Q 203 168, 195 182" />
      </g>
      <path d="M 94 240 C 88 248, 88 256, 94 262" fill="url(#skin-tone)" stroke="#BA9073" strokeWidth="0.6" />
      <path d="M 90 244 Q 95 248, 100 245" stroke="#231613" strokeWidth="3.2" strokeLinecap="round" opacity="0.85" />
      <g transform="rotate(-4 90 268)">
        <path d="M 78 258 L 82 278 Q 90 283, 98 278 L 102 258 Z" fill="var(--color-paper-alt)" stroke="#BA9073" strokeWidth="0.8" />
        <path d="M 100 262 Q 109 262, 108 270 Q 107 276, 99 274" fill="none" stroke="#BA9073" strokeWidth="1.4" />
        <path d="M 85 254 Q 82 248, 86 244 Q 90 240, 87 234" stroke="var(--color-taupe)" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round" />
      </g>
    </g>
  );
}
