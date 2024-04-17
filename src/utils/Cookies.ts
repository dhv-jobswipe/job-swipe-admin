import { getCookie, setCookie } from 'cookies-next';

export function setAppCookie(
  name: string,
  value: any,
  encrypt: boolean = false,
) {
  const data = encrypt ? Buffer.from(String(value)).toString('base64') : value;
  setCookie(name, data, { maxAge: 60 * 60 * 24 });
}

export function getAppCookie(name: string, decrypt: boolean = false) {
  const data = getCookie(name) ?? '';
  return decrypt ? Buffer.from(data).toString('utf-8') : data;
}
