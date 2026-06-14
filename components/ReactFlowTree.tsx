"use client";
import { useCallback, useState } from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  NodeTypes,
  Handle,
  Position,
  NodeProps,
} from "reactflow";
import "reactflow/dist/style.css";
import { Person, people, nodePositions } from "@/data/lineage";

function roleColor(role: Person["role"]) {
  switch (role) {
    case "shivaji": return { bg: "#FF9933", border: "#f5c842", text: "#1a0e05" };
    case "ancestor-paternal": return { bg: "#3a1f6e", border: "#9b59b6", text: "#e8d5b0" };
    case "ancestor-maternal": return { bg: "#1a4a6e", border: "#3498db", text: "#e8d5b0" };
    case "descendant": return { bg: "#1a3a1a", border: "#2ecc71", text: "#e8d5b0" };
    case "spouse": return { bg: "#2a1a0a", border: "#c8973a", text: "#c8973a" };
  }
}

function PersonNode({ data }: NodeProps) {
  const person: Person = data.person;
  const colors = roleColor(person.role);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => data.onSelect(person)}
      style={{
        background: colors.bg,
        border: `2px solid ${colors.border}`,
        borderRadius: person.role === "shivaji" ? "50%" : "12px",
        width: person.role === "shivaji" ? 120 : 110,
        height: person.role === "shivaji" ? 120 : 110,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        boxShadow: person.role === "shivaji" ? `0 0 20px ${colors.border}80` : `0 2px 8px rgba(0,0,0,0.4)`,
        transition: "transform 0.15s",
        userSelect: "none",
      }}
      className="hover:scale-105"
    >
      <Handle type="target" position={Position.Top} style={{ background: colors.border, width: 6, height: 6 }} />
      {person.portrait && !imgError ? (
        <img
          src={person.portrait}
          alt={person.name}
          onError={() => setImgError(true)}
          style={{
            width: person.role === "shivaji" ? 50 : 40,
            height: person.role === "shivaji" ? 50 : 40,
            borderRadius: "50%",
            objectFit: "cover",
            border: `2px solid ${colors.border}`,
            marginBottom: 4,
          }}
        />
      ) : (
        <div style={{
          width: person.role === "shivaji" ? 50 : 40,
          height: person.role === "shivaji" ? 50 : 40,
          borderRadius: "50%",
          background: colors.border + "30",
          border: `2px solid ${colors.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: person.role === "shivaji" ? 22 : 18,
          marginBottom: 4,
        }}>
          {person.role === "shivaji" ? "👑" : person.role === "spouse" ? "♀" : "⚔"}
        </div>
      )}
      <div style={{
        color: colors.text,
        fontSize: person.role === "shivaji" ? 11 : 10,
        fontWeight: person.role === "shivaji" ? 700 : 600,
        textAlign: "center",
        lineHeight: 1.2,
      }}>
        {person.name.replace("Chhatrapati ", "").replace(" Maharaj", "")}
      </div>
      {(person.born || person.died) && (
        <div style={{ color: colors.border, fontSize: 9, marginTop: 2, textAlign: "center" }}>
          {person.born?.split(" ").slice(-1)[0] ?? "?"}–{person.died?.split(" ").slice(-1)[0] ?? "?"}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} style={{ background: colors.border, width: 6, height: 6 }} />
    </div>
  );
}

const nodeTypes: NodeTypes = { person: PersonNode };

function buildGraph(people: Person[], positions: Record<string, { x: number; y: number }>, onSelect: (p: Person) => void) {
  const nodes: Node[] = people
    .filter(p => positions[p.id])
    .map(p => ({
      id: p.id,
      type: "person",
      position: positions[p.id],
      data: { person: p, onSelect },
    }));

  const edges: Edge[] = [];
  let eid = 0;

  people.forEach(p => {
    (p.parentIds ?? []).forEach(parentId => {
      const parent = people.find(x => x.id === parentId);
      if (!parent || !positions[parentId] || !positions[p.id]) return;
      const isMaternal = parent.role === "ancestor-maternal" || parentId === "jijabai";
      edges.push({
        id: `e${eid++}`,
        source: parentId,
        target: p.id,
        style: { stroke: isMaternal ? "#3498db" : "#9b59b6", strokeWidth: 2 },
        animated: false,
      });
    });
    (p.spouseIds ?? []).forEach(spouseId => {
      if (!positions[spouseId] || !positions[p.id]) return;
      // Only draw spouse edge once (lower id first)
      if (p.id < spouseId) {
        edges.push({
          id: `e${eid++}`,
          source: p.id,
          target: spouseId,
          style: { stroke: "#c8973a", strokeWidth: 1.5, strokeDasharray: "5,5" },
          animated: false,
        });
      }
    });
  });

  return { nodes, edges };
}

interface ReactFlowTreeProps {
  people: Person[];
  positions: Record<string, { x: number; y: number }>;
  onPersonClick: (p: Person) => void;
}

export default function ReactFlowTree({ people, positions, onPersonClick }: ReactFlowTreeProps) {
  const { nodes, edges } = buildGraph(people, positions, onPersonClick);

  return (
    <div style={{ width: "100%", height: "100%", background: "#0f0803" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.2}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#c8973a20" gap={32} />
        <Controls style={{ background: "#2a1a0a", border: "1px solid #c8973a40", color: "#c8973a" }} />
        <MiniMap
          style={{ background: "#1a0e05", border: "1px solid #c8973a40" }}
          nodeColor={(n) => roleColor((n.data as any).person.role).border}
        />
      </ReactFlow>

      {/* Legend */}
      <div className="absolute bottom-6 left-3 z-10 bg-[#1a0e05]/90 border border-[#c8973a]/40 rounded-lg p-3 text-xs text-[#e8d5b0] space-y-1.5">
        <p className="font-semibold text-[#f5c842] text-xs uppercase tracking-wider mb-2">Legend</p>
        {[
          { color: "#FF9933", label: "Shivaji Maharaj" },
          { color: "#9b59b6", label: "Paternal lineage" },
          { color: "#3498db", label: "Maternal lineage" },
          { color: "#2ecc71", label: "Descendants" },
          { color: "#c8973a", label: "Spouses (dashed)" },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="w-3 h-2 rounded inline-block" style={{ background: item.color }} />
            {item.label}
          </div>
        ))}
        <p className="text-[#a08060] text-[10px] mt-1 pt-1 border-t border-[#c8973a]/20">Click any node for details</p>
      </div>
    </div>
  );
}
