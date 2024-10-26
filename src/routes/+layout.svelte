<script lang="ts">
  /* @ts-ignore */
  import SvgIcon from "@jamescoyle/svelte-icon/src/svg-icon.svelte";
  import { page } from "$app/stores";

  import { mdiGithub } from "@mdi/js";
  import schoolGithub from "$lib/assets/icons/schoolGithub.svgpath?raw";
  import discord from "$lib/assets/icons/discord.svgpath?raw";

  function showDiscord() {
    alert(
      "My username on Discord is \"@silver_volt4\".\nSorry for the plain and boring alert window, I'm writng this at nearly 11 PM and I'm tired :(",
    );
  }

  const LINKS = {
    "/": "About",
    "/blog": "Blog",
  };
</script>

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
    <nav>
      {#each Object.entries(LINKS) as [url, name]}
        <a href={url} class="{$page.url.pathname === url ? 'selected' : ''}">{name}</a>
      {/each}
    </nav>
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
      <button
        data-tooltip="Discord"
        style="cursor:pointer"
        on:click={showDiscord}
      >
        <SvgIcon type="mdi" path={discord} size={32}></SvgIcon>
      </button>
    </div>
  </footer>
</main>

<style lang="scss">
  @use "$lib/style/constants.scss";
  @use "sass:color";

  @media screen and (max-width: 600px) {
    header {
      flex-direction: column;
    }
  }

  a.backlink {
    color: unset;
    text-decoration: unset;
    margin: 0;
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
    border-bottom: solid 1px constants.$light;

    .vbox {
      display: flex;
      flex-direction: column;
    }

    a.backlink {
      margin-bottom: 32px;
    }

    nav {
      display: flex;
      a {
        flex: 1;
        display: block;
        font-size: 1.25em;
        color: constants.$light;
        text-decoration: none;
        padding: 4px;
        text-align: center;

        transition: background-color 0.1s;

        &:hover,
        &.selected:hover {
          background-color: color.adjust(constants.$light, $alpha: -0.8);
        }

        &.selected {
          background-color: color.adjust(constants.$light, $alpha: -0.9);
        }
      }
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
    border-top: solid 1px constants.$light;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }

  .links {
    display: flex;
    gap: 8px;
    a,
    button {
      background: none;
      border: none;
      display: inline;
      padding: 0;
      color: constants.$light;
    }
  }
</style>
