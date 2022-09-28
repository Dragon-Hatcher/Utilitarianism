<script lang="ts">
	import { nFormatter } from './format';

	export let num: number | null;
	export let utility: number;

	let fewerCigs = 2;
	let utilityPerDay = 100;

	$: utility = fewerCigs * 0.00764 * utilityPerDay * 38000000 * 365;
</script>

<table>
	<thead>
		<th class="header pos">Positive Utility</th>
		<th class="header neg">Negative Utility</th>
	</thead>
	<tr>
		<td class="pos">
			{#if num > 0}
				<p>
					Fewer Cigarettes / Day × 0.00764 Days (11 Mins) × Utility / Day × 38 Million Smokers × 365
					Days / Year = {nFormatter(fewerCigs * 0.00764 * utilityPerDay * 38000000 * 365, 1)} Utilitrons
					/ Year
				</p>
				<p class="in">
					<span>Fewer Cigarettes:</span>
					<input type="range" bind:value={fewerCigs} min="0" max="14" />
					<output>{fewerCigs}</output>
				</p>
				<p class="in">
					<span>Utlity / Day:</span>
					<input type="range" bind:value={utilityPerDay} min="0" max="1000" />
					<output>{utilityPerDay}</output>
				</p>
			{/if}
		</td>
		<td class="neg" />
	</tr>
	<tr class="zebra">
		<td class="pos" />
		<td class="neg" />
	</tr>
	<tr>
		<td class="pos" />
		<td class="neg" />
	</tr>
	<tr class="zebra">
		<td class="pos" />
		<td class="neg" />
	</tr>
</table>

<style>
	table {
		/* margin: 8px; */
		width: 100%;

		font-family: Arial, Helvetica, sans-serif;

		border-collapse: collapse;

		font-size: 20px;
	}

	th,
	td {
		padding: 8px;
		width: 50%;
	}

	th.neg {
		background-color: #f44336;
		color: white;
	}

	th.pos {
		background-color: #43a047;
		color: white;
	}

	td.pos {
		background-color: rgba(67, 160, 71, 0.15);
	}

	td.neg {
		background-color: rgba(244, 67, 54, 0.15);
	}

	.zebra {
		background-color: rgb(245, 245, 245);
	}

	.in span {
		display: inline-block;
		width: 30%;
	}
	input {
		width: 60%;
	}
</style>
