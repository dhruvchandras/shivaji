"use client";
import { useState } from "react";
import { forts, Fort } from "@/data/forts";
import FortPopup from "./FortPopup";

const sorted = [...forts].sort((a, b) => a.name.localeCompare(b.name));

export default function FortsTable() {
  const [selected, setSelected] = useState<Fort | null>(null);

  return (
    <div className="h-full overflow-auto px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a08060] text-xs mb-3">
          {sorted.length} forts · Click any row for full details
        </p>

        <table className="w-full border-collapse text-sm text-[#e8d5b0]">
          <thead>
            <tr className="border-b border-[#c8973a]/40 text-[#f5c842] text-xs uppercase tracking-wider">
              <th className="text-left py-2 pr-4 font-semibold w-6">#</th>
              <th className="text-left py-2 pr-4 font-semibold">Fort</th>
              <th className="text-left py-2 pr-4 font-semibold hidden sm:table-cell">Also Known As</th>
              <th className="text-left py-2 pr-4 font-semibold">Built / Acquired</th>
              <th className="text-left py-2 pr-4 font-semibold hidden md:table-cell">Why Notable</th>
              <th className="text-left py-2 pr-2 font-semibold">Visit</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((fort, i) => (
              <tr
                key={fort.id}
                onClick={() => setSelected(fort)}
                className="border-b border-[#c8973a]/10 hover:bg-[#c8973a]/8 cursor-pointer transition-colors group"
              >
                <td className="py-2.5 pr-4 text-[#a08060] text-xs tabular-nums">{i + 1}</td>
                <td className="py-2.5 pr-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full shrink-0 ${
                        fort.builtBy === "shivaji" ? "bg-[#FF6B00]" : "bg-[#4A90D9]"
                      }`}
                    />
                    <span className="font-semibold group-hover:text-[#f5c842] transition-colors">
                      {fort.name}
                    </span>
                  </div>
                </td>
                <td className="py-2.5 pr-4 text-[#a08060] hidden sm:table-cell text-xs">
                  {fort.aliases.length > 0 ? fort.aliases.join(", ") : "—"}
                </td>
                <td className="py-2.5 pr-4 text-xs text-[#c8973a]">{fort.builtYear}</td>
                <td className="py-2.5 pr-4 text-xs hidden md:table-cell">
                  <span>{fort.whyBuilt}</span>
                </td>
                <td className="py-2.5 pr-2 text-xs">
                  {fort.canVisit ? (
                    <span className="text-green-400">✓ Yes</span>
                  ) : (
                    <span className="text-red-400">✗ No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex gap-4 text-xs text-[#a08060]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF6B00]" /> Built by Shivaji
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4A90D9]" /> Built/held by others
          </span>
        </div>
      </div>

      {selected && <FortPopup fort={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
