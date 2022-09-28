<script lang="ts">
	import { nFormatter } from "./format";

	export let utility: number;
</script>

<div>
	<span class:pos={utility > 0} class:neg={utility < 0}>
		<span class="number">{nFormatter(utility, 1)}</span> Utilitrons / Year
	</span>
</div>

<style>
	div {
		width: calc(100% - 48px * 2);
		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 64px;
		font-weight: bold;

		padding: 48px;
	}

	.number {
		font-size: 128px;
	}

	.pos {
		color: #43a047;
	}

	.neg {
		color: #f44336;
	}
</style>
