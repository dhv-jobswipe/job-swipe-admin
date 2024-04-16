import Constants from '@/utils/Constants';
import { clsx, type ClassValue } from 'clsx';
import { hasCookie } from 'cookies-next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isAuthenticated() {
  return hasCookie(Constants.COOKIES.ACCESS_TOKEN);
}

export function matchPattern(link: string, pattern: string) {
  if (link === pattern) return true;

  const regexPattern = pattern.replace(/:[^/]+/g, '([^/]+)') + '$';
  const regex = new RegExp(regexPattern);
  const match = link.match(regex);

  if (match && match[1]) return true;
  return false;
}
