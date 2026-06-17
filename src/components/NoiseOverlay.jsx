const noiseTexture = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
    <filter id='noise'>
      <feTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='2' stitchTiles='stitch' />
      <feColorMatrix type='saturate' values='0' />
    </filter>
    <rect width='100%' height='100%' filter='url(#noise)' opacity='0.45' />
  </svg>
`);

export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04] mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,${noiseTexture}")`,
        backgroundSize: "240px 240px",
      }}
    />
  );
}