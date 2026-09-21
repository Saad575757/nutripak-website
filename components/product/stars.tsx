interface StarsProps {
  count?: number;
  className?: string;
}

export default function Stars({ count = 5, className = "text-[16px]" }: StarsProps) {
  return (
    <div
      className={`flex text-amber-500 gap-0 ${className}`}
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          star
        </span>
      ))}
    </div>
  );
}