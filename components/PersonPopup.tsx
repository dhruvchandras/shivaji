"use client";
import { useState } from "react";
import { Person, people } from "@/data/lineage";

interface PersonPopupProps {
  person: Person;
  onClose: () => void;
}

function roleLabel(role: Person["role"]) {
  switch (role) {
    case "shivaji": return "Chhatrapati";
    case "ancestor-paternal": return "Paternal Ancestor";
    case "ancestor-maternal": return "Maternal Ancestor";
    case "descendant": return "Descendant";
    case "spouse": return "Spouse";
  }
}

function roleBadgeClass(role: Person["role"]) {
  switch (role) {
    case "shivaji": return "bg-[#FF9933]/30 text-[#FF9933] border-[#FF9933]/50";
    case "ancestor-paternal": return "bg-purple-900/30 text-purple-300 border-purple-700/50";
    case "ancestor-maternal": return "bg-blue-900/30 text-blue-300 border-blue-700/50";
    case "descendant": return "bg-green-900/30 text-green-400 border-green-700/50";
    case "spouse": return "bg-[#c8973a]/20 text-[#c8973a] border-[#c8973a]/40";
  }
}

export default function PersonPopup({ person, onClose }: PersonPopupProps) {
  const [imgError, setImgError] = useState(false);

  const spouses = people.filter(p =>
    p.spouseIds?.includes(person.id) || person.spouseIds?.includes(p.id)
  );
  const children = people.filter(p => p.parentIds?.includes(person.id));
  const parents = people.filter(p => person.parentIds?.includes(p.id));

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div
        className="bg-[#2a1a0a] border border-[#c8973a] rounded-xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#c8973a]/30 flex gap-4">
          <div className="shrink-0">
            {person.portrait && !imgError ? (
              <img
                src={person.portrait}
                alt={person.name}
                onError={() => setImgError(true)}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#c8973a]"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-[#1a0e05] border-2 border-[#c8973a] flex items-center justify-center text-3xl">
                {person.role === "shivaji" ? "👑" : person.role === "spouse" ? "♀" : "⚔"}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-[#f5c842] leading-tight">{person.name}</h2>
            {person.title && <p className="text-[#c8973a] text-xs mt-0.5">{person.title}</p>}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className={`px-2 py-0.5 rounded text-xs font-semibold border ${roleBadgeClass(person.role)}`}>
                {roleLabel(person.role)}
              </span>
            </div>
            <p className="text-[#a08060] text-xs mt-2">
              {person.born ?? "?"} – {person.died ?? "present"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-[#c8973a] hover:text-white transition text-xl leading-none"
          >×</button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4 text-sm text-[#e8d5b0]">
          <div>
            <h3 className="text-[#f5c842] font-semibold text-xs uppercase tracking-wider mb-1">About</h3>
            <p className="leading-relaxed text-[#d4b896]">{person.description}</p>
          </div>

          {parents.length > 0 && (
            <RelationSection title="Parents" people={parents} />
          )}
          {spouses.length > 0 && (
            <RelationSection title="Spouses" people={spouses} />
          )}
          {children.length > 0 && (
            <RelationSection title="Children" people={children} />
          )}
        </div>
      </div>
    </div>
  );
}

function RelationSection({ title, people: persons }: { title: string; people: Person[] }) {
  return (
    <div>
      <h3 className="text-[#f5c842] font-semibold text-xs uppercase tracking-wider mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {persons.map(p => (
          <div key={p.id} className="bg-[#1a0e05] border border-[#c8973a]/30 rounded-lg px-2 py-1.5 text-xs">
            <div className="text-[#e8d5b0] font-medium">{p.name.replace("Chhatrapati ", "")}</div>
            {(p.born || p.died) && (
              <div className="text-[#a08060]">{p.born?.split(" ").slice(-1)[0] ?? "?"}–{p.died?.split(" ").slice(-1)[0] ?? "?"}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
