<script>
  export let post;
</script>

<div class="flex">
  {#each post.data.images as p}
    <img class="flex-wrap" src={"/" + p.src} alt={p.alt} />
  {/each}
</div>
