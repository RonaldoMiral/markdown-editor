<script>
	import Block from './Block.svelte';
	import Heading from './Heading.svelte';
	import OrderedList from './OrderedList.svelte';
	import Paragraph from './Paragraph.svelte';
	import UnOrderedList from './UnOrderedList.svelte';

	import {
		isHeading,
		isCodeBlock,
		isParagraph,
		isOrderedList,
		isUnOrderedList,
		isBlockQuote
	} from './../utils/regex.js';

	export let markdown;

	// $: markdowns = markdown.split(/(```[\s\S]*?```)|(?:\n{2,})/g);
	$: markdowns = markdown.split(/(```[\s\S]*?```)|(?:\n{2,})|(?<=- .+?)\n/g);
	$: tokens = markdowns.filter((token) => token !== undefined && token !== '');
	// $: console.log(tokens);
</script>

<div class="container">
	{#each tokens as token}
		{#if isHeading(token)}
			<Heading {token} />
		{:else if isParagraph(token)}
			<Paragraph {token} />
		{:else if isOrderedList(token)}
			<OrderedList {token} />
		{:else if isUnOrderedList(token)}
			<UnOrderedList {token} />
		{:else if isBlockQuote(token)}
			<Block {token} />
		{:else if isCodeBlock(token)}
			<Block {token} />
		{/if}
	{/each}
</div>

<style>
	.container {
		background-color: var(--black-1000);
		display: none;
		color: var(--black-100);
		font-family: 'Roboto Slab', system-ui;
		padding: 1.6rem 1.6rem 2.4rem;
		height: 100%;
		text-wrap: wrap;
	}

	@media (min-width: 768px) {
		.container {
			display: grid;
			align-content: start;
			gap: 2rem;
		}
	}
</style>
