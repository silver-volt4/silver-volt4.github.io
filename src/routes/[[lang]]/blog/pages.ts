export interface Page {
    slug: string,
    attributes: Attributes
}

export interface Attributes {
    title: string;
    description: string;
    date: string;
    tags: string[];
    lang: string;
}

// horrible performance, but the whole website is pre-rendered anyway /shrug
export async function getPages(lang?: string): Promise<Page[]> {
    lang ??= "en";
    let pages = [];
    for (let entry of Object.entries(import.meta.glob("./pages/*.md"))) {
        let slug = entry[0].split("/")[2].split(".")[0];
        let module: any = await entry[1]();
        let attributes: Attributes = module.attributes;
        if (attributes.lang === lang) {
            pages.push({
                slug: slug,
                attributes: attributes,
            });
        }

    }
    pages.sort(
        (a, b) => +new Date(b.attributes.date) - +new Date(a.attributes.date),
    );
    return pages;
}