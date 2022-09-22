<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	function handleKey(e: KeyboardEvent) {
		if (e.key == ' ') {
			dispatch('right');
		} else if (e.code == 'ArrowLeft') {
			dispatch('left');
		} else if (e.code == 'ArrowRight') {
			dispatch('right');
		}
	}
</script>

<svelte:window on:keydown={handleKey} />

<button class="left" on:click={() => dispatch('left')}> {'<'} Previous</button>
<button class="right" on:click={() => dispatch('right')}> Next {'>'}</button>

<style>
	button {
		position: absolute;
		bottom: 8px;

		width: calc((100% - 24px) / 2);
		height: 48px;

		border-radius: 8px;

		font-family: Arial, Helvetica, sans-serif;
		font-size: 20px;
		font-weight: bold;

		cursor: pointer;
	}

	.left {
		left: 8px;
	}

	.right {
		right: 8px;
	}
</style>
