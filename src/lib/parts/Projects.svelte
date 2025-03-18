<script lang="ts">
  import Project from "../components/Project.svelte";
  import { type ProjectAttrs } from "$lib/components/Project.svelte";

  import SilverBot from "$lib/assets/images/projects/silverbot.png";
  import PuzzlePrism from "$lib/assets/images/projects/puzzleprism.png";
  import Hexalema from "$lib/assets/images/projects/hexalema.png";
  import Yamb from "$lib/assets/images/projects/yamb.png";

  import t from "$lib/i18n";

  const PROJECTS: { [key: string]: ProjectAttrs } = {
    silverbot: {
      background: SilverBot,
      href: "https://github.com/Silver-Volt4/SilverBot",
      color: "#4ed8da",
      name: "SilverBot",
      variant: "dark",
      additionalClass: "end",
    },
    puzzleprism: {
      background: PuzzlePrism,
      href: "https://sykdan2188.itch.io/puzzle-prism",
      color: "#1f1f1f",
      name: "Puzzle Prism",
      variant: "light",
      additionalClass: "top",
    },
    hexalema: {
      background: Hexalema,
      href: "https://sykdan.github.io/hexalema",
      color: "#980691",
      name: "Hexalema",
      variant: "light",
      additionalClass: "top",
    },
    yamb: {
      background: Yamb,
      href: "https://sykdan.github.io/kostky",
      color: "#081d77",
      name: "Yamb",
      variant: "light",
      additionalClass: "top",
    },
  };
</script>

<h1 class="heading">
  {$t("homepage.projects")}
</h1>
<div class="section">
  <div class="gridlet" style:--gr-width="350px">
    {#each Object.entries(PROJECTS) as [key, project] (key)}
      <Project {...project}>
        {@html $t("projects." + key)}
      </Project>
    {/each}
  </div>
</div>
