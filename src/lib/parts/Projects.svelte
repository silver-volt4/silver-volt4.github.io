<script>
  import Project from "../components/Project.svelte";
</script>

<h1 class="ps heading">Projects</h1>

<div class="ps">
  <div class="gridlet">
    <Project
      src="/projects/silverbot.png"
      href="https://github.com/Silver-Volt4/SilverBot"
      color="#4ed8da"
      name="SilverBot"
      variant="dark"
      additionalClass="end"
    >
      A simple Discord bot all about a fictional hedgehog!
    </Project>
    <Project
      src="/projects/puzzleprism.png"
      href="https://sykdan2188.itch.io/puzzle-prism"
      color="#1f1f1f"
      name="Puzzle Prism"
      variant="light"
      additionalClass="top"
    >
      A VR puzzle game made in Godot that I made as my High School final
      project.
    </Project>
    <Project
      src="/projects/hexalema.png"
      href="https://sykdan.github.io/hexalema"
      color="#980691"
      name="Hexalema"
      variant="light"
      additionalClass="top"
    >
      A tabletop game for two players closely resembling the "Royal Game of Ur".
    </Project>
    <Project
      src="/projects/yamb.png"
      href="https://sykdan.github.io/kostky"
      color="#081d77"
      name="Yamb"
      variant="light"
      additionalClass="top"
    >
      A mobile app for the Bosnian dice game Yamb.
    </Project>
  </div>
</div>
