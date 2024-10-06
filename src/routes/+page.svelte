<script lang="ts">
  import Skills from "$lib/parts/Skills.svelte";
  import Projects from "$lib/parts/Projects.svelte";
  /* @ts-ignore */
  import SvgIcon from "@jamescoyle/svelte-icon/src/svg-icon.svelte";

  import { mdiGithub } from "@mdi/js";
  import schoolGithub from "$lib/assets/icons/schoolGithub.svgpath?raw";
  import discord from "$lib/assets/icons/discord.svgpath?raw";

  function showDiscord() {
    alert(
      "My username on Discord is \"@silver_volt4\".\nSorry for the plain and boring alert window, I'm writng this at nearly 11 PM and I'm tired :(",
    );
  }
</script>

<head>
  <title>Daniel's landfill of weird things</title>
</head>

<main>
  <header class="ps">
    <img
      class="pfp"
      src="https://avatars.githubusercontent.com/u/35656715"
      alt="Avatar"
    />
    <div class="vbox">
      <h1>Daniel's landfill of weird things</h1>
      <em>I make stuff. Some stupid, some less so.</em>
    </div>
  </header>

  <div class="ps">
    <p>
      You've stumbled upon my webpage! Hi, I'm Daniel, a programmer and CS
      student from Czechia <img
        src="/res/czechia.svg"
        alt="Czech Flag"
        style="vertical-align:middle"
      />
    </p>
    <p>
      I've been tinkering with computers and code since as early as 2020, and
      I've got some experience under my belt.
    </p>
  </div>

  <Skills />
  <Projects />

  <footer class="ps">
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

  header,
  footer {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  header {
    justify-content: center;
    padding-bottom: 32px;
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
