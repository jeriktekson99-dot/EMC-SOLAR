interface PartnerLogo {
  id: string;
  name: string;
  logoUrl: string;
}

const TIER1_PARTNERS: PartnerLogo[] = [
  {
    id: 'cesc',
    name: 'CESC',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-11-be851b50-adbd-47c9-af80-5cbc8d4a26bf.png',
  },
  {
    id: 'deye',
    name: 'Deye',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-11-2c4c1cf2-219c-4722-bcc5-b4ebfb77fd49.png',
  },
  {
    id: 'dyness',
    name: 'Dyness',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-11-36c8ab0f-f4ea-4382-8c3b-0e380ffac676.png',
  },
  {
    id: 'genixgreen',
    name: 'GenixGreen',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-11-1051f89f-d459-4f42-8ecb-bd2401f34f54.png',
  },
  {
    id: 'goodwe',
    name: 'GoodWe',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-11-f757207c-53f7-480b-be3e-f7cc0de246e3.png',
  },
  {
    id: 'pylontech',
    name: 'Pylontech',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-11-c7c99ddc-e6f6-4655-85dd-ae0ce2ab2c76.png',
  },
  {
    id: 'srne',
    name: 'SRNE',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-11-6be900d9-513d-4505-9287-898430c2dd2d.png',
  },
  {
    id: 'solis',
    name: 'Solis',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-11-af7aa675-75d8-42db-8fae-a7961c82cf81.png',
  },
];

interface PartnerLogoMarqueeProps {
  className?: string;
  title?: string;
}

export default function PartnerLogoMarquee({
  className = '',
  title = 'TOP INDUSTRY PARTNERS',
}: PartnerLogoMarqueeProps) {
  // Repeating 4 times with -50% translateX guarantees a mathematically seamless infinite loop on any screen width
  const marqueeItems = [
    ...TIER1_PARTNERS,
    ...TIER1_PARTNERS,
    ...TIER1_PARTNERS,
    ...TIER1_PARTNERS,
  ];

  return (
    <section
      id="top-industry-partners-marquee-section"
      className={`w-full bg-[#F4F5F7] border-y border-slate-200/80 py-9 sm:py-12 relative overflow-hidden select-none ${className}`}
      aria-label={title}
    >
      {/* Eyebrow Header: TOP INDUSTRY PARTNERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-9">
        <h2 className="text-[12px] sm:text-[13px] font-bold tracking-[0.26em] text-slate-500 uppercase">
          {title}
        </h2>
      </div>

      {/* Marquee Track: Unboxed raw symbols directly on light gray with 50% increased size */}
      <div className="group-marquee relative w-full overflow-hidden">
        {/* Soft edge gradient fade vignettes matching the light gray background */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#F4F5F7] via-[#F4F5F7]/80 to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#F4F5F7] via-[#F4F5F7]/80 to-transparent z-10 pointer-events-none"
        />

        {/* Continuously Animated Infinite Marquee (paused on hover) */}
        <div className="animate-marquee-scroll flex items-center py-2">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              id={`partner-symbol-${partner.id}-${index}`}
              className="mx-8 sm:mx-12 md:mx-16 shrink-0 flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-pointer"
              title={partner.name}
            >
              {/* Raw unboxed logo reduced by 12.5% */}
              <img
                src={partner.logoUrl}
                alt={partner.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="h-[51px] sm:h-[63px] md:h-[74px] w-auto max-w-[236px] sm:max-w-[298px] md:max-w-[340px] object-contain drop-shadow-none filter select-none transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
