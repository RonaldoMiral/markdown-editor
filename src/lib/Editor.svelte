<script lang="ts">
  import { getContext } from "svelte";
  import { db, editFile, filenameFields, files, md, newFile } from "./shared.svelte";
  import type { IFile } from "./shared.svelte";
 
  async function saveFile() {
    const file = files.find( file => file.active);
    if(!file) throw new Error('File to save not found!');
    file.markdown = md.markdown;
    await db.save($state.snapshot(file));
  }

</script>

<div class="editor">
  <div class="file-mode">
    <b>Markdown</b>
    <div class="actions">
      <button onclick={() => newFile()}>new</button>
      <button onclick={() => saveFile()}>Save</button>
    </div>
  </div>
  <div class="txt-wrapper">
    <textarea bind:value={md.markdown} name="" id="" spellcheck="false"></textarea>
  </div>
</div>

<style>
  .editor {
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .file-mode {
    background-color: var(--blc-900);
    height: 3rem;
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .file-mode button {
    cursor: pointer;
  }

  .file-mode b {
    font-family: var(--fm-roboto-reg);
    letter-spacing: 2px;
    color: var(--blc-400);
    font-size: var(--ed-ft-reg-small);
    text-transform: uppercase;
    font-weight: 700;
  }

  .txt-wrapper {
    /* padding-top: 1.2rem; */
    padding-bottom: 1.6rem;
  }

  textarea {
    width: 100%;
    height: 100%;
    background-color: var(--blc-1000);
    color: var(--blc-400);
    font-family: var(--fm-roboto-lig);
    font-size: var(--ed-ft-lig-small);
    border: 0;
    outline: 0;
    resize: none;
    padding: 0 1.6rem;
    /* overflow: hidden; */
  }
</style>
