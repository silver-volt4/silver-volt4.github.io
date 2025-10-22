<script lang="ts">
  import Skills from "$lib/parts/Skills.svelte";
  import PageInfo from "$lib/components/PageInfo.svelte";
  import t, { locale } from "$lib/i18n";
</script>

<svelte:head>
  <PageInfo title={$t("common.title")} description={$t("common.subtitle")} />
</svelte:head>

<div>
  <p style="margin-top:0">
    {$t("homepage.welcome")}
  </p>
  <h1 class="heading">
    {$t("common.page-about")}
  </h1>
  <p>
    {$t("homepage.whoami")}
  </p>
  <p>
    {$t("homepage.whatido")}
    <br />
    {$t("homepage.mymission")}
  </p>
</div>

<Skills />
