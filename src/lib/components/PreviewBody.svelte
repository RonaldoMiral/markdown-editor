<script>
	import Block from "./Block.svelte";
	import Heading from "./Heading.svelte";
	import OrderedList from "./OrderedList.svelte";
	import Paragraph from "./Paragraph.svelte";
	import UnOrderedList from "./UnOrderedList.svelte";

  export let markdown;
  $: console.log(markdown);

  $: tokens = markdown.split(/\n{2,}/);

  const heading_regex = /^#+ /;
  const isHeading = token => token.match(heading_regex);

  const paragraph_regex = /^[a-zA-Z]/;
  const isParagraph = token => token.match(paragraph_regex);

  const ordered_list_regex = /^\d[.] /;
  const isOrderedList = token => token.match(ordered_list_regex);

  const unordered_list_regex = /^- /;
  const isUnOrderedList = token => token.match(unordered_list_regex);

  const block_quote_regex = /^> /;
  const isBlockQuote = token => token.match(block_quote_regex);

  const code_block_regex = /```/g;
  const isCodeBlock = token => token.match(code_block_regex);
</script>

<div class="container">
  {#each tokens as token}
    {#if (isHeading(token))}
      <Heading {token} {heading_regex} />
    {:else if isParagraph(token)}
      <Paragraph {token} />
    {:else if isOrderedList(token)}
      <OrderedList {token} />
    {:else if isUnOrderedList(token)}
      <UnOrderedList {token} {unordered_list_regex} />
    {:else if isBlockQuote(token)}
      <Block {token} block={block_quote_regex} />
    {:else if isCodeBlock(token)}
      <Block {token} block={code_block_regex} />
    {/if}
  {/each}
</div>

<style>
  .container {
    background-color: var(--black-1000);
    display: none;
    color: var(--black-100);
    font-family: "Roboto Slab", system-ui;
    padding: 1.6rem 1.6rem 2.4rem;
    height: 100%; 
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      align-content: start;
      gap: 2rem;
    }
  }
</style>