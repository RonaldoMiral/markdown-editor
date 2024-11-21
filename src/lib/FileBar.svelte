<script lang="ts">
  import File from "./File.svelte";
  import { db, files } from "./shared.svelte";
  import type { IFile } from "./shared.svelte";

  const menu = "./images/icon-menu.svg";
</script>

<div class="bar">
  <button class="menu-wrapper">
    <img src={menu} alt="" />
  </button>
  <div class="open-files">
    {#each files as file}
      <File {...file} /> 
    {/each}
  </div>
</div>

<style>
  .bar {
    height: 4rem;
    padding-right: 1.6rem;
    background-color: var(--blc-800);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
  }

  .menu-wrapper {
    padding: 0 1.6rem;
    height: 100%;
    cursor: pointer;
    background-color: var(--blc-1000);
    border: 0;
    outline: 0;
  }

  .open-files {
    display: flex;
    height: 100%;

    overflow: scroll;
    scrollbar-width: none;
  }

  .open-files::-webkit-scrollbar {
    display: none;
  }
</style>
