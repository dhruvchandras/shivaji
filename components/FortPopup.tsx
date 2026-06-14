"use client";
import { useState, useEffect } from "react";
import { Fort } from "@/data/forts";

interface WikiImage {
  url: string;
  caption: string;
}

function useWikiImages(wikipediaTitle: string): { images: WikiImage[]; loading: boolean } {
  const [images, setImages] = useState<WikiImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setImages([]);

    const controller = new AbortController();

    // Fetch page summary (has thumbnail) + page images list
    Promise.all([
      fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikipediaTitle)}`,
        { signal: controller.signal }
      ).then(r => r.ok ? r.json() : null).catch(() => null),

      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikipediaTitle)}&prop=images&imlimit=10&format=json&origin=*`,
        { signal: controller.signal }
      ).then(r => r.ok ? r.json() : null).catch(() => null),
    ]).then(([summary, imagesData]) => {
      const collected: WikiImage[] = [];

      // Primary thumbnail from summary
      if (summary?.thumbnail?.source) {
        // Get a larger version by bumping the pixel width
        const bigThumb = summary.thumbnail.source.replace(/\/\d+px-/, "/800px-");
        collected.push({ url: bigThumb, caption: summary.title ?? wikipediaTitle });
      }

      // Additional images from page images API
      if (imagesData?.query?.pages) {
        const page = Object.values(imagesData.query.pages)[0] as any;
        const fileNames: string[] = (page?.images ?? [])
          .map((img: any) => img.title as string)
          .filter((t: string) => /\.(jpg|jpeg|png)$/i.test(t) && !/flag|logo|icon|map|seal|coat/i.test(t))
          .slice(0, 4);

        if (fileNames.length > 0) {
          fetch(
            `https://en.wikipedia.org/w/api.php?action=query&titles=${fileNames.map(encodeURIComponent).join("|")}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json&origin=*`,
            { signal: controller.signal }
          )
            .then(r => r.ok ? r.json() : null)
            .then(data => {
              if (!data?.query?.pages) return;
              const extra: WikiImage[] = Object.values(data.query.pages)
                .map((p: any) => {
                  const info = p.imageinfo?.[0];
                  return info?.thumburl ? { url: info.thumburl, caption: p.title?.replace("File:", "").replace(/_/g, " ").replace(/\.[^.]+$/, "") ?? "" } : null;
                })
                .filter(Boolean) as WikiImage[];

              setImages(prev => {
                const seen = new Set(prev.map(i => i.url));
                return [...prev, ...extra.filter(e => !seen.has(e.url))];
              });
            })
            .catch(() => {});
        }
      }

      setImages(collected);
      setLoading(false);
    });

    return () => controller.abort();
  }, [wikipediaTitle]);

  return { images, loading };
}

interface FortPopupProps {
  fort: Fort;
  onClose: () => void;
}

export default function FortPopup({ fort, onClose }: FortPopupProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const { images, loading } = useWikiImages(fort.wikipediaTitle);

  const photos = images.length > 0 ? images : [];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div
        className="bg-[#2a1a0a] border border-[#c8973a] rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Photo carousel */}
        <div className="relative w-full h-52 bg-[#1a0e05] rounded-t-xl overflow-hidden">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-[#c8973a] text-xs animate-pulse">Loading photos…</div>
            </div>
          ) : photos.length > 0 && photos[photoIndex] ? (
            <>
              <img
                key={photos[photoIndex].url}
                src={photos[photoIndex].url}
                alt={photos[photoIndex].caption}
                className="w-full h-full object-cover"
                onError={e => (e.currentTarget.style.display = "none")}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-3 py-1 truncate">
                {photos[photoIndex].caption}
              </div>
              {photos.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black/80 transition"
                    onClick={() => setPhotoIndex(i => (i - 1 + photos.length) % photos.length)}
                  >‹</button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black/80 transition"
                    onClick={() => setPhotoIndex(i => (i + 1) % photos.length)}
                  >›</button>
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPhotoIndex(i)}
                        className={`w-2 h-2 rounded-full transition ${i === photoIndex ? "bg-[#c8973a]" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[#c8973a] text-4xl">🏯</span>
            </div>
          )}
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black transition text-lg leading-none"
          >×</button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 text-sm text-[#e8d5b0]">
          <div>
            <h2 className="text-xl font-bold text-[#f5c842]">{fort.name}</h2>
            {fort.aliases.length > 0 && (
              <p className="text-xs text-[#c8973a] mt-0.5">Also known as: {fort.aliases.join(", ")}</p>
            )}
            <div className="flex gap-2 mt-2 flex-wrap">
              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${fort.builtBy === "shivaji" ? "bg-[#FF6B00]/30 text-[#FF6B00] border border-[#FF6B00]/50" : "bg-[#4A90D9]/30 text-[#4A90D9] border border-[#4A90D9]/50"}`}>
                {fort.builtBy === "shivaji" ? "Built by Shivaji" : "Built by Others"}
              </span>
              <span className={`px-2 py-0.5 rounded text-xs ${fort.canVisit ? "bg-green-900/50 text-green-400 border border-green-700/50" : "bg-red-900/50 text-red-400 border border-red-700/50"}`}>
                {fort.canVisit ? "✓ Can Visit" : "✗ Restricted"}
              </span>
            </div>
          </div>

          <Section title="Built">
            <p><span className="text-[#c8973a]">When:</span> {fort.builtYear}</p>
            <p><span className="text-[#c8973a]">By:</span> {fort.builder}</p>
          </Section>

          <Section title="Why It Was Built">
            <p>{fort.whyBuilt}</p>
          </Section>

          {fort.battles.length > 0 && (
            <Section title="Famous Battles">
              <ul className="space-y-1">
                {fort.battles.map((b, i) => <li key={i} className="flex gap-2"><span className="text-[#c8973a] mt-0.5">⚔</span><span>{b}</span></li>)}
              </ul>
            </Section>
          )}

          <Section title="History of Ownership">
            <ol className="space-y-0.5">
              {fort.ownershipHistory.map((o, i) => <li key={i} className="flex gap-2"><span className="text-[#c8973a] shrink-0">{i + 1}.</span><span>{o}</span></li>)}
            </ol>
          </Section>

          {fort.funFacts.length > 0 && (
            <Section title="Interesting Facts">
              <ul className="space-y-1">
                {fort.funFacts.map((f, i) => <li key={i} className="flex gap-2"><span className="text-[#f5c842]">★</span><span>{f}</span></li>)}
              </ul>
            </Section>
          )}

          <Section title="Today">
            <p><span className="text-[#c8973a]">Condition:</span> {fort.condition}</p>
            {fort.canVisit && <p className="mt-1"><span className="text-[#c8973a]">Visiting:</span> {fort.visitInfo}</p>}
          </Section>

          <p className="text-[#a08060] text-[10px] border-t border-[#c8973a]/20 pt-2">
            Photos sourced from Wikipedia · <a href={`https://en.wikipedia.org/wiki/${fort.wikipediaTitle}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c8973a]">Read more on Wikipedia</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[#f5c842] font-semibold text-xs uppercase tracking-wider mb-1 border-b border-[#c8973a]/30 pb-0.5">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}
