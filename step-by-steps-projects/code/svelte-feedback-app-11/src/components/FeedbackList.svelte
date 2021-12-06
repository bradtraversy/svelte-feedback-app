<script>
	export let feedback = [];


</script>

{#each feedback as fb (fb.id)}
	<h3>{fb.text}</h3>
{/each}