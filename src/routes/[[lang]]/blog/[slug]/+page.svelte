<script lang="ts">
  /* @ts-ignore */
  import SvgIcon from "@jamescoyle/svelte-icon/src/svg-icon.svelte";
  import { mdiArrowLeft as Back } from "@mdi/js";

  import PageInfo from "$lib/components/PageInfo.svelte";
  import t from "$lib/i18n";
  import { buildCurrentLangUrl } from "$lib/i18n/util.svelte";
  import type { Attributes } from "../pages";

  let { data } = $props();

  const pageAttributes: Attributes = data.page.attributes;
  const PAGE_TITLE = $derived(`${pageAttributes.title} | ${$t("blog.title")}`);
</script>

<svelte:head>
  <PageInfo title={PAGE_TITLE} description={pageAttributes.description} />
</svelte:head>

<a class="back" href={buildCurrentLangUrl("/blog")}>
  <SvgIcon type="mdi" path={Back} size={24} />
  <span>
    {$t("blog.back")}
  </span>
</a>
<h1 class="h0" style="margin-top: 0.5em;">{pageAttributes.title}</h1>
<p class="sub-h0">
  {$t("blog.posted")}: {new Date(pageAttributes.date).toLocaleDateString()}
</p>

<article class="md">
  {@html data.page.html}
</article>

<style lang="scss">
  @use "$lib/style/constants.scss";

  .back {
    display: inline-flex;
    padding: 8px 16px;
    background-color: constants.$darkBack;
    color: constants.$light;
    text-decoration: none;
    align-self: center;
    border-radius: 4px;
    align-items: center;
    gap: 8px;
  }

  article.md :global(img) {
    max-width: 100%;
  }
</style>
