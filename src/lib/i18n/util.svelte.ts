import { page } from "$app/state";

function changeLangUrl(lang?: string) {
  let url: string = page.url.pathname;
  if (page.params.lang) {
    url = "/" + (url.split("/", 3)[2] || "");
  }
  return buildLangUrl(url, lang);
}

function buildLangUrl(url: string, lang?: string) {
  if (lang) {
    url = "/" + lang + url;
  }
  return url;
}

function buildCurrentLangUrl(url: string) {
  return buildLangUrl(url, page.params.lang);
}

export { changeLangUrl, buildLangUrl, buildCurrentLangUrl };
