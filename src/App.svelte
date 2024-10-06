<script lang="ts">
  import Skills from "./parts/Skills.svelte";
  import Projects from "./parts/Projects.svelte";
</script>

<main>
  <header class="ps">
    <img
      class="pfp"
      src="https://avatars.githubusercontent.com/u/35656715"
      alt="Profile picture"
    />
    <div class="vbox">
      <h1>Daniel's landfill of weird things</h1>
      <em>I make stuff. Some stupid, some less so.</em>
    </div>
  </header>

  <div class="ps">
    <p>
      You've stumbled upon my webpage! Hi, I'm Daniel, a programmer and CS
      student from Czechia!
    </p>
    <p>
      I've been tinkering with computers and code since as early as 2020, and
      I've got some experience under my belt.
    </p>
  </div>

  <Skills />
  <Projects />
</main>

<style lang="scss">
  @media screen and (max-width: 600px) {
    header {
      flex-direction: column;
    }
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 48px;
    margin-bottom: 48px;
    padding-bottom: 32px;
    border-bottom: solid 1px #ffffea;

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
</style>
