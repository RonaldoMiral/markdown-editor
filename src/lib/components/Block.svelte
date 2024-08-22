<script>
	export let token;
	export let block;

	const isCodeBlock = token.includes('```');
	const quote = isCodeBlock ? token.replace(block, '').slice(1) : token.replace(block, '');
</script>

<div class="container" class:isCodeBlock>
	<p>{quote}</p>
</div>

<style>
	.container {
		background-color: var(--black-800);
		padding: 2.4rem;
		border-radius: 0.4rem;
		position: relative;
	}

	.container p {
		font-size: 1.4rem;
		line-height: 2.4rem;
		font-weight: var(--ft-wt-700);
		white-space: pre-wrap;
	}

	.container:not(.isCodeBlock)::before {
		content: '';
		height: 100%;
		width: 0.4rem;
		background-color: var(--orange);
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		border-top-left-radius: 0.4rem;
		border-bottom-left-radius: 0.4rem;
	}
</style>
