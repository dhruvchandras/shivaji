"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import FortsTable from "@/components/FortsTable";

const FortsMap = dynamic(() => import("@/components/FortsMap"), { ssr: false });
const LineageTree = dynamic(() => import("@/components/LineageTree"), { ssr: false });

type Tab = "forts" | "fortslist" | "lineage";

const TAB_LABELS: Record<Tab, string> = {
  forts: "⚔ Forts Map",
  fortslist: "📋 Forts List",
  lineage: "🌳 Lineage",
};

export default function Home() {
  const [tab, setTab] = useState<Tab>("forts");

  return (
    <div className="flex flex-col h-screen bg-[#0f0803]">
      {/* Header */}
      <header className="bg-[#1a0e05] border-b border-[#c8973a]/40 px-4 py-3 flex items-center gap-4 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-2xl select-none" role="img" aria-label="crown">🏯</span>
          <div>
            <h1 className="text-[#f5c842] font-bold text-lg leading-tight tracking-wide">
              Chhatrapati Shivaji Maharaj
            </h1>
            <p className="text-[#c8973a] text-xs">Interactive History — Forts · Battles · Lineage</p>
          </div>
        </div>

        {/* Tabs */}
        <nav className="ml-6 flex gap-1">
          {(["forts", "fortslist", "lineage"] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded text-sm font-semibold transition-all ${
                tab === t
                  ? "bg-[#c8973a] text-[#1a0e05]"
                  : "text-[#c8973a] hover:bg-[#c8973a]/10 border border-[#c8973a]/30"
              }`}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        <div className="ml-auto text-[#a08060] text-xs hidden sm:block">
          r. 1646–1680 · Raigad Capital · Maratha Empire
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-hidden">
        {tab === "forts" && <FortsMap />}
        {tab === "fortslist" && <FortsTable />}
        {tab === "lineage" && <LineageTree />}
      </main>
    </div>
  );
}
