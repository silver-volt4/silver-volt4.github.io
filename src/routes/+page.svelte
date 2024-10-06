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

<div>
  <p>
    You've stumbled upon my webpage! Hi, I'm Daniel, a programmer and CS student
    from Czechia <img src={cz} alt="Czech Flag" style="vertical-align:middle" />
  </p>
  <p>
    I've been tinkering with computers and code since as early as 2020, and I've
    got some experience under my belt.
  </p>
</div>

<Projects />
<Skills />
