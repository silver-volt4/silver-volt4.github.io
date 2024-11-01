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
    mdiDatabase,
    mdiGit,
  } from "@mdi/js";
  import svelteLogo from "$lib/assets/icons/svelte.svgpath?raw";
  import godotLogo from "$lib/assets/icons/godot.svgpath?raw";
  import netteLogo from "$lib/assets/icons/nette.svgpath?raw";
</script>

<h1 class="heading">Tech stack</h1>

<div class="section">
  <h2>Programming languages</h2>
  <div class="gridlet">
    <Skill
      color="#f5de19"
      icon={mdiLanguageJavascript}
      name="JavaScript"
      confidence={0.8}
    />
    <Skill color="#7a86b8" icon={mdiLanguagePhp} name="PHP" confidence={0.8} />
    <Skill
      color="#007acc"
      icon={mdiLanguageTypescript}
      name="TypeScript"
      confidence={0.5}
    />
    <Skill
      color="#ffdf40"
      icon={mdiLanguagePython}
      name="Python"
      confidence={0.5}
    />
    <Skill
      color="#b4283a"
      icon={mdiDatabase}
      name="SQL"
      confidence={0.4}
    />
    <Skill
      color="#bc74d9"
      icon={mdiLanguageCsharp}
      name="C#"
      confidence={0.3}
    />
  </div>
  <h2>Frameworks/Engines</h2>
  <div class="gridlet">
    <Skill color="#ff3e00" icon={svelteLogo} name="Svelte" confidence={0.9} />
    <Skill
      color="#478cbf"
      icon={godotLogo}
      name="Godot Engine"
      confidence={0.8}
    />
    <Skill
      color="#3484d2"
      icon={netteLogo}
      name="Nette Framework"
      confidence={0.7}
    />
  </div>
  <h2>Other tools</h2>
  <div class="gridlet">
    <Skill color="#ffbb00" icon={mdiLinux} name="Linux" confidence={0.8} />
    <Skill color="#4da925" icon={mdiBash} name="Bash" confidence={0.4} />
    <Skill color="#f44d27" icon={mdiGit} name="Git" confidence={0.4} />
  </div>
</div>
