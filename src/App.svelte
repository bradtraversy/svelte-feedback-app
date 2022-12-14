<script lang="ts">
  let firstName: string = "Tony";
  let lastName: string = "Baleno";
  let color = "blue";
  let showText = false;
  $: name = firstName + " " + lastName;
  let toggle = () => {
    color = color === "purple" ? "blue" : "purple";
    showText = true;
    users = [...users, { id: 5, name: "jenn" }];
  };
  let users = [
    { id: 1, name: "john" },
    { id: 2, name: "karel" },
    { id: 3, name: "mick" },
    { id: 4, name: "shannon" },
  ];
</script>

<main>
  <h1 style="color: {color}">Hello {name}!</h1>
  {#if showText}
    <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  {:else}
    <p>No Text</p>
  {/if}
  <button on:click={toggle}>click me!</button>
  {#each users as user (user.id)}
    <h3>{user.id}: {user.name}</h3>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
