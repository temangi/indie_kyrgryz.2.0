import {
  getCountries,
  getCountryCallingCode,
  type CountryCode,
} from "libphonenumber-js";

export type CountryOption = {
  code: CountryCode;
  name: string;
  dialCode: string;
  flag: string;
};

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

export function countryCodeToFlag(code: CountryCode): string {
  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

const allCountries: CountryOption[] = getCountries().map((code) => ({
  code,
  name: regionNames.of(code) ?? code,
  dialCode: `+${getCountryCallingCode(code)}`,
  flag: countryCodeToFlag(code),
}));

const sortByName = (a: CountryOption, b: CountryOption) =>
  a.name.localeCompare(b.name, "en");

const kg = allCountries.find((c) => c.code === "KG");

export const COUNTRIES: CountryOption[] = [
  ...(kg ? [kg] : []),
  ...allCountries.filter((c) => c.code !== "KG").sort(sortByName),
];

export function findCountry(code: CountryCode): CountryOption | undefined {
  return allCountries.find((c) => c.code === code);
}
