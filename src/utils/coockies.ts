import Cookies from "js-cookie";

export function setCookie(
  key: string,
  value: string,
  options: Cookies.CookieAttributes = {}
) {
  Cookies.set(key, value, options);
}

export function getCookie(key: string): string | undefined {
  return Cookies.get(key);
}

export function removeCookie(key: string) {
  Cookies.remove(key);
}

export function getRawCookie(key: string): any {
  return JSON.parse(Cookies.get(key) || "{}");
}
