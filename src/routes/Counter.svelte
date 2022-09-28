<script lang="ts">
	import { nFormatter } from "./format";

	export let utility: number;
</script>

<div>
	<span class:pos={utility > 0} class:neg={utility < 0}>
		<span class="number">{nFormatter(utility, 1)}</span> Utilitrons Annually
	</span>
</div>

<style>
	div {
		width: calc(100% - 48px * 2);
		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 32px;
		font-weight: bold;

		padding: 20px;
	}

	.number {
		font-size: 64px;
	}

	.pos {
		color: #43a047;
	}

	.neg {
		color: #f44336;
	}
</style>
