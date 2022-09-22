<script lang="ts">
	import Buttons from './Buttons.svelte';
	import Counter from './Counter.svelte';
	import UtilityTable from './UtilityTable.svelte';
</script>

<div class="wrap">
	<UtilityTable />

	<Counter />

	<Buttons on:left={() => console.log('left')} on:right={() => console.log('right')} />
</div>

<style>
	.wrap {
		max-width: 1400px;
		margin: 0 auto;
	}
</style>
