export function MicrobiologyVisual() {
  return (
    <svg
      className="w-24 h-24 text-secondary/70 relative z-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="32" strokeDasharray="4 4" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="20" strokeWidth="2" />
      <circle cx="50" cy="50" fill="currentColor" fillOpacity="0.2" r="8" />
      <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" strokeLinecap="round" strokeWidth="1.5" />
      <circle cx="70" cy="30" fill="currentColor" r="3" />
      <circle cx="30" cy="70" fill="currentColor" r="3" />
    </svg>
  );
}

export function DialVisual() {
  return (
    <svg
      className="w-24 h-24 text-primary/60 relative z-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="36" strokeWidth="1.5" />
      <path d="M50 22 V50 L68 62" strokeLinecap="round" strokeWidth="2" />
      <circle cx="50" cy="50" fill="currentColor" r="3" />
    </svg>
  );
}

export function HelixVisual() {
  return (
    <svg
      className="w-24 h-24 text-secondary/70 relative z-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 100 100"
    >
      <path d="M30 20 C45 35, 55 35, 70 20 M30 50 C45 65, 55 65, 70 50 M30 80 C45 95, 55 95, 70 80" strokeLinecap="round" />
      <path d="M70 20 C55 35, 45 35, 30 20 M70 50 C55 65, 45 65, 30 50 M70 80 C55 95, 45 95, 30 80" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

export function WaveVisual() {
  return (
    <svg
      className="w-24 h-24 text-primary/60 relative z-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 100 100"
    >
      <path d="M15 65 Q 50 15, 85 65" strokeLinecap="round" strokeWidth="2" />
      <circle cx="50" cy="38" fill="currentColor" fillOpacity="0.2" r="8" strokeWidth="1.5" />
      <line strokeDasharray="3 3" strokeWidth="1" x1="15" x2="85" y1="75" y2="75" />
    </svg>
  );
}