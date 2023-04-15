<!-- Modal.svelte -->
<template>
  <!-- Trigger the Modal -->
  <img
    src={Msrc}
    alt={Malt}
    class="border rounded cursor-pointer transition duration-300 hover:opacity-70 max-w-full"
    on:click={openModal}
  />

  <!-- The Modal -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-90 flex items-center justify-center"
    style="display: {modalVisible ? 'flex' : 'none'}"
  >
    <div class="bg-white rounded-lg p-8 max-w-md mx-auto">
      <!-- The Close Button -->
      <span class="text-2xl font-bold cursor-pointer absolute top-4 right-4" on:click={closeModal}>
        &times;
      </span>

      <!-- Modal Content (The Image) -->
      <img src={Msrc} class="modal-content mb-6" />

      <!-- Modal Caption (Image Text) -->
      {Malt && <div class="text-center text-gray-500">{Malt}</div>}
    </div>
  </div>
</template>

<script>
  export let Msrc = '';
  export let Malt = '';

  let modalVisible = false;

  function openModal() {
    modalVisible = true;
  }

  function closeModal() {
    modalVisible = false;
  }
</script>

<style>
  .modal-content {
    max-height: calc(100vh - 200px);
    max-width: 100%;
  }
</style>
