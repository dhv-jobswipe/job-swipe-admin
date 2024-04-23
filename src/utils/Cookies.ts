import Constants from '@/utils/Constants';
import { getCookie, setCookie } from 'cookies-next';
// import * as crypto from 'crypto';

// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// function encryptData(text: string): string {
//   const cipher = crypto.createCipheriv(algorithm, key, iv);
//   let encrypted = cipher.update(text, 'utf-8', 'hex');
//   encrypted += cipher.final('hex');
//   return encrypted;
// }

// function decryptData(text: string): string {
//   const decipher = crypto.createDecipheriv(algorithm, key, iv);
//   let decrypted = decipher.update(text, 'hex', 'utf-8');
//   decrypted += decipher.final('utf-8');
//   return decrypted;
// }

export function setAppCookie(
  name: string,
  value: any,
  encrypt: boolean = false,
) {
  const data = encrypt ? value : value;
  setCookie(name, data, { maxAge: 60 * 60 * 24 });
}

export function getAppCookie(name: string, decrypt: boolean = false): string {
  const data = getCookie(name) ?? '';
  return decrypt ? data : data;
}

export function setAppToken(access_token: string, refresh_token: string) {
  setAppCookie(Constants.COOKIES.ACCESS_TOKEN, access_token, true);
  setAppCookie(Constants.COOKIES.REFRESH_TOKEN, refresh_token, true);
}
