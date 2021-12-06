<script>
	import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';

  //$: count = feedback.length;
  //$: average = feedback.length === 0 ? '' : feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length;

 const addFeedback = (e) => {
  // console.log('addFeedback', e.detail);
  const newFeedback = e.detail;
  feedback = [newFeedback, ...feedback];
 };

  const deleteFeedback = (event) => {
  const itemId = event.detail;
  feedback = feedback.filter((item) => item.id != itemId);
}



</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback}/>
  <FeedbackStats {count} {average} />
	<FeedbackList on:delete-feedback={deleteFeedback} />

</main>
