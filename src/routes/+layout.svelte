<script lang="ts">
  import Skills from "$lib/parts/Skills.svelte";
  import Projects from "$lib/parts/Projects.svelte";
  /* @ts-ignore */
  import SvgIcon from "@jamescoyle/svelte-icon/src/svg-icon.svelte";

  import { mdiGithub } from "@mdi/js";
  import schoolGithub from "$lib/assets/icons/schoolGithub.svgpath?raw";
  import discord from "$lib/assets/icons/discord.svgpath?raw";

  import cz from "$lib/assets/images/czechia.svg";

  function showDiscord() {
    alert(
      "My username on Discord is \"@silver_volt4\".\nSorry for the plain and boring alert window, I'm writng this at nearly 11 PM and I'm tired :(",
    );
  }
</script>

<head>
  <title>Daniel's landfill of weird things</title>
</head>

<main class="ps">
  <header>
    <a href="/" class="backlink">
      <img
        class="pfp"
        src="https://avatars.githubusercontent.com/u/35656715"
        alt="Avatar"
      />
      <div class="vbox">
        <h1>Daniel's landfill of weird things</h1>
        <em>I make stuff. Some stupid, some less so.</em>
      </div>
    </a>
  </header>

  <slot />

  <footer>
    <div>
      <b>silver_volt4</b>
    </div>
    <div class="links">
      <a
        href="https://github.com/silver-volt4"
        target="_blank"
        data-tooltip="My GitHub profile"
      >
        <SvgIcon type="mdi" path={mdiGithub} size={32}></SvgIcon>
      </a>
      <a
        href="https://github.com/sykdan"
        target="_blank"
        data-tooltip="My school GitHub profile"
      >
        <SvgIcon type="mdi" path={schoolGithub} size={32}></SvgIcon>
      </a>
      <span
        data-tooltip="Discord"
        style="cursor:pointer"
        on:click={showDiscord}
      >
        <SvgIcon type="mdi" path={discord} size={32}></SvgIcon>
      </span>
    </div>
  </footer>
</main>

<style lang="scss">
  @import "$lib/style/constants.scss";

  @media screen and (max-width: 600px) {
    header {
      flex-direction: column;
    }
  }

  a.backlink {
    color: unset;
    text-decoration: unset;
    margin: 0
  }

  header a.backlink,
  footer {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  header {
    justify-content: center;
    margin-bottom: 32px;
    border-bottom: solid 1px $light;

    .vbox {
      display: flex;
      flex-direction: column;
    }

    h1 {
      display: inline-block;
      font-size: 48px;
      margin: 0;
    }

    .pfp {
      height: 128px;
      border-radius: 100%;
    }
  }

  footer {
    padding-top: 32px;
    border-top: solid 1px $light;
    display: flex;
    justify-content: space-between;
  }

  .links {
    display: flex;
    gap: 8px;
    a {
      color: $light;
    }
  }
</style>
