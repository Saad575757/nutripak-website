import MaterialIcon from "@/components/material-icon";

interface MarqueeMessage {
  icon: string;
  text: string;
}

const MESSAGES: MarqueeMessage[] = [
  { icon: "local_shipping", text: "FREE SHIPPING ON ORDERS OVER $50" },
  { icon: "eco", text: "20% OFF YOUR FIRST ROUTINE WITH CODE WELLNESS20" },
  { icon: "verified", text: "30-DAY HAPPINESS GUARANTEE" },
];

function Track({ hidden = false }: { hidden?: boolean }) {
  const items = [...MESSAGES, ...MESSAGES];
  return (
    <div
      aria-hidden={hidden || undefined}
      className="animate-marquee flex items-center gap-8 font-label-sm text-label-sm uppercase tracking-widest text-on-primary"
    >
      {items.map((message, index) => (
        <span key={index} className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <MaterialIcon
              name={message.icon}
              className="text-secondary-fixed text-[16px]"
            />
            {message.text}
          </span>
          <span className="text-secondary-fixed/70">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-primary text-on-primary overflow-hidden py-2">
      <div className="w-full overflow-hidden whitespace-nowrap flex">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}