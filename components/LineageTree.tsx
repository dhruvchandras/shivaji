"use client";
import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { people, nodePositions, Person } from "@/data/lineage";
import PersonPopup from "./PersonPopup";

const ReactFlowNoSSR = dynamic(() => import("./ReactFlowTree"), { ssr: false });

export default function LineageTree() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div className="flex h-full relative">
      <div className="flex-1 h-full">
        <ReactFlowNoSSR people={people} positions={nodePositions} onPersonClick={setSelectedPerson} />
      </div>
      {selectedPerson && (
        <PersonPopup person={selectedPerson} onClose={() => setSelectedPerson(null)} />
      )}
    </div>
  );
}
