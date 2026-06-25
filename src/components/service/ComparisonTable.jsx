// components/ComparisonTable.tsx
"use client";

import { comparisonRows } from "@/data/services-data";
import RevealUp from "./RevealUp";

const headerColors = [
  "bg-surface-container-high text-on-surface",
  "bg-[#036135] text-white",
  "bg-[#036135] text-white",
  "bg-[#C9961A] text-[#181c20]",
];

const headers = [
  "Service Feature",
  "Home Care",
  "Mental Health Outreach",
  "Crisis Prevention",
];

export default function ComparisonTable() {
  return (
    <section className="py-section max-w-7xl mx-auto px-6 lg:px-8 bg-background">
      <div className="text-center mb-16">
        <RevealUp>
          <h2 className="font-headline text-3xl md:text-4xl text-primary">
            Compare our core services at a glance
          </h2>
        </RevealUp>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-[24px] overflow-hidden shadow-sm">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th
                  key={header}
                  className={`p-6 ${
                    i === 0 ? "text-left" : "text-center"
                  } ${headerColors[i]} font-bold text-sm uppercase tracking-wider`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-on-surface-variant">
            {comparisonRows.map((row, rowIndex) => (
              <tr
                key={row.feature}
                className={`border-b border-outline-variant ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-[#f7faf4]"
                }`}
              >
                <td className="p-6 font-semibold">{row.feature}</td>
                {["homeCare", "mentalHealth", "crisisPrevention"].map(
                  (key, colIndex) => {
                    const value = row[key];
                    const isBoolean = typeof value === "boolean";

                    return (
                      <td key={key} className="p-6 text-center">
                        {isBoolean ? (
                          value ? (
                            <span className="material-symbols-outlined text-[#036135]">
                              check_circle
                            </span>
                          ) : (
                            <span className="material-symbols-outlined text-[#235492]">
                              fiber_manual_record
                            </span>
                          )
                        ) : (
                          value
                        )}
                      </td>
                    );
                  },
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
