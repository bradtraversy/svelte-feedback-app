<script>
	import {onMount, onDestroy} from 'svelte';
	import {FeedbackStore} from '../stores';
	import {fade, scale} from 'svelte/transition'
	import FeedbackItem from './FeedbackItem.svelte';

	let feedback = [];

	const unsubscribe = FeedbackStore.subscribe((data) => feedback = data);

	onMount(()=>{
		console.log('mounted');
	});

	onDestroy(()=>{
		console.log('destroyed');
		unsubscribe();
	});


	
</script>

{#each feedback as fb (fb.id)}
	<div in:scale out:fade="{{duration: 500}}">
		<FeedbackItem item ={fb} on:delete-feedback />
	</div>
{/each}