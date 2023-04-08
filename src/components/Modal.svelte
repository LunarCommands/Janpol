<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let show = false;
  let imageSrc = "";
  let zoomLevel = 1;

  function openModal(src) {
    imageSrc = src;
    show = true;
  }

  function closeModal() {
    show = false;
  }

  function handleZoomIn() {
    zoomLevel += 0.1;
  }

  function handleZoomOut() {
    zoomLevel -= 0.1;
  }

  function handleClick(event) {
    if (event.target === $refs.modalBackdrop) {
      closeModal();
    }
  }

  $: transformStyle = `scale(${zoomLevel})`;

  // dispatch events when the modal is opened or closed
  $: if (show) {
    dispatch("modalOpen");
  } else {
    dispatch("modalClose");
  }
</script>

{#if show}
  <div
    class="fixed inset-0 z-50 flex justify-center items-center"
    on:click={handleClick}
  >
    <div class="absolute inset-0 bg-gray-900 opacity-75" ref="modalBackdrop" />
    <div
      class="bg-white p-4 rounded-lg shadow-lg overflow-hidden"
      style={transformStyle}
    >
      <img src={imageSrc} alt="Modal Image" />
      <div class="flex justify-center mt-4 space-x-4">
        <button
          class="px-2 py-1 bg-blue-500 text-white rounded-lg"
          on:click={handleZoomIn}>+</button
        >
        <button
          class="px-2 py-1 bg-blue-500 text-white rounded-lg"
          on:click={handleZoomOut}>-</button
        >
        <button
          class="px-2 py-1 bg-gray-500 text-white rounded-lg"
          on:click={closeModal}>X</button
        >
      </div>
    </div>
  </div>
{/if}
