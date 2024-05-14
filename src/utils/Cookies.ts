// git commit -m "PBL-848 set up base"

import Constants from '@/utils/Constants';
import { getCookie, setCookie } from 'cookies-next';

export function setAppCookie(
  name: string,
  value: any,
  encrypt: boolean = false,
) {
  const data = encrypt ? Buffer.from(value).toString('base64') : value;
  setCookie(name, data, { maxAge: 60 * 60 * 24 });
}

export function getAppCookie(name: string, decrypt: boolean = false): string {
  const data = getCookie(name) ?? '';
  return decrypt ? Buffer.from(data, 'base64').toString('ascii') : data;
}

export function setAppToken(access_token: string, refresh_token: string) {
  setAppCookie(Constants.COOKIES.ACCESS_TOKEN, access_token, true);
  setAppCookie(Constants.COOKIES.REFRESH_TOKEN, refresh_token, true);
}
