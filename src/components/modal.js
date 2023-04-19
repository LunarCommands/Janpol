document.addEventListener('DOMContentLoaded', function() {
  function openCustomModal(imageSrc) {
    const modal = document.getElementById("customModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.showModal();
  }

  const closeModalButton = document.querySelector(".close-button");
  closeModalButton.addEventListener("click", function() {
    const modal = document.getElementById("customModal");
    modal.close();
  });

  const images = document.querySelectorAll("#myImg");
  images.forEach(function(image) {
    image.addEventListener("click", function() {
      const imageSrc = this.src;
      openCustomModal(imageSrc);
    });
  });
});
