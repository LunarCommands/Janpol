<script>
  import { Carousel } from "flowbite-svelte";
  export let images = [];
</script>

<div class="max-w-4xl">
  <Carousel {images} />
</div>
