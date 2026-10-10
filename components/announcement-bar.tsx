import MaterialIcon from "@/components/material-icon";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/shipping";

interface MarqueeMessage {
  icon: string;
  text: string;
}

const MESSAGES: MarqueeMessage[] = [
  {
    icon: "local_shipping",
    text: `FREE SHIPPING ON ORDERS OVER RS. ${FREE_SHIPPING_THRESHOLD.toLocaleString("en-PK")}`,
  },
  { icon: "verified", text: "CASH ON DELIVERY AVAILABLE" },
  { icon: "storefront", text: "NUTRIPAK NUTRITION PRODUCTS" },
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