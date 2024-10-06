<script lang="ts">
    export let src: string;
    export let href: string;
    export let color: string;
    export let name: string;
    export let variant: "light" | "dark" = "light";
    export let additionalClass: string = "";
</script>

<a
    {href}
    style:--bg={color}
    class="project {additionalClass} {variant}"
    target="_blank"
>
    <div class="thumbnail" style="background-image:url({src})">
        <div class="gradient"></div>
    </div>
    <div class="bottom">
        <div class="title">
            {name}
        </div>
        <slot />
    </div>
</a>

<style lang="scss">
    @import "../constants.scss";

    .project {
        display: block;
        text-decoration: unset;
        width: 400px;
    }

    .thumbnail {
        border-radius: 8px 8px 0 0;
        background-repeat: no-repeat;
        height: 200px;
        background-size: cover;
    }

    .end .thumbnail {
        background-position: right;
    }

    .top .thumbnail {
        background-position-y: 50%;
    }

    .gradient {
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, transparent 50%, var(--bg) 100%);
    }

    .bottom {
        background-color: var(--bg);
        height: 80px;
        border-radius: 0 0 8px 8px;
        padding: 0px 16px 16px 16px;
    }

    .title {
        font-weight: bold;
        font-size: 24px;
    }

    @mixin variant($type, $color) {
        .#{$type} {
            color: $color;
        }
    }

    @include variant("light", $light);
    @include variant("dark", $dark);
</style>
