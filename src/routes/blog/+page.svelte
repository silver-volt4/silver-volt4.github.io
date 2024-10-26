<script>
    export let data;
</script>

<div>
    {#each data.pages as page}
        <a class="default post" href="/blog/{page.slug}">
            <p class="title">{page.attributes.title}</p>
            <p class="description">{page.attributes.description}</p>
        </a>
    {/each}
</div>

<style lang="scss">
    @use "$lib/style/constants.scss";
    @use "sass:color";

    .post {
        display: block;
        background-color: color.adjust(constants.$dark, $lightness: 10);
        padding: 8px 16px;
        border-radius: 8px;

        p {
            margin: 0;
        }

        p.title {
            font-weight: bold;
            font-size: 1.8em;
            display: block;
        }
    }
</style>
