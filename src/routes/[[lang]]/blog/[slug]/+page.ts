const pages = import.meta.glob("../pages/*.md");

export function entries() {
  let p: Array<{ slug: string }> = [];
  Object.keys(pages).forEach((e) => {
    let entry = { slug: e.split("/")[2].split(".")[0] };
    p.push(entry);
  });
  return p;
}

export async function load({ params }) {
  let page = await import(`../pages/${params.slug}.md`)
  return {
    page: page,
  };
}
