import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function matchPattern(link: string, pattern: string) {
  if (link === pattern) return true;

  const regexPattern = pattern.replace(/:[^/]+/g, '([^/]+)') + '$';
  const regex = new RegExp(regexPattern);
  const match = link.match(regex);

  if (match && match[1]) return true;
  return false;
}
