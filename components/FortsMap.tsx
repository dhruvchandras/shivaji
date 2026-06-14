"use client";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { forts, Fort, Era } from "@/data/forts";
import { eras, EraId } from "@/data/eras";
import FortPopup from "./FortPopup";

// Leaflet must only load client-side
const MapWithNoSSR = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function FortsMap() {
  const [selectedEra, setSelectedEra] = useState<EraId>("shivaji");
  const [selectedFort, setSelectedFort] = useState<Fort | null>(null);

  const currentEra = eras.find(e => e.id === selectedEra)!;
  const visibleForts = forts.filter(f => f.activeEras.includes(selectedEra as Era));

  return (
    <div className="flex flex-col h-full">
      {/* Era toggle bar */}
      <div className="bg-[#1a0e05] border-b border-[#c8973a]/30 px-4 py-2">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-[#c8973a] text-xs font-semibold uppercase tracking-wider mr-1">Era:</span>
          {eras.map(era => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                selectedEra === era.id
                  ? "bg-[#c8973a] text-[#1a0e05]"
                  : "bg-[#2a1a0a] text-[#e8d5b0] border border-[#c8973a]/40 hover:border-[#c8973a]"
              }`}
            >
              {era.label}
              <span className="ml-1 opacity-60 text-[10px]">({era.years})</span>
            </button>
          ))}
        </div>
        <p className="text-[#a08060] text-xs mt-1.5 leading-snug">{currentEra.description}</p>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <MapWithNoSSR
          forts={visibleForts}
          allForts={forts}
          era={currentEra}
          selectedEraId={selectedEra}
          onFortClick={setSelectedFort}
        />

        {/* Legend */}
        <div className="absolute bottom-6 right-3 z-[1000] bg-[#1a0e05]/90 border border-[#c8973a]/40 rounded-lg p-3 text-xs text-[#e8d5b0] space-y-1.5">
          <p className="font-semibold text-[#f5c842] text-xs uppercase tracking-wider mb-2">Fort built by</p>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF6B00] inline-block shrink-0" />
            Shivaji Maharaj
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4A90D9] inline-block shrink-0" />
            Others
          </div>
          {currentEra.regions.length > 0 && (
            <>
              <p className="font-semibold text-[#f5c842] text-xs uppercase tracking-wider mt-2 mb-1 pt-1 border-t border-[#c8973a]/30">Territory</p>
              {currentEra.regions.map(r => (
                <div key={r.name} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded shrink-0 border border-white/20" style={{ background: r.color, opacity: 0.8 }} />
                  <span>{r.name}</span>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Fort count badge */}
        <div className="absolute top-3 right-3 z-[1000] bg-[#1a0e05]/90 border border-[#c8973a]/40 rounded px-2 py-1 text-[#c8973a] text-xs">
          {visibleForts.length} forts in this era
        </div>
      </div>

      {/* Popup */}
      {selectedFort && (
        <FortPopup fort={selectedFort} onClose={() => setSelectedFort(null)} />
      )}
    </div>
  );
}
