<script lang="ts">
  export interface ProjectAttrs {
    background: string;
    href: string;
    color: string;
    name: string;
    variant?: "light" | "dark";
    additionalClass?: string;
  }

  interface Props extends ProjectAttrs {
    children?: import("svelte").Snippet;
  }

  let {
    background,
    href,
    color,
    name,
    variant = "light",
    additionalClass = "",
    children,
  }: Props = $props();
</script>

<a
  {href}
  style:--bg={color}
  class="project {additionalClass} {variant}"
  target="_blank"
>
  <div class="thumbnail" style="background-image:url({background})">
    <div class="gradient"></div>
  </div>
  <div class="bottom">
    <div class="title">
      {name}
    </div>
    {@render children?.()}
  </div>
</a>

<style lang="scss">
  @use "$lib/style/constants.scss";

  .project {
    display: block;
    text-decoration: unset;
  }

  .thumbnail {
    border-radius: 4px 4px 0 0;
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
    min-height: 80px;
    border-radius: 0 0 4px 4px;
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

  @include variant("light", constants.$light);
  @include variant("dark", constants.$dark);
</style>
