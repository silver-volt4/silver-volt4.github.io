<script lang="ts">
  /* @ts-ignore */
  import SvgIcon from "@jamescoyle/svelte-icon/src/svg-icon.svelte";

  interface Props {
    color: string;
    icon: any;
    name: string;
    confidence: number;
  }

  let {
    color,
    icon,
    name,
    confidence
  }: Props = $props();
</script>

<div class="skill" style:--color={color}>
  <div class="title">
    <div class="icon">
      <SvgIcon type="mdi" path={icon} size={32}></SvgIcon>
    </div>
    <span class="name" style:color>
      {name}
    </span>
  </div>
  <div class="bar">
    <div
      class="confidence {confidence >= 1 ? 'full' : ''}"
      style:width="{confidence * 100}%"
    ></div>
  </div>
</div>

<style lang="scss">
  @use "$lib/style/constants.scss";
  @use "sass:color";

  .skill {
    display: inline-flex;
    flex-direction: column;
    border-radius: 4px;
    box-sizing: content-box;
    background: constants.$darkBack;
  }

  .title {
    display: flex;
    gap: 16px;
    height: 100%;
    user-select: none;

    .icon {
      padding: 4px 8px;
      display: flex;
      align-items: center;
      color: constants.$darkBack;
      background-color: var(--color);
      border-top-left-radius: 4px;
    }

    .name {
      font-size: 18px;
      padding: 4px 0;
      text-transform: uppercase;
      letter-spacing: 2px;
      line-height: 20px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
    }
  }

  .bar {
    background-color: color.adjust(constants.$darkBack, $lightness: 5%);
    border-radius: 0 0 4px 4px;

    .confidence {
      background-color: var(--color);
      opacity: 0.4;
      border-bottom-left-radius: 4px;

      &.full {
        border-bottom-right-radius: 4px;
      }
    }
  }

  .bar,
  .bar > * {
    width: 100%;
    height: 4px;
  }
</style>
