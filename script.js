





const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();
