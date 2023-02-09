<script>
  export let post;
</script>

{#each post.data.images as p}
  <img src={p.src} alt={p.alt} />
{/each}
