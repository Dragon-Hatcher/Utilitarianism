<script lang="ts">
	import Counter from './Counter.svelte';

	export let utility: number | null;
	export let num: number;
</script>

<div class="wrap">
	{#if num > 0}
		<Counter utility={utility ?? 0} />
	{/if}

	{#if num == 0}
		<h1>Sin Taxes</h1>
	{:else if num == 1}
		<p>
			&emsp The main argument for Sin Taxes is that they will reduce the consumption of harmful
			products (such as cigarettes, sugary drinks, candy, etc.). The idea is that if something costs
			more people will buy less of it. One argument against this is that demand for addictive
			products may be relatively inelastic. People who are addicted to cigarettes may buy them no
			matter how much they cost.
		</p>
		<p>
			&emsp The CDC says that 38 million adults smoke every day or “some days.” The average daily
			smoker smokes 14 cigarettes per day. The NIH says you lose 11 minutes every time you smoke a
			cigarette. How many cigarettes per day do you think people would smoke if we raised taxes on
			them? How many Utilitrons do you value one day of life at?
		</p>
	{:else if num == 2}
		<p style:color="purple">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		</p>
	{:else if num == 3}
		<p style:color="blue">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		</p>
	{/if}
</div>

<style>
	.wrap {
		margin-top: 32px;
		width: 100%;
	}

	.wrap * {
		max-width: 60ch;
		margin: auto;
	}

	p {
		font-size: 32px;
		padding-bottom: 16px;
	}

	h1 {
		display: block;
		font-size: 64px;
		text-align: center;
	}
</style>
