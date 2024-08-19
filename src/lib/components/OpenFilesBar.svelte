<script>
	import File from './File.svelte';

	let hamburgerIcon = 'assets/icon-menu.svg';
	const saveIcon = 'assets/icon-save.svg';
</script>

<div class="open-files-container">
	<button class="hamburger"><img src={hamburgerIcon} alt="Open menu" /></button>
	<div class="open-files">
		<File />
	</div>
	<div class="actions">
		<button>
			<svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1
          1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
					fill="#7C8187"
				/>
      </svg
			>
		</button>
		<button>
			<img src={saveIcon} alt="Delete file" />
			<b>Save Changes</b>
		</button>
	</div>
</div>

<style>
	.open-files-container {
		background-color: var(--black-800);
		font-family: 'Roboto', system-ui;
		height: 5.6rem;
		width: 100%;

		display: grid;
		grid-template-columns: auto 1fr auto;
	}

	.open-files {
		display: flex;
		overflow-x: scroll;
		scrollbar-width: none;
	}

	.hamburger {
		background-color: var(--black-700);
		aspect-ratio: 1/1;
		display: grid;
		place-items: center;
		cursor: pointer;
	}

  .hamburger:hover {
    background-color: var(--orange);
  }

	.actions {
		display: flex;
		align-items: center;

		gap: 2.4rem;
		margin-left: 2.4rem;
	}

	.actions > * {
		cursor: pointer;
	}

	.actions button:first-child:hover svg path {
    fill: var(--orange);
	}

	.actions button:last-child {
		width: 4rem;
		height: 4rem;
		background-color: var(--orange);
		border-radius: 0.4rem;
		margin-right: 0.8rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.actions button:last-child b {
		display: none;
	}

  .actions button:last-child:hover {
    background-color: var(--orange-hover);
  }

	@media (min-width: 768px) {
		.actions button:last-child {
			width: 15.2rem;
			padding: 0 1.6rem;
			gap: 0.8rem;
		}

		.actions button:last-child b {
			display: block;
			color: var(--black-100);
			font-weight: 200;
		}
	}
</style>
