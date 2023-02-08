<script>
  export let post = [];
</script>

{#each post as image}
  <img src={image.src} alt={image.alt} />
{/each}
