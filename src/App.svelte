<script lang="ts">
  import { onMount, setContext } from "svelte";
  import Editor from "./lib/Editor.svelte";
  import FileBar from "./lib/FileBar.svelte";
</script>

<main>
  <FileBar />
  <Editor />
</main>

<style>

  main {
    background-color: var(--blc-1000);
    height: 100vh;
    max-height: 100vh;

    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>