<script>
  let currentIndex = 0;
  export let images = [];
  export let title = "";
  export let description = "";

  $: currentIndex;

  function handlePrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function handleNext() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function handleImageClick(image) {
    // handle image click
  }

  function handleImageKeyDown(event, image) {
    if (event.key === "Enter" || event.key === " ") {
    } else if (event.key === "ArrowLeft") {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      currentIndex = prevIndex;
    } else if (event.key === "ArrowRight") {
      const nextIndex = (currentIndex + 1) % images.length;
      currentIndex = nextIndex;
    }
  }
</script>

<div class="relative">
  <div class="relative overflow-hidden w-full h-64">
    {#each images as image, index}
      <img
        id="myImg"
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
    <div
      class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mb-4"
    >
      {#each images as _, index}
        <button
          class="h-3 w-3 rounded-full bg-gray-300 transition-colors duration-200 ease-out hover:bg-gray-400 focus:bg-gray-400 focus:outline-none {currentIndex ===
          index
            ? 'bg-gray-400'
            : ''}"
          on:click={() => (currentIndex = index)}
          tabindex={currentIndex === index ? 0 : -1}
          aria-label={`Image ${index + 1}`}
          aria-current={currentIndex === index ? "true" : "false"}
        />
      {/each}
    </div>
  </div>
  <div class="flex flex-col items-center mt-4">
    <h3 class="text-lg font-medium">{title}</h3>
    <p class="text-gray-500 mt-2">{description}</p>
  </div>
  <button
    class="bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center absolute top-50 transform translate(-50%, -50%)"
    style="left: 25%"
    on:click={handlePrev}
    on:keydown={(event) => handleImageKeyDown(event)}
    tabindex={0}
    aria-label="Previous Image"
  >
    <svg class="w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.05 9.293l-.707.707L12 15.657l1.414-1.414L8.636 10l3.535-3.536-1.414-1.414z"
      />
    </svg>
  </button>
  <button
    class="bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center absolute top-50 transform translate(-50%, -50%)"
    style="right: 25%"
    on:click={handleNext}
    on:keydown={(event) => handleImageKeyDown(event)}
  >
    <svg class="w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
      />
    </svg>
  </button>
</div>
