/**
 * Textured all-grass field for the inside of the battle window.
 *
 * Layered from back to front:
 *   1. Radial green gradient — brighter in the middle (sun pool), darker at edges
 *   2. Diagonal mown-stripe pattern — like a freshly cut lawn
 *   3. SVG turbulence noise — breaks up the flatness, gives painterly feel
 *   4. Scattered grass-blade clusters — short and tall
 *   5. Random dirt/dark patches — small spots so the field isn't uniformly green
 *   6. A few wildflowers for color pops
 */
export function BattleGrass() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 1. Base radial gradient — light pool centered slightly above middle */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #98d96b 0%, #74c14a 30%, #5aa837 55%, #46892a 80%, #36711f 100%)",
        }}
      />

      {/* 2. Mown stripes — repeating diagonal lines, very subtle */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(102deg," +
            " rgba(255,255,255,0.07) 0 8px," +
            " rgba(0,0,0,0.06) 8px 18px)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* 3. Painterly noise — the secret ingredient that kills the "vector" feel */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.45, mixBlendMode: "overlay" }}
      >
        <filter id="grass-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.4"
            numOctaves="2"
            seed="9"
          />
          <feColorMatrix
            values="0 0 0 0 0.2
                    0 0 0 0 0.55
                    0 0 0 0 0.18
                    0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grass-noise)" />
      </svg>

      {/* 4. Tufted grass blades — scattered, varying sizes */}
      <BladeRow y={18} blades={blades18} />
      <BladeRow y={32} blades={blades32} />
      <BladeRow y={48} blades={blades48} />
      <BladeRow y={62} blades={blades62} />
      <BladeRow y={78} blades={blades78} />
      <BladeRow y={92} blades={blades92} />

      {/* 5. Dirt patches — small darker spots so the green has variety */}
      <DirtSpot top="22%" left="8%"  size={26} />
      <DirtSpot top="58%" left="14%" size={18} />
      <DirtSpot top="74%" left="46%" size={32} />
      <DirtSpot top="36%" left="68%" size={22} />
      <DirtSpot top="82%" left="78%" size={28} />

      {/* 6. Wildflowers for color accents */}
      <Petal top="28%" left="22%" color="#ffd8e6" />
      <Petal top="68%" left="36%" color="#fff" />
      <Petal top="42%" left="58%" color="#ffe07a" />
      <Petal top="82%" left="20%" color="#ffd8e6" />
      <Petal top="20%" left="84%" color="#fff" />

      {/* Top darker shade — simulates light falling off near the back of the field */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "30%",
          background:
            "linear-gradient(180deg, rgba(40,80,30,0.22) 0%, transparent 100%)",
        }}
      />

      {/* Bottom slightly lighter — foreground sunlight */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "20%",
          background:
            "linear-gradient(0deg, rgba(255,255,200,0.08) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

/** A row of grass blade tufts at a given vertical position (% from top). */
function BladeRow({
  y,
  blades,
}: {
  y: number;
  blades: { x: number; scale: number; tilt: number }[];
}) {
  return (
    <>
      {blades.map((b, i) => (
        <svg
          key={i}
          className="absolute"
          style={{
            top: `${y}%`,
            left: `${b.x}%`,
            width: 22 * b.scale,
            height: 14 * b.scale,
            transform: `rotate(${b.tilt}deg)`,
          }}
          viewBox="0 0 22 14"
          aria-hidden
        >
          <path
            d="M1,14 Q3,5 5,14 M7,14 Q9,2 11,14 M13,14 Q15,6 17,14 M19,14 Q21,4 22,14"
            stroke="#2a5e16"
            strokeWidth="1"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M3,14 Q5,8 7,14 M11,14 Q13,7 15,14"
            stroke="#3d7d24"
            strokeWidth="0.8"
            fill="none"
            opacity="0.7"
          />
        </svg>
      ))}
    </>
  );
}

function DirtSpot({
  top,
  left,
  size,
}: {
  top: string;
  left: string;
  size: number;
}) {
  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width: size,
        height: size * 0.55,
        borderRadius: "50%",
        background:
          "radial-gradient(ellipse at center, rgba(70,50,28,0.55) 0%, rgba(70,50,28,0.25) 50%, rgba(70,50,28,0) 100%)",
        filter: "blur(1px)",
      }}
    />
  );
}

