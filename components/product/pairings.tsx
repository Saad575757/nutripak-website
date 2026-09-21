"use client";

import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { useCart } from "@/components/cart/cart-context";
import type { PdpPairing } from "@/lib/pdps";

export default function Pairings({ pairings }: { pairings: PdpPairing[] }) {
  const { addItem, openCart } = useCart();

  const addPairing = (pairing: PdpPairing) => {
    addItem({
      key: `${pairing.slug}-pairing`,
      name: pairing.name,
      variant: "Pairing Add-On",
      price: pairing.price,
      image: pairing.image,
      alt: `${pairing.name} supplement bottle`,
    });
  };

  const handleBundle = () => {
    pairings.forEach(addPairing);
    openCart();
  };

  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-1">
              RECOMMENDED PAIRINGS
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-normal">
              Complete Your Daily System
            </h3>
          </div>
          <button
            className="px-5 py-2.5 rounded-full bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed transition-colors font-label-md text-label-md font-bold shadow-sm flex items-center gap-2"
            type="button"
            onClick={handleBundle}
          >
            <MaterialIcon name="add_shopping_cart" className="text-[18px]" />
            Add Both Pairings • Save Extra 10%
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairings.map((pairing) => (
            <div
              key={pairing.slug}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-shadow"
            >
              <div className="w-36 h-36 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 relative">
                <Image
                  src={pairing.image}
                  alt={`${pairing.name} supplement bottle in tinted glass on wooden surface`}
                  fill
                  sizes="144px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
                <span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider">
                  {pairing.badge}
                </span>
                <h4 className="font-title-lg text-title-lg text-primary font-bold">
                  {pairing.name}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {pairing.description}
                </p>
                <div className="flex items-center justify-center sm:justify-between pt-2">
                  <span className="font-title-md text-title-md font-bold text-primary">
                    ${pairing.price.toFixed(2)}
                  </span>
                  <button
                    className="px-4 py-2 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary transition-colors font-label-sm text-label-sm font-bold text-primary"
                    type="button"
                    onClick={() => addPairing(pairing)}
                  >
                    + Add Pairing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}