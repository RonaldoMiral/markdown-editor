<script>
  const newFileIcon = 'assets/icon-document.svg';
  let inputValue = 'welcome.md';
  let saved = false;
</script>

<div class="open-file">
  {#if saved}
    <b>Markdown</b>
  {:else}  
    <img src={newFileIcon} alt="New File">
    <div class="document-name-container">
      <p>Document Name</p>
      <input type="text" bind:value={inputValue} name="" id="">
    </div>
  {/if}
</div>


<style>
  .open-file {
    display: flex;
    align-items: center;
    padding: 0 2.4rem;
    height: 100%;
    cursor: pointer;
    position: relative;
    gap: 1.6rem;
    display: none;
  }

  .open-file:first-child {
    display: flex;
  }
  
  .open-file::after {
    content: '';
    background-color: var(--black-600);
    width: .1rem;
    height: calc(100% - 3.2rem);
    position: absolute;
    right: 0;
  }

  b {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--black-100);
  }
  
  .document-name-container {
    display: grid;
    font-weight: lighter;
    text-wrap: nowrap;
  }
  
  .document-name-container p {
    font-size: var(--ed-ft-lig-small);
    color: var(--black-400);
  }
  
  .document-name-container input {
    font-size: var(--ed-ft-reg-small);
    font-weight: lighter;
    text-transform: lowercase;
    color: var(--black-100);
    border: 0;
    outline: 0;
    width: 100%;
    background-color: transparent;
  }

  .document-name-container input:focus {
    border-bottom: 1px solid var(--black-100);
  }

  @media (min-width: 768px) {
    .open-file {
      display: flex;
    }
  }
</style>