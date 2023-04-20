<script>
  let images = []; // an array to store the image URLs
  let altTexts = []; // an array to store the alt texts

  // Fetch the images from the "realizacje" folder
  fetch("/realizacje") // change this to the correct folder path
    .then((response) => response.json())
    .then((data) => {
      images = data.images; // assuming the response data is an object with an array of image URLs
      altTexts = data.images.map((image) =>
        image.split("/").pop().split(".").shift()
      ); // generate alt texts from image names
    })
    .catch((error) => console.error(error));
</script>

<section class="py-10 bg-white">
  <div class="container mx-auto px-12 py-24">
    <!-- Render the images and alt texts dynamically using a loop -->
    {#each images as image, i (image)}
      <div>
        <img
          id="myImg"
          class="h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src={image}
          alt={altTexts[i]}
        />
      </div>
    {/each}
  </div>
</section>
