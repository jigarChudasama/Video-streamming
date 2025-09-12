import Cookies from 'universal-cookie'
import { COOKIE_OPTIONS } from '../utils/constent.js';

const cookies = new Cookies();

export const setCookie = (key, value) => {
  cookies.set(key, (value || ''), COOKIE_OPTIONS);
}

export const getCookie = (key) => {
  return cookies.get(key) || '';
}

export const removeCookie = (key) => {
  cookies.remove(key, COOKIE_OPTIONS);
}

export const clearCookie = () => {
  const allCookies = cookies.getAll();
  for (const key in allCookies) {
    cookies.remove(key, COOKIE_OPTIONS);
  }
}