const carousel = document.querySelector('.relative');
const images = carousel.querySelectorAll('img');
const prevButton = carousel.querySelector('.left-0');
const nextButton = carousel.querySelector('.right-0');

let counter = 0;

images[counter].classList.remove('opacity-0');

prevButton.addEventListener('click', () => {
  images[counter].classList.add('opacity-0');
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  images[counter].classList.remove('opacity-0');
});

nextButton.addEventListener('click', () => {
  images[counter].classList.add('opacity-0');
  counter++;
  if (counter === images.length) {
    counter = 0;
  }
  images[counter].classList.remove('opacity-0');
});
