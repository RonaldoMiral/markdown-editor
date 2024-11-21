<script lang="ts">
  import { getContext, onMount, tick } from "svelte";
  import {
    filenameFields,
    editFile,
    files,
    createUntitledFileName,
    db, md, type IFile
  } from "./shared.svelte";

  let filenameInput: HTMLInputElement;
  const close = './images/icon-close.svg';
  let { ...file }: IFile = $props();
  let filename = $state(file.filename);
  
  function focusTab(id: number) {
    for(let file of files) {
      file.active = file.id === id;
      if(file.id === id) {
        md.markdown = file.markdown;
      }
    }
  }
  
  async function handleOnKeydwon(event: KeyboardEvent) {
    if(event.key !== 'Enter') return;

    const targetFile = files.find( current => current.id === file.id);
    if(!targetFile) throw new Error('File not found!');

    if(filename === '') {
      const untitleFile = createUntitledFileName();
      targetFile.filename = untitleFile;
      filename = untitleFile;
      targetFile.edit = false;
    } else {
      targetFile.filename = filename;
      targetFile.edit = false;
    }

    targetFile.markdown = md.markdown;
    if(targetFile.isNew) {
      if(files.length > 1) {
        const lastActiveFile = files.find( last => last.id === targetFile.lastActiveFileId);
        if(!lastActiveFile) throw new Error('Last active file not found!');
        targetFile.lastActiveFileId = lastActiveFile.id;
        await db.save($state.snapshot(lastActiveFile));
      }

      targetFile.isNew = false;
    }

    await db.save($state.snapshot(targetFile));
  }


  onMount(() => {
    console.log($state.snapshot(files));
    filenameFields.set(file.id, filenameInput);
    if(file.edit) {
      filenameInput.placeholder = createUntitledFileName();
      filenameInput.focus();
    }
  });
  
</script>


<div class="wrapper" 
  class:active={file.active}
  onclick={() => focusTab(file.id)}
  onkeydown={(e: KeyboardEvent) => e.key === 'Enter' && focusTab(file.id)}
  role="button"
  tabindex="0"
>
  <span
    class:edit={file.edit}
    ondblclick={() => {
      editFile(filenameInput, true);
    }}
    role="button"
    tabindex="0"
  >{filename}</span>

  <input
    type="text" 
    class="file-name"
    class:edit={file.edit}
    bind:value={filename}
    bind:this={filenameInput}
    onkeydown={(e) => handleOnKeydwon(e)}
    onblur={() => editFile(filenameInput, false)}
  />

  <button class="close" class:edit={file.edit}><img src={close} alt=""></button>
</div>

<style>
  span {
    font-family: var(--fm-roboto-reg);
    color: var(--blc-100);
    flex-grow: 1;
  }
  span.edit {
    display: none;
  }

  .file-name {
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid var(--blc-100);
    color: var(--blc-100);
    font-family: var(--fm-roboto-reg);
    height: 3.2rem;
    display: none;
  }
  .file-name.edit {
    display: block;
  }

  .wrapper {
    min-width: 12rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 0 1.6rem;
    cursor: pointer;
    user-select: none;
  }
  .wrapper.active {
    background-color: var(--blc-900);
  }
  .wrapper:not(.active):hover {
    background-color: var(--blc-900);
    opacity: .6;
  }

  .wrapper:hover .close img {
    display: block;
  }

  .close {
    width: 1.2rem;
    height: 1.2rem;
    border: 0;
    outline: 0;
    background: transparent;
    transform: translateY(1px);
    cursor: pointer;
  }
  .close.edit {
    display: none;
  }
  
  .close img {
    width: 100%;
    height: 100%;
    display: none;
  }

  .wrapper.active .close img {
    display: block;
  }


</style>