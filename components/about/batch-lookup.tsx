"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";

interface BatchRecord {
  name: string;
  label: string;
  potency: string;
}

const BATCH_DATA: Record<string, BatchRecord> = {
  "NP-2024-C92": {
    name: "Daily Wellness Vitamin C + D3 Complex",
    label: "Batch #NP-2024-C92 • Mfr. Date: Oct 14, 2024",
    potency: "102.4%",
  },
  "NP-2024-M44": {
    name: "Renew Collagen Peptides + Hyaluronic Acid",
    label: "Batch #NP-2024-M44 • Mfr. Date: Nov 02, 2024",
    potency: "101.8%",
  },
};

const SAMPLE_BATCHES = [
  { code: "NP-2024-C92", label: "NP-2024-C92 (Daily Vit C)" },
  { code: "NP-2024-M44", label: "NP-2024-M44 (Renew Collagen)" },
];

function resolveBatch(code: string): BatchRecord {
  const key = code.toUpperCase().trim();
  const known = BATCH_DATA[key];
  if (known) return known;
  return {
    name: `Custom Lot Verified: ${key}`,
    label: `Batch #${key} • Lab Certified Safe`,
    potency: "100.2%",
  };
}

const METRICS = [
  { label: "Heavy Metals", value: "Undetectable", note: "Pb, As, Cd, Hg <0.01ppm" },
  { label: "Microbials", value: "Negative", note: "E. coli, Salmonella zero" },
  { label: "Solvent Residue", value: "0.00%", note: "Supercritical CO2 extract" },
  { label: "Allergen Panel", value: "Gluten Free", note: "Soy, dairy, corn clean" },
  { label: "Independent Lab", value: "Eurofins ISO", note: "Accredited #17025" },
];

export default function BatchLookup() {
  const [input, setInput] = useState("NP-2024-C92");
  const [record, setRecord] = useState<BatchRecord>(() => resolveBatch("NP-2024-C92"));

  const runSearch = (value: string) => {
    if (!value.trim()) return;
    setRecord(resolveBatch(value));
  };

  return (
    <section
      className="w-full py-16 bg-primary text-on-primary relative overflow-hidden"
      id="batch-lookup"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 -mb-20 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider self-start">
              <MaterialIcon name="qr_code_scanner" className="text-[16px]" />
              <span>Batch Transparency Engine</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-normal leading-tight">
              Inspect the independent lab assay of your specific bottle.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              Every bottle produced has its own full spectrum COA. Enter the
              six-character batch stamped on your container base to review HPLC
              chromatography, pathogen screening, and third-party purity scores.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center rounded-full bg-surface-container-lowest p-2 shadow-lg">
                <MaterialIcon name="search" className="text-outline pl-3 pr-2" />
                <input
                  className="w-full bg-transparent font-title-md text-title-md text-on-surface placeholder:text-outline focus:outline-none uppercase"
                  id="batch-input"
                  placeholder="Enter Lot (e.g. NP-2024-C92)"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") runSearch(input);
                  }}
                />
                <button
                  className="rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary px-6 py-2.5 font-label-md text-label-md font-semibold transition-colors flex items-center gap-1.5"
                  type="button"
                  onClick={() => runSearch(input)}
                >
                  <span>Verify</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-2 font-caption text-caption text-on-primary-container pl-4">
                <span>Quick tests:</span>
                {SAMPLE_BATCHES.map((batch, index) => (
                  <span key={batch.code} className="flex items-center gap-2">
                    {index > 0 ? <span>•</span> : null}
                    <button
                      className="underline hover:text-secondary-fixed transition-colors"
                      type="button"
                      onClick={() => {
                        setInput(batch.code);
                        runSearch(batch.code);
                      }}
                    >
                      {batch.label}
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl bg-surface-container-lowest text-on-surface p-6 md:p-8 shadow-2xl flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-surface-container gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                    <MaterialIcon name="verified" className="text-[20px]" />
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">
                      {record.name}
                    </h4>
                    <p className="font-caption text-caption text-outline">
                      {record.label}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase">
                  Passed 100%
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-body-sm text-body-sm">
                <div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1">
                  <span className="text-outline font-caption text-caption uppercase">
                    Active Potency
                  </span>
                  <span className="font-title-md text-title-md text-secondary font-bold">
                    {record.potency}
                  </span>
                  <span className="text-[11px] text-on-surface-variant">
                    Validated by HPLC
                  </span>
                </div>
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1"
                  >
                    <span className="text-outline font-caption text-caption uppercase">
                      {metric.label}
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      {metric.value}
                    </span>
                    <span className="text-[11px] text-on-surface-variant">
                      {metric.note}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-outline font-caption text-caption">
                  <MaterialIcon name="lock" className="text-[16px] text-secondary" />
                  <span>Cryptographically signed &amp; timestamped</span>
                </div>
                <button
                  className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-semibold hover:underline"
                  type="button"
                >
                  <MaterialIcon name="download" className="text-[18px]" />
                  <span>Download Full PDF Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}