function Petal({
  top,
  left,
  color,
}: {
  top: string;
  left: string;
  color: string;
}) {
  return (
    <svg
      className="absolute"
      style={{ top, left, width: 12, height: 12 }}
      viewBox="0 0 12 12"
      aria-hidden
    >
      <circle cx="6" cy="2.5" r="1.6" fill={color} />
      <circle cx="9.5" cy="5"   r="1.6" fill={color} />
      <circle cx="8.5" cy="9"   r="1.6" fill={color} />
      <circle cx="3.5" cy="9"   r="1.6" fill={color} />
      <circle cx="2.5" cy="5"   r="1.6" fill={color} />
      <circle cx="6"   cy="6"   r="1.4" fill="#ffe98a" />
    </svg>
  );
}

/* Pre-computed blade positions — easier to read than nested mapping noise.
   x is % across, scale is multiplier, tilt is degrees. */
const blades18 = [
  { x: 4,  scale: 1.0, tilt: -4 },
  { x: 14, scale: 0.8, tilt: 2 },
  { x: 28, scale: 1.1, tilt: -1 },
  { x: 42, scale: 0.7, tilt: 3 },
  { x: 56, scale: 1.0, tilt: -2 },
  { x: 71, scale: 0.9, tilt: 1 },
  { x: 86, scale: 1.1, tilt: -3 },
];
const blades32 = [
  { x: 9,  scale: 0.9, tilt: 2 },
  { x: 22, scale: 1.0, tilt: -3 },
  { x: 36, scale: 0.8, tilt: 1 },
  { x: 50, scale: 1.2, tilt: -2 },
  { x: 64, scale: 0.7, tilt: 4 },
  { x: 78, scale: 1.0, tilt: -1 },
  { x: 92, scale: 0.85, tilt: 3 },
];
const blades48 = [
  { x: 3,  scale: 1.1, tilt: -2 },
  { x: 17, scale: 0.7, tilt: 3 },
  { x: 31, scale: 1.0, tilt: -1 },
  { x: 45, scale: 0.9, tilt: 2 },
  { x: 60, scale: 1.2, tilt: -3 },
  { x: 75, scale: 0.8, tilt: 1 },
  { x: 89, scale: 1.0, tilt: -2 },
];
const blades62 = [
  { x: 7,  scale: 1.0, tilt: 1 },
  { x: 20, scale: 1.2, tilt: -2 },
  { x: 34, scale: 0.9, tilt: 3 },
  { x: 48, scale: 1.0, tilt: -4 },
  { x: 62, scale: 0.85, tilt: 2 },
  { x: 76, scale: 1.1, tilt: -1 },
  { x: 90, scale: 0.9, tilt: 3 },
];
const blades78 = [
  { x: 4,  scale: 1.2, tilt: -3 },
  { x: 18, scale: 0.9, tilt: 2 },
  { x: 32, scale: 1.1, tilt: -1 },
  { x: 47, scale: 0.8, tilt: 3 },
  { x: 60, scale: 1.0, tilt: -2 },
  { x: 74, scale: 1.2, tilt: 1 },
  { x: 88, scale: 0.95, tilt: -3 },
];
const blades92 = [
  { x: 10, scale: 1.3, tilt: -2 },
  { x: 24, scale: 1.0, tilt: 1 },
  { x: 38, scale: 0.85, tilt: -3 },
  { x: 52, scale: 1.2, tilt: 2 },
  { x: 68, scale: 1.0, tilt: -1 },
  { x: 82, scale: 1.1, tilt: 3 },
];
