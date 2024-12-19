<script lang="ts">
  import PageInfo from "$lib/components/PageInfo.svelte";
  import type { attributes } from "../+page";
  import { _PAGE_TITLE } from "../+page";

  let { data } = $props();

  const pageAttributes: attributes = data.page.attributes;
  const PAGE_TITLE = $derived(`${pageAttributes.title} | ${_PAGE_TITLE}`);
</script>

<svelte:head>
  <PageInfo title={PAGE_TITLE} description={pageAttributes.description} />
</svelte:head>

<a href="/blog">Go back</a>
<h1 class="h0" style="margin-top: 0.5em;">{pageAttributes.title}</h1>
<p class="sub-h0">
  posted: {new Date(pageAttributes.date).toLocaleDateString()}
</p>

{@html data.page.html}
