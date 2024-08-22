<script>
  export let token;
  export let unordered_list_regex;
  let items = token.split('\n');
  items = items.map(item => item.replace(unordered_list_regex, ''));
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    font-size: 14px;
    line-height: 24px;
    margin-left: 2.4rem;
  }
  
  li {
    margin-left: 1.6rem;
    position: relative;
  }
  
  li::before {
    content: '';
    width: .3rem;
    height: .3rem;
    background-color: var(--orange);
    border-radius: 50%;
    display: block;
    position: absolute;
    left: -1.6rem;
    top: 1.2rem;
  }
</style>