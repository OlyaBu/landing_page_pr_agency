let currentSlide = {};

function scrollSlider(direction, sliderId) {
  const slides = document.getElementById(sliderId);
  const totalSlides = slides.children.length;

  currentSlide[sliderId] = (currentSlide[sliderId] || 0) + direction;

  if (currentSlide[sliderId] < 0) {
    currentSlide[sliderId] = totalSlides - 1;
  } else if (currentSlide[sliderId] >= totalSlides) {
    currentSlide[sliderId] = 0;
  }

  slides.style.transform = `translateX(${
    -currentSlide[sliderId] * 100
  }%)`;
  updateArrowVisibility(sliderId);
}

function updateArrowVisibility(sliderId) {
  const slides = document.getElementById(sliderId);
  const totalSlides = slides.children.length;

  const arrowLeft = document.querySelector(`#${sliderId} .arrow-left`);
  const arrowRight = document.querySelector(`#${sliderId} .arrow-right`);

  if (arrowLeft) {
    arrowLeft.style.display = "block";
  }

  if (arrowRight) {
    arrowRight.style.display = "block";
  }
}

function toggleHidden() {
  const hiddenGalleries = document.querySelectorAll(".gallery.hidden");
  const galleryContainer = document.querySelector(".gallery-container");

  hiddenGalleries.forEach((gallery) => {
    gallery.classList.remove("hidden");
  });

  document.querySelector(".show-more-button").style.display = "none";
  galleryContainer.style.justifyContent = "space-around";
  galleryContainer.style.flexWrap = "wrap";
}