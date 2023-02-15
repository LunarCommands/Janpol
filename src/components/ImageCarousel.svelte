<script>
  let currentIndex = 0;
  export let images = [];

  $: currentIndex;

  function handlePrev() {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  }

  function handleNext() {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  }
</script>

<div class="relative">
  <div class="relative overflow-hidden w-full h-64">
    {#each images as image, index}
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        style={`
    position: absolute;
    opacity: ${currentIndex === index ? 1 : 0};
    object-fit: contain;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  `}
      />
    {/each}
  </div>
  <button
    class="bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center absolute top-50 transform translate(-50%, -50%)"
    style="left: 25%"
    on:click={handlePrev}
  >
    <svg class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.05 9.293l-.707.707L12 15.657l1.414-1.414L8.636 10l3.535-3.536-1.414-1.414z"
      />
    </svg>
  </button>
  <button
    class="bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center absolute top-50 transform translate(-50%, -50%)"
    style="right: 25%"
    on:click={handleNext}
  >
    <svg
      class=" w-4 h-4"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
      />
    </svg>
  </button>
</div>
