import i18n from 'sveltekit-i18n';

function buildLanguageSection(lang: string) {
    return [
        {
            locale: lang,
            key: 'common',
            loader: async () => (
                await import(`./${lang}/common.json`)
            ).default,
        },
        {
            locale: lang,
            key: 'homepage',
            loader: async () => (
                await import(`./${lang}/homepage.json`)
            ).default,
        },
        {
            locale: lang,
            key: 'projects',
            loader: async () => (
                await import(`./${lang}/projects.json`)
            ).default,
        },
    ]
}

const translator = new i18n({
    loaders: [
        ...buildLanguageSection("en"),
        ...buildLanguageSection("cs"),
    ],
})

export const { locale, locales, loading, loadTranslations } = translator;
export default translator.t;