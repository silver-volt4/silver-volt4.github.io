<script lang="ts">
  import Skills from "$lib/parts/Skills.svelte";
  import Projects from "$lib/parts/Projects.svelte";
  import Czechia from "$lib/components/Czechia.svelte";
  import PageInfo from "$lib/components/PageInfo.svelte";
  import { _PAGE_SUBTITLE, _PAGE_TITLE } from "./+layout";
</script>

<svelte:head>
  <PageInfo title={_PAGE_TITLE} description={_PAGE_SUBTITLE} />
</svelte:head>

<div>
  <p style="margin-top:0">
    A wild website appears! You appear to have landed at my website. Welcome!
  </p>
  <h1 class="heading">About me</h1>
  <p>
    Hi, I'm Daniel, a programmer and CS student @ FIT CTU from Czechia <Czechia
    />.
  </p>
  <p>
    I mostly develop for the web, both on the front-end and back-end. I've also
    toyed around with mobile app development before.<br />
    Simply put; I like creating things that ordinary people can interact with and
    find useful.
  </p>
</div>

<Skills />
<Projects />
