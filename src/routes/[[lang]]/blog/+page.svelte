<script lang="ts">
  /* @ts-ignore */
  import SvgIcon from "@jamescoyle/svelte-icon/src/svg-icon.svelte";
  import { mdiRss } from "@mdi/js";
  import { buildCurrentLangUrl } from "$lib/i18n/util.svelte";
  import PageInfo from "$lib/components/PageInfo.svelte";
  import t from "$lib/i18n/index";
  import type { Page } from "./pages";

  interface Props {
    pages: Page[];
  }

  let { data }: { data: Props } = $props();
</script>

<svelte:head>
  <PageInfo title={$t("blog.title")} />
</svelte:head>

<div class="posts">
  {#each data.pages as page}
    <a class="default post" href={buildCurrentLangUrl("/blog/" + page.slug)}>
      <p class="title">
        {page.attributes.title}
        <i class="date">
          {new Date(page.attributes.date).toLocaleDateString()}
        </i>
      </p>
      <p class="description">{page.attributes.description}</p>
    </a>
  {/each}

  <a class="rss" href={buildCurrentLangUrl("/blog/rss.xml")} target="_blank">
    <SvgIcon type="mdi" path={mdiRss} size={24} />
    <span> RSS feed </span>
  </a>
</div>

<style lang="scss">
  @use "$lib/style/constants.scss";
  @use "sass:color";

  .rss {
    display: inline-flex;
    padding: 8px 16px;
    background-color: orange;
    color: constants.$dark;
    text-decoration: none;
    align-self: center;
    border-radius: 100px;
    align-items: center;
    gap: 8px;
  }

  .posts {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .post {
    display: block;
    background-color: color.adjust(constants.$dark, $lightness: 10%);
    padding: 8px 16px;
    border-radius: 4px;

    p {
      margin: 0;
    }

    p.title {
      font-weight: bold;
      font-size: 1.8em;
      display: block;
    }

    .date {
      font-weight: normal;
      font-size: small;
    }
  }
</style>
