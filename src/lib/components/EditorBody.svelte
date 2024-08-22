<script>
  export let markdown;
  // console.log(markdown);
</script>

<div class="container">
  <textarea name="" id="" bind:value={markdown}></textarea>
</div>


<style>
  .container{
    height: 100%; 
    padding: 1.6rem 1.6rem 2.4rem;
    background-color: var(--black-1000);
    font-family: "Roboto Mono", system-ui;
  }
  
  textarea {
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    background-color: inherit;
    scrollbar-width: none;
    resize: none;
    line-height: 1.5;
    color: var(--black-400);
    font-family: inherit;
  }
</style>