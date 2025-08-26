import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidIranMobile(input: string): boolean {
  const normalized = input.trim();
  const re = /^(?:09\d{9}|\+989\d{9}|00989\d{9})$/;
  return re.test(normalized);
}
// 09xxxxxxxxx  (11 chars)
// +989xxxxxxxxx (13 chars)
// 00989xxxxxxxxx (14 chars)