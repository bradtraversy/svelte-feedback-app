<script>
	import {createEventDispatcher} from 'svelte';
	import Card from './Card.svelte';

	export let item;

	const dispatch = createEventDispatcher();

	function handleDelete(itemId) {
		dispatch('delete-feedback', itemId);
	}
</script>

<Card>
	<div class="num-display">
		{item.rating}
	</div>
	<button class="close" on:click={()=> handleDelete(item.id)}>X</button>
	<p class="text-display">
		{item.text}
	</p>
</Card>

<style>
	.num-display {
		position: absolute;
		top: -10px;
		left: -10px;
		width: 50px;
		height: 50px;
		background-color: #FF6A95;
		color: #FFF;
		border: 1px #EEE solid;
		border-radius: 50%;
		padding: 10px;
		text-align: center;
		font-size: 19px;
	}
	.close{
		position: absolute;
		top: 10px;
		right: 20px;
		cursor: pointer;
		background: none;
		border: none;
	}
</style>