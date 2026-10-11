export const SOLAREIGN_LOGO_URL = 'https://cdn.phototourl.com/member/2026-10-11-87e1bc20-84b6-4c31-8047-96dbef139d77.png';

interface SolareignLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  imgClassName?: string;
}

export default function SolareignLogo({ className = '', imgClassName = '' }: SolareignLogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Company Official Logo Mark */}
      <img
        src={SOLAREIGN_LOGO_URL}
        alt="EMC Solar Solutions"
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
        className={`h-11 sm:h-12 w-auto max-h-14 object-contain pointer-events-none select-none transition-transform duration-300 group-hover:scale-105 drop-shadow-xs ${imgClassName}`}
      />
    </div>
  );
}
