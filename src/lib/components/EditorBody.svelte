<script>
	export let markdown;
  let textarea;

	function insertTab(e) {
		if (e.key !== 'Tab') return;
		e.preventDefault();

		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const tabSize = '\t'.length;
		markdown = markdown.substring(0, start) + '\t' + markdown.substring(end);
    textarea.style.caretColor = 'transparent';
    
		setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + tabSize;
      textarea.style.caretColor = 'auto';
		}, 0);
	}
</script>

<div class="container">
	<textarea name="" id="" on:keydown={insertTab} bind:this={textarea} bind:value={markdown}></textarea>
</div>

<style>
	.container {
		height: 100%;
		padding: 1.6rem 1.6rem 2.4rem;
		background-color: var(--black-1000);
		font-family: 'Roboto Mono', system-ui;
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
		/* Tabulações */
		tab-size: 4;
		-moz-tab-size: 4; /* Suporte para navegadores Mozilla */
		-o-tab-size: 4; /* Suporte para navegadores Opera */
	}
</style>
