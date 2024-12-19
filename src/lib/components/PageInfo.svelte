<script lang="ts">
    import { page } from "$app/stores";

    interface Props {
        title: string;
        description?: string;
    }

    let { title, description }: Props = $props();
</script>

<title>{title}</title>
<meta
    property="og:image"
    content="https://avatars.githubusercontent.com/u/35656715"
/>
<meta property="og:title" content={title} />
<meta property="og:type" content="website" />
<meta property="og:url" content={$page.url.toString()} />
{#if description}
    <meta property="og:description" content={description} />
{/if}
<meta name="theme-color" content="#ffffea" />
