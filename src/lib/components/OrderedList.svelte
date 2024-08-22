<script>
 export let token;

 const items = token.split('\n');
 console.log(token);
</script>

<ol>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ol>

<style>
  ol {
    list-style: none;
    font-size: 14px;
    line-height: 24px;
    margin-left: 2.4rem;

  }
</style>