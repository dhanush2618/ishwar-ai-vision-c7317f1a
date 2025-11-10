export function svgThumb(label: string, hue: number = 210): string {
  const initials = (label || "AI").split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase() || "").join("");
  const bg1 = `hsl(${hue}, 85%, 62%)`;
  const bg2 = `hsl(${(hue + 35) % 360}, 85%, 52%)`;
  const bg3 = `hsl(${(hue + 70) % 360}, 85%, 42%)`;
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${bg1}'/>
        <stop offset='60%' stop-color='${bg2}'/>
        <stop offset='100%' stop-color='${bg3}'/>
      </linearGradient>
      <filter id='grain'>
        <feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='1' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
        <feComponentTransfer>
          <feFuncA type='table' tableValues='0 0.06'/>
        </feComponentTransfer>
      </filter>
    </defs>
    <rect width='1200' height='800' fill='url(#g)'/>
    <rect width='1200' height='800' filter='url(#grain)' opacity='0.25'/>
    <text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Inter,Segoe UI,Arial' font-size='220' fill='rgba(255,255,255,0.9)' font-weight='700' letter-spacing='6'>${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function svgThumbByIndex(label: string, index: number): string {
  const hue = (index * 47) % 360;
  return svgThumb(label, hue);
}
