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
		<h1 style="margin-top: 16px;">Sin Taxes</h1>
		<p>
			&emsp Sin Taxes are a type of tax aimed it products deemed to be immoral or counter to the
			public good such as cigarettes, sugary drinks, or candy. The main argument for Sin Taxes is
			that they will reduce the consumption of these harmful products. The idea is that if something
			costs more people will buy less of it. One argument against this is that demand for addictive
			products may be relatively inelastic. (e.g. People who are addicted to cigarettes may buy them
			no matter how much they cost.)
		</p>
		<p>
			&emsp Lets explore the Utility of enacting Sin Taxes in the United States by looking at its
			utility equation. We will use the imaginary unity "Utilitrons."
		</p>
		<p style="text-align: center">
			(Press <kbd>Space</kbd> or <kbd>Left</kbd> and <kbd>Right</kbd> to navigate through the presentation).
		</p>
	{:else if num == 1}
		<p>
			&emsp The CDC says that 38 million adults smoke every day or “some days.” The average daily
			smoker smokes 14 cigarettes per day. The NIH says you lose 11 minutes of life expectancy every
			time you smoke a cigarette. How many fewer cigarettes per day do you think people would smoke
			if we raised taxes on them? How many Utilitrons do you value one day of life at?
		</p>
		<p>
			&emsp (The counter will show you the running total of Utilitrons. Try adjusting the sliders to
			see how it affects the outcome.)
		</p>
	{:else if num == 2}
		<p>
			&emsp It is also important to consider the tax revenue gained or lost by Sin Taxes. After all
			the government can use the extra money for important things. Or maybe you don't think the
			government will use the money well? When percent tax will you levy on cigarettes (on top of
			the average base price of 8 dollars)? How many Utilitrons is each dollar worth to the state?
			Maybe you think it is negative? Remember to compare to how much you valued one day of life at.
		</p>
	{:else if num == 3}
		<p>
			&emsp On the other hand... That money also has utility to the people who buy the products. How
			much utility do you think those people got from the money the state now has instead of them?
			Do you think it is more or less than the Utility the state gets?
		</p>
	{:else if num == 4}
		<p>
			&emsp The companies making the products also lose out on business. How much Utility do you
			think they get for each dollar? Maybe them having less money is better for society. Also think
			about the effect on the economy, jobs, etc.
		</p>
	{:else if num == 5}
		<p>
			&emsp Finally there may be an inherent societal cost to the government telling people what to
			do. How many Utilitrons per year do you think this paternalism costs? Does it cost anything at
			all?
		</p>
	{:else if num == 6}
		<p>
			&emsp You said: Sin Taxes <em>{(utility ?? 0) > 0 ? 'are' : "aren't"}</em> worth it. Is that the
			result you expected? Try changing the sliders and seeing how it affects the result.
		</p>
	{/if}
</div>

<style>
	.wrap {
		/* margin-top: 32px; */
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

	kbd {
		background-color: #eee;
		border-radius: 3px;
		border: 1px solid #b4b4b4;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
		color: #333;
		display: inline-block;
		font-size: 0.85em;
		font-weight: 700;
		line-height: 1;
		padding: 2px 4px;
		white-space: nowrap;
	}
</style>
