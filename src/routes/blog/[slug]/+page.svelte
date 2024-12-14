<script lang="ts">
  import type { attributes } from "../+page";
  import { _tagline } from "../+page";

  let { data } = $props();

  const pageAttributes: attributes = data.page.attributes;
  const tagline = $derived(`${pageAttributes.title} | ${_tagline}`);
</script>

<svelte:head>
  <title>{tagline}</title>
  <meta property="og:title" content={tagline} />
  <meta property="og:type" content="website" />
  <meta property="og:description" content={data.page.attributes.description} />
  <meta
    property="article:published_time"
    content={new Date(data.page.attributes.date).toISOString()}
  />
  <meta name="theme-color" content="#ffffea" />
</svelte:head>

<a href="/blog">Go back</a>
<h1 class="h0" style="margin-top: 0.5em;">{pageAttributes.title}</h1>
<p class="sub-h0">
  posted: {new Date(pageAttributes.date).toLocaleDateString()}
</p>


{@html data.page.html}
