import { loadTranslations } from "$lib/i18n";
import "$lib/style/app.scss";

export const prerender = true;
export const trailingSlash = "always";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url, params }) => {
  const { pathname } = url;
  const initLocale = params.lang ?? "en";
  await loadTranslations(initLocale, pathname);
  return {};
};
