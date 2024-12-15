
const oeuvresSlides = document.querySelectorAll(".slide");
const oeuvresDots = document.querySelectorAll(".dot");
let currentOeuvresIndex = 0;

function showOeuvresSlide(index) {
  oeuvresSlides.forEach(slide => slide.classList.remove("active"));
  oeuvresDots.forEach(dot => dot.classList.remove("active"));

  oeuvresSlides[index].classList.add("active");
  oeuvresDots[index].classList.add("active");

  currentOeuvresIndex = index;
}

oeuvresDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showOeuvresSlide(index);
  });
});

showOeuvresSlide(currentOeuvresIndex);

const artistesSlides = document.querySelectorAll(".slide1");
const artistesDots = document.querySelectorAll(".dot1");
let currentArtistesIndex = 0;

function showArtistesSlide(index) {
  artistesSlides.forEach(slide => slide.classList.remove("active"));
  artistesDots.forEach(dot => dot.classList.remove("active"));

  artistesSlides[index].classList.add("active");
  artistesDots[index].classList.add("active");

  currentArtistesIndex = index;
}

artistesDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showArtistesSlide(index);
  });
});

showArtistesSlide(currentArtistesIndex);

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menuIcon");
  const menuList = document.getElementById("menuList");

  menuIcon.addEventListener("click", function() {
      menuList.classList.toggle("active");
      menuIcon.classList.toggle("hidden");
  });

  menuList.addEventListener("click", function(event) {
      if (event.target.tagName === "A") {
          menuList.classList.remove("active");
          menuIcon.classList.remove("hidden"); 
      }
  });
});
