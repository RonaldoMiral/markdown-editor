<script>
	import { block_quote_regex } from './../utils/regex.js';
	export let token;

	$: str = '';
	$: isCodeBlock = token.includes('```');

	$: {
		if (isCodeBlock) {
			let code = token.replace(/```/g, '');
			str = code.match(/^\n/) ? code.replace(/^\n/, '') : code;
		} else str = token.replace(block_quote_regex, '');
	}
</script>

<div class="container" class:isCodeBlock>
	<p>{str}</p>
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
