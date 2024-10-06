<script>
  import Skill from "../components/Skill.svelte";
  import {
    mdiLanguagePython,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiLanguageCsharp,
    mdiLanguagePhp,
    mdiLinux,
    mdiBash,
  } from "@mdi/js";
  import svelteLogo from "$lib/assets/icons/svelte.svgpath?raw";
  import godotLogo from "$lib/assets/icons/godot.svgpath?raw";
  import netteLogo from "$lib/assets/icons/nette.svgpath?raw";
</script>

<h1 class="ps heading">Skills</h1>

<div class="ps">
  <h2>Languages</h2>
  <div class="gridlet">
    <Skill
      color="#f5de19"
      icon={mdiLanguageJavascript}
      name="JavaScript"
      variant="dark"
      confidence={0.8}
    ></Skill>
    <Skill
      color="#7a86b8"
      icon={mdiLanguagePhp}
      name="PHP"
      variant="light"
      confidence={0.8}
    ></Skill>
    <Skill
      color="#007acc"
      icon={mdiLanguageTypescript}
      name="TypeScript"
      variant="light"
      confidence={0.5}
    ></Skill>
    <Skill
      color="#ffdf40"
      icon={mdiLanguagePython}
      name="Python"
      variant="dark"
      confidence={0.5}
    ></Skill>
    <Skill
      color="#bc74d9"
      icon={mdiLanguageCsharp}
      name="C#"
      variant="dark"
      confidence={0.3}
    ></Skill>
  </div>
  <h2>Frameworks/Engines</h2>
  <div class="gridlet">
    <Skill
      color="#ff3e00"
      icon={svelteLogo}
      name="Svelte"
      variant="light"
      confidence={0.9}
    ></Skill>
    <Skill
      color="#478cbf"
      icon={godotLogo}
      name="Godot Engine"
      variant="light"
      confidence={0.8}
    ></Skill>
    <Skill
      color="#3484d2"
      icon={netteLogo}
      name="Nette Framework"
      variant="light"
      confidence={0.7}
    ></Skill>
  </div>
  <h2>Other tools</h2>
  <div class="gridlet">
    <Skill
      color="#ffbb00"
      icon={mdiLinux}
      name="Linux"
      variant="dark"
      confidence={0.8}
    ></Skill>
    <Skill
      color="#4da925"
      icon={mdiBash}
      name="Bash"
      variant="light"
      confidence={0.4}
    ></Skill>
  </div>
</div>
