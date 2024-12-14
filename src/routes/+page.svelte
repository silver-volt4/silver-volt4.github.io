<script lang="ts">
  import Skills from "$lib/parts/Skills.svelte";
  import Projects from "$lib/parts/Projects.svelte";
  import { page } from "$app/stores";
  import Czechia from "$lib/components/Czechia.svelte";

  const tagline = "Daniel's landfill of weird things";
</script>

<svelte:head>
  <title>{tagline}</title>
  <meta
    property="og:image"
    content="https://avatars.githubusercontent.com/u/35656715"
  />
  <meta property="og:title" content={tagline} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.toString()} />
  <meta
    property="og:description"
    content="I make stuff. Some stupid, some less so."
  />
  <meta name="theme-color" content="#ffffea" />
</svelte:head>

<div>
  <p style="margin-top:0">
    A wild website appears! You appear to have landed at my website. Welcome!
  </p>
  <h1 class="heading">About me</h1>
  <p>
    Hi, I'm Daniel, a programmer and CS student @ FIT CTU from Czechia <Czechia />.
  </p>
  <p>
    I mostly develop for the web, both on the front-end and back-end. I've also toyed around with mobile app development before.<br>
    Simply put; I like creating things that ordinary people can interact with and find useful.
  </p>
</div>

<Skills />
<Projects />
