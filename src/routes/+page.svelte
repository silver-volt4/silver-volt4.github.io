<script lang="ts">
  import Skills from "$lib/parts/Skills.svelte";
  import Projects from "$lib/parts/Projects.svelte";
  import cz from "$lib/assets/images/czechia.svg";
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
