<script>
  import Skill from "../components/Skill.svelte";
  import {
    mdiLanguagePython,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiLanguageCsharp,
    mdiLinux,
    mdiBash,
    mdiDatabase,
    mdiGit,
  } from "@mdi/js";
  import svelteLogo from "$lib/assets/icons/svelte.svgpath?raw";
  import godotLogo from "$lib/assets/icons/godot.svgpath?raw";
  import netteLogo from "$lib/assets/icons/nette.svgpath?raw";
  import phpLogo from "$lib/assets/icons/php.svgpath?raw";
  import dartLogo from "$lib/assets/icons/dart.svgpath?raw";
  import flutterLogo from "$lib/assets/icons/flutter.svgpath?raw";
  import t from "$lib/i18n";
</script>

<h1 class="heading">
  {$t("homepage.techstack.title")}
</h1>

<div class="section">
  <h2>{$t("homepage.techstack.langs")}</h2>
  <div class="gridlet">
    <Skill
      color="#f5de19"
      icon={mdiLanguageJavascript}
      name="JavaScript"
      confidence={0.8}
    />
    <Skill color="#7184de" icon={phpLogo} name="PHP" confidence={0.8} />
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
    <Skill color="#b4283a" icon={mdiDatabase} name="SQL" confidence={0.4} />
    <Skill color="#29b6f6" icon={dartLogo} name="Dart" confidence={0.35} />
    <Skill
      color="#bc74d9"
      icon={mdiLanguageCsharp}
      name="C#"
      confidence={0.3}
    />
  </div>
  <h2>{$t("homepage.techstack.frameworks")}</h2>
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
    <Skill color="#29b6f6" icon={flutterLogo} name="Flutter" confidence={0.2} />
  </div>
  <h2> {$t("homepage.techstack.othertools")}</h2>
  <div class="gridlet">
    <Skill color="#ffbb00" icon={mdiLinux} name="Linux" confidence={0.8} />
    <Skill color="#4da925" icon={mdiBash} name="Bash" confidence={0.4} />
    <Skill color="#f44d27" icon={mdiGit} name="Git" confidence={0.4} />
  </div>
</div>
