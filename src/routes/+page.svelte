<script lang="ts">
	import Buttons from './Buttons.svelte';
	import Counter from './Counter.svelte';
	import UtilityTable from './UtilityTable.svelte';

	let utility = 50;
</script>

<div class="wrap">
	<UtilityTable />

	<Counter utility={utility ?? 0} />

	<input type="range" min="-100" max="100" bind:value={utility} />

	<Buttons on:left={() => console.log('left')} on:right={() => console.log('right')} />
</div>

<style>
	.wrap {
		max-width: 1400px;
		margin: 0 auto;
	}
</style>
