export default function PressTicker() {
  const items = [
    "VOGUE WELLNESS — “Clinical-grade supplements... rare.”",
    "MindBody Magazine — Editor’s Pick 2025",
    "The Daily Care — “Longevity you can verify.”",
    "Sorbet Magazine — Top 10 Clean Nutrition",
    "NY Retail Journal — Meet the founders",
  ];

  const separator = (
    <span className="mx-6 text-secondary text-body-lg select-none">•</span>
  );

  return (
    <section className="w-full py-12 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-6">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
          PRESS &amp; RECOGNITION
        </span>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 items-center whitespace-nowrap animate-marquee w-full justify-around font-body-md text-body-md text-on-surface-variant">
          {items.map((item) => (
            <span key={item} className="flex items-center">
              <span className="font-title-md text-title-md text-primary font-semibold tracking-tight">
                {item}
              </span>
              {separator}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}