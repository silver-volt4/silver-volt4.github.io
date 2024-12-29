export const prerender = true
import { json } from '@sveltejs/kit';
import { create } from "xmlbuilder2";
import { load, _tagline } from "./../+page.ts";

const blog = "https://silver-volt4.github.io/blog/"

export const GET = async ({ params }) => {
    const feed = create({encoding: "utf-8"}).ele("feed", {xmlns: "http://www.w3.org/2005/Atom"});
    const pages = (await load()).pages;

    feed.ele("title").txt(_tagline).up();
    feed.ele("link", {href: blog, rel: "self"}).up();
    feed.ele("updated").txt(pages[0].attributes.date).up();
    feed.ele("author")
        .ele("name").txt("silver_volt4").up()
    .up();


    for(let entry of pages) {
        feed.ele("entry")
            .ele("title").txt(entry.attributes.title).up()
            .ele("summary").txt(entry.attributes.description).up()
            .ele("updated").txt(entry.attributes.date).up()
            .ele("link", {href: blog + entry.slug}).up()
    }

       return new Response(
         feed.end()
         
        /* `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
 <title>Example Feed</title>
 <subtitle>A subtitle.</subtitle>
 <link href="http://example.org/feed/" rel="self"/>
 <link href="http://example.org/"/>
 <updated>2003-12-13T18:30:02Z</updated>
 <author>
   <name>John Doe</name>
   <email>johndoe@example.com</email>
 </author>
 <id>urn:uuid:60a76c80-d399-11d9-b91C-0003939e0af6</id>
 <entry>
   <title>Atom-Powered Robots Run Amok</title>
   <link href="http://example.org/2003/12/13/atom03"/>
   <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>
   <updated>2003-12-13T18:30:02Z</updated>
   <summary>Some text.</summary>
 </entry>
</feed>` */
, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
