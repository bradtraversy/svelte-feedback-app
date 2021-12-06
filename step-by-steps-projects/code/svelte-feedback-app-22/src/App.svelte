<script>
	import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';

let feedback = [
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
];

  $: count = feedback.length;
  $: average = feedback.length === 0 ? '' : feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length;

 const addFeedback = (e) => {
  console.log('addFeedback',e.detail);
 };

  const deleteFeedback = (event) => {
  const itemId = event.detail;
  feedback = feedback.filter((item) => item.id != itemId);
}



</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback}/>
  <FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />

</main>
