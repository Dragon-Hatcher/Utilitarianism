<script lang="ts">
	import Buttons from './Buttons.svelte';
	import Counter from './Counter.svelte';
	import Explanations from './Explanations.svelte';
	import UtilityTable from './UtilityTable.svelte';

    const MAX = 3;

	let utility = 50;
	let num = 0;
</script>

<div class="wrap">
	<UtilityTable {num} bind:utility/>

	<Explanations bind:num {utility} />

	<Buttons
		on:left={() => {
			if (num != 0) num--;
		}}
		on:right={() => {
			if (num != MAX) num++;
		}}
	/>
</div>

<style>
	.wrap {
		max-width: 1400px;
		margin: 0 auto;
	}

	:global(*) {
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
