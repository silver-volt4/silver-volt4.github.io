export const prerender = true;
import { json } from "@sveltejs/kit";
import { create } from "xmlbuilder2";
import { load, _PAGE_TITLE } from "./../+page";

export const GET = async ({ url, params }) => {
  const base_url = (process.env.BASE_URL ?? url.origin) + "/blog/";

  const feed = create({ encoding: "utf-8" }).ele("feed", {
    xmlns: "http://www.w3.org/2005/Atom",
  });
  const pages = (await load()).pages;

  feed.ele("title").txt(_PAGE_TITLE).up();
  feed.ele("link", { href: base_url, rel: "self" }).up();
  feed.ele("updated").txt(pages[0].attributes.date).up();
  feed.ele("author").ele("name").txt("silver_volt4").up().up();

  for (let entry of pages) {
    feed
      .ele("entry")
      .ele("id")
      .txt(entry.slug)
      .up()
      .ele("title")
      .txt(entry.attributes.title)
      .up()
      .ele("summary")
      .txt(entry.attributes.description)
      .up()
      .ele("updated")
      .txt(entry.attributes.date)
      .up()
      .ele("link", { href: "/blog/" + entry.slug })
      .up();
  }

  return new Response(feed.end(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
