// git commit -m "PBL-848 set up base"

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function matchPattern(link: string, pattern: string): boolean {
  if (link === pattern) return true;

  const regexPattern = pattern.replace(/:[^/]+/g, '([^/]+)') + '$';
  const regex = new RegExp(regexPattern);
  const match = link.match(regex);

  if (match && match[1]) return true;
  return false;
}

export function changeValueInArrayObject(
  arr: any[],
  value: any,
  key: string,
  newValue: any,
) {
  let newArrayObject = [...arr];
  for (let idx = 0; idx < newArrayObject.length; idx++) {
    if (newArrayObject[idx]['key'] === value) {
      newArrayObject[idx][key] = newValue;
    }
  }
  return newArrayObject;
}

export default function updateSearchParams(params: Record<string, any>) {
  const searchParams = new URLSearchParams(window.location.search);
  const keys = Object.keys(params).sort();
  for (const key of keys) {
    if (typeof params[key] === 'undefined' || !params[key]) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, String(params[key]));
    }
  }
  return window.location.href.split('?')[0] + '?' + searchParams.toString();
}
