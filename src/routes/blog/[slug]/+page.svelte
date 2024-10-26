<script>
    import { _tagline } from "../+page";
    import { page } from "$app/stores";

    let { data } = $props();

    const tagline = $derived(`${data.page.attributes.title} | ${_tagline}`);
</script>

<svelte:head>
    <title>{tagline}</title>
    <meta property="og:title" content={tagline} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={data.page.attributes.description} />
    <meta property="article:published_time" content={new Date(data.page.attributes.date).toISOString()}>
    <meta name="theme-color" content="#ffffea">
</svelte:head>

<a href="/blog">Go back</a>

{@html data.page.html}
