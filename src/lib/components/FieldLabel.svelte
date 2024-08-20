<script>
	const previewIcon = 'assets/icon-show-preview.svg';
	export let label = 'markdown';
	const active = label === 'preview';
</script>

<div class="container" class:active>
	<b>{label}</b>
	<button><img src={previewIcon} alt="Preview" /></button>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4.2rem;
		padding: 0 1.6rem;
		background-color: var(--black-900);
		font-family: 'Roboto', system-ui;    
	}

  .container.active {
    display: none;
  }

	.container b {
		font-weight: 400;
		letter-spacing: 0.2rem;
		color: var(--black-100);
		text-transform: capitalize;
	}

	.container button {
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.container.active {
			display: flex;
		}
    
    .container:not(.active) button {
      display: none;
    }
	}
</style>
