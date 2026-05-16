import { getCountries, type CountryCode } from "libphonenumber-js";

const VALID_COUNTRIES = new Set<CountryCode>(getCountries());

function regionFromLocaleTag(tag: string): string | undefined {
  try {
    const region = new Intl.Locale(tag).region;
    if (region) return region.toUpperCase();
  } catch {
    // fall through to regex
  }

  const match = tag.match(/[-_]([A-Za-z]{2})$/);
  return match?.[1]?.toUpperCase();
}

function toCountryCode(region: string): CountryCode | undefined {
  const code = region.toUpperCase() as CountryCode;
  return VALID_COUNTRIES.has(code) ? code : undefined;
}

export function detectUserCountry(): CountryCode | undefined {
  if (typeof navigator === "undefined") return undefined;

  const tags =
    navigator.languages?.length > 0
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : [];

  for (const tag of tags) {
    const region = regionFromLocaleTag(tag);
    if (!region) continue;

    const country = toCountryCode(region);
    if (country) return country;
  }

  return undefined;
}
