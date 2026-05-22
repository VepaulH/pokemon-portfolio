/**
 * Page backdrop — a fullscreen Pokémon-nature image, gently dimmed so the
 * foreground console + cards stay the focal point.
 *
 * Kept under the name `HoennScene` so existing imports keep working. The image
 * lives in /public — swap the filename in `BG_IMAGE` if you want a different one.
 */

const BG_IMAGE = "/MTFGvNm-anime-forest-background.jpg";

type Props = {
  /**
   * How heavily to wash out the image. 0 = full image.
   * Home page uses a small dim (0.15) so the scene reads clearly behind the console;
   * sub-pages use a heavier dim (default 0.5) so dense content stays legible.
   */
  dim?: number;
  /** Optional gaussian blur in pixels, useful on sub-pages. */
  blur?: number;
};

export function HoennScene({ dim = 0.15, blur = 0 }: Props) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Background image — covers the entire viewport */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
          transform: blur > 0 ? "scale(1.04)" : undefined, // hide blur edge bleed
        }}
      />

      {/* White wash to soften the image so foreground reads cleanly */}
      {dim > 0 && (
        <div
          className="absolute inset-0"
          style={{ background: `rgba(255,255,255,${dim})` }}
        />
      )}

      {/* Subtle bottom vignette to anchor the scene */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, transparent 55%, rgba(20,40,15,0.18) 100%)",
        }}
      />
    </div>
  );
}
