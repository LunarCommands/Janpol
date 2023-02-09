<script>
  export let post;
</script>

{console.log(post.data)}
<ul>
  {#each post.data as { title, description, images }}
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={images.src} alt={images.alt} />
    </li>
  {/each}
</ul>
