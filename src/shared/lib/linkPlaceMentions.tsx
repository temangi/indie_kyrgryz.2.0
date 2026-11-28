import Link from "next/link";
import type { ReactNode } from "react";

/** Destination pages that already exist. One link per place, first mention only. */
const PLACE_PAGES = [
  { name: "World Nomad Games", href: "/destination/world-nomad-games" },
  { name: "Issyk-Kul", href: "/destination/issyk-kul" },
  { name: "Song-Kul", href: "/destination/song-kul" },
  { name: "Kel-Suu", href: "/destination/kel-suu" },
] as const;

/**
 * Turns the first unused mention of each place into a link.
 * `used` is filled in reading order by the caller.
 */
export function linkPlaceMentions(text: string, used: Set<string>): ReactNode {
  const hits = PLACE_PAGES.flatMap((place) => {
    if (used.has(place.href)) return [];
    const index = text.indexOf(place.name);
    if (index === -1) return [];
    return [{ index, ...place }];
  }).sort((a, b) => a.index - b.index || b.name.length - a.name.length);

  const first = hits[0];
  if (!first) return text;

  used.add(first.href);
  const before = text.slice(0, first.index);
  const after = text.slice(first.index + first.name.length);

  return (
    <>
      {before}
      <Link
        href={first.href}
        className="placeLink"
        onClick={(event) => event.stopPropagation()}
      >
        {first.name}
      </Link>
      {linkPlaceMentions(after, used)}
    </>
  );
}
