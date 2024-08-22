<script>
	import EditorBody from '../lib/components/EditorBody.svelte';
	import FieldLabel from '../lib/components/FieldLabel.svelte';
	import OpenFilesBar from '../lib/components/OpenFilesBar.svelte';
	import PreviewBody from '../lib/components/PreviewBody.svelte';

  import data from './../lib/utils/data.json';

  let markdown = data[1].content;
</script>

<main>
	<OpenFilesBar />
	<div class="editor-body">
		<FieldLabel />
		<FieldLabel label="preview" />
		<EditorBody bind:markdown />
		<PreviewBody {markdown} />
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr;
	}

	@media (min-width: 768px) {
		.editor-body {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: auto 1fr;
			position: relative;
		}

		.editor-body::after {
			content: '';
			background-color: var(--black-600);
			width: 1px;
			height: 100%;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
