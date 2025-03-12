import { loadTranslations } from '$lib/i18n';
import "$lib/style/app.scss";

export const prerender = true;
export const trailingSlash = "always";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
    const { pathname } = url;
    const initLocale = 'cs';
    await loadTranslations(initLocale, pathname);
    return {};
}