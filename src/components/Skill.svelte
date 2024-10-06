<script lang="ts">
    import SvgIcon from "@jamescoyle/svelte-icon/src/svg-icon.svelte";

    export let color: string;
    export let icon: any;
    export let name: string;
    export let variant: "light" | "dark" = "light";
    export let confidence: number;
</script>

<div class="skill {variant}" style:background={color}>
    <div class="title">
        <SvgIcon type="mdi" path={icon} size={32}></SvgIcon>
        <span class="name">
            {name}
        </span>
    </div>
    <div class="bar">
        <div class="confidence" style:width="{confidence * 100}%" />
    </div>
</div>

<style lang="scss">
    @import "../constants.scss";

    .skill {
        display: inline-block;
        width: 240px;
        height: 60px;
        border-radius: 8px;
        padding: 8px;
        box-sizing: content-box;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
    }

    .title .name {
        font-size: 24px;
    }

    .bar, .bar > * {
        width: 100%;
        height: 10px;
        border-radius: 5px;
    }

    @mixin variant($type, $color) {
        .#{$type} {
            color: $color;

            .bar {
                background-color: transparentize($color, 0.7);

                .confidence {
                    background-color: $color;
                }
            }
        }
    }

    @include variant("light", $light);
    @include variant("dark", $dark);
</style>
