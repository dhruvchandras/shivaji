"use client";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, Polygon, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Fort } from "@/data/forts";
import { EraConfig } from "@/data/eras";

interface LeafletMapProps {
  forts: Fort[];
  allForts: Fort[];
  era: EraConfig;
  selectedEraId: string;
  onFortClick: (fort: Fort) => void;
}

function EraOverlays({ era }: { era: EraConfig }) {
  return (
    <>
      {era.regions.map((region, i) => (
        <Polygon
          key={`${era.id}-${i}`}
          positions={region.coords}
          pathOptions={{
            color: region.color,
            fillColor: region.color,
            fillOpacity: region.opacity,
            weight: 1,
            opacity: 0.6,
            interactive: false,
          }}
        />
      ))}
    </>
  );
}

export default function LeafletMap({ forts, allForts, era, selectedEraId, onFortClick }: LeafletMapProps) {
  const visibleIds = new Set(forts.map(f => f.id));

  return (
    <MapContainer
      center={[18.5, 74.5]}
      zoom={7}
      style={{ height: "100%", width: "100%", background: "#1a0e05" }}
      className="z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        opacity={0.7}
      />

      <EraOverlays era={era} />

      {/* Greyed-out forts not in this era */}
      {allForts
        .filter(f => !visibleIds.has(f.id))
        .map(fort => (
          <CircleMarker
            key={`hidden-${fort.id}`}
            center={[fort.lat, fort.lng]}
            radius={5}
            pathOptions={{ color: "#555", fillColor: "#333", fillOpacity: 0.4, weight: 1 }}
          >
            <Tooltip permanent direction="top" offset={[0, -6]} className="fort-label-hidden">
              <span style={{ fontSize: "10px", color: "#888" }}>{fort.name}</span>
            </Tooltip>
          </CircleMarker>
        ))}

      {/* Active forts */}
      {forts.map(fort => (
        <CircleMarker
          key={fort.id}
          center={[fort.lat, fort.lng]}
          radius={8}
          pathOptions={{
            color: fort.builtBy === "shivaji" ? "#FF6B00" : "#4A90D9",
            fillColor: fort.builtBy === "shivaji" ? "#FF6B00" : "#4A90D9",
            fillOpacity: 0.85,
            weight: 2,
          }}
          eventHandlers={{
            click: () => onFortClick(fort),
          }}
        >
          <Tooltip permanent direction="top" offset={[0, -10]} className="fort-label">
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#f5c842", background: "rgba(26,14,5,0.85)", padding: "1px 5px", borderRadius: "3px" }}>
              {fort.name}
            </span>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
