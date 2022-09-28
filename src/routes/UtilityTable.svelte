<script lang="ts">
	import { nFormatter } from './format';

	export let num: number | null;
	export let utility: number;

	let fewerCigs = 2;
	let utilityPerDay = 500;
	let tax = 20;
	let stateUtilityPerDollar = 1;
	let personUtilityPerDollar = 1;
	let companyUtilityPerDollar = 1;
	let paternalism = 0;

	$: lessSmokingUtility = fewerCigs * 0.00764 * utilityPerDay * 38000000 * 365;

	$: oldRevenue = 38000000 * 365 * 8 * 14 * 0.05;
	$: newRevenue = 38000000 * 365 * 8 * (14 - fewerCigs) * (0.05 + tax / 100);
	$: revenueUtility = (newRevenue - oldRevenue) * stateUtilityPerDollar;
	$: lostMoneyUtility = (newRevenue - oldRevenue) * personUtilityPerDollar;
	$: companyLostMoneyUtility = fewerCigs * 365 * 0.4 * 38000000 * companyUtilityPerDollar;

	$: utility =
		lessSmokingUtility +
		((num ?? 0) >= 2 ? revenueUtility : 0) -
		((num ?? 0) >= 3 ? lostMoneyUtility : 0) -
		((num ?? 0) >= 4 ? companyLostMoneyUtility : 0) -
		((num ?? 0) >= 5 ? paternalism : 0);
</script>

<table>
	<thead>
		<th class="header pos">Positive Utility</th>
		<th class="header neg">Negative Utility</th>
	</thead>
	{#if (num ?? 0) >= 1}
		<tr>
			<td class="pos">
				<p>
					Fewer Cigarettes / Day × 0.00764 Days (11 Mins) × Utility / Day × 38 Million Smokers × 365
					Days / Year = {nFormatter(lessSmokingUtility)} Utilitrons Annually
				</p>
				<p class="in">
					<span>Fewer Cigarettes / Day:</span>
					<input type="range" bind:value={fewerCigs} min="0" max="14" step="0.01" />
					<output>{fewerCigs}</output>
				</p>
				<p class="in">
					<span>Utilitrons / Day:</span>
					<input type="range" bind:value={utilityPerDay} min="0" max="1000" />
					<output>{utilityPerDay}</output>
				</p>
			</td>
			<td class="neg">
				{#if (num ?? 0) >= 3}
					<p>
						State Additional Revenue × Utility / Dollar = {nFormatter(lostMoneyUtility)} Utilitrons Anually
					</p>
					<p class="in">
						<span>Utilitrons / Dollar (People):</span>
						<input
							type="range"
							bind:value={personUtilityPerDollar}
							min="-10"
							max="10"
							step="0.01"
						/>
						<output>{personUtilityPerDollar}</output>
					</p>
				{/if}
			</td>
		</tr>
	{/if}
	{#if (num ?? 0) >= 2}
		<tr class="zebra">
			<td class="pos">
				<p>
					(New Revenue - Old Revenue) × Utility / Dollar = {nFormatter(revenueUtility)} Utilitrons Annually
				</p>
				<p class="in">
					<span>Percent Tax:</span>
					<input type="range" bind:value={tax} min="0" max="100" />
					<output>{tax}%</output>
				</p>
				<p class="in">
					<span>Utilitrons / Dollar (State):</span>
					<input type="range" bind:value={stateUtilityPerDollar} min="-10" max="10" step="0.01" />
					<output>{stateUtilityPerDollar}</output>
				</p>
			</td>
			<td class="neg">
				{#if (num ?? 0) >= 4}
					<p>
						Fewer Cigarettes / Day × 365 Days / Year × 40¢ Avg. Profit Margin × 38 Million Smokers ×
						Utility / Dollar = {nFormatter(companyLostMoneyUtility)} Utilitrons Annually
					</p>
					<p class="in">
						<span>Utilitrons / Dollar (Companies):</span>
						<input
							type="range"
							bind:value={companyUtilityPerDollar}
							min="-10"
							max="10"
							step="0.01"
						/>
						<output>{companyUtilityPerDollar}</output>
					</p>
				{/if}
			</td>
		</tr>
	{/if}
	{#if (num ?? 0) >= 5}
		<tr>
			<td class="pos" />
			<td class="neg">
				<p>
					Paternalism = {nFormatter(paternalism)} Utilitrons Annually
				</p>
				<p class="in">
					<span>Utilitrons / Dollar (Companies):</span>
					<input type="range" bind:value={paternalism} min="0" max="1000000000000" step="100000" style="width: 40%;"/>
					<output>{nFormatter(paternalism)}</output>
				</p>
			</td>
		</tr>
	{/if}
</table>

<style>
	table {
		/* margin: 8px; */
		width: 100%;

		font-family: Arial, Helvetica, sans-serif;

		border-collapse: collapse;

		font-size: 20px;
	}

	p {
		margin: 8px;
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
		width: 40%;
	}

	input {
		width: 50%;
	}
</style>
