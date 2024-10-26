interface attributes {
    title: string,
    description: string,
    date: string,
    tags: string[]
};

export const _tagline = "Volt's blog"

export async function load({ params }) {
    let pages = [];
    for (let entry of Object.entries(import.meta.glob('./pages/*.md'))) {
        let slug = entry[0].split("/")[2].split(".")[0];
        let module: any = await entry[1]();
        let attributes: attributes = module.attributes
        pages.push({
            slug: slug,
            attributes: attributes
        });
    }
    return {
        pages: pages
    }
}