import { isValidPhoneNumber } from "libphonenumber-js";

export const PHONE_INVALID_MESSAGE =
  "Please enter a valid WhatsApp number for the selected country.";

export function isPhoneValid(value: string): boolean {
  if (!value?.trim()) return false;
  return isValidPhoneNumber(value);
}

/** Returns an error message when the number is filled in but invalid. */
export function getPhoneValidationError(value: string): string | undefined {
  if (!value?.trim()) return undefined;
  if (!isValidPhoneNumber(value)) return PHONE_INVALID_MESSAGE;
  return undefined;
}
