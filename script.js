
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

    // Открытие и закрытие меню при клике на иконку
    menuIcon.addEventListener("click", function() {
        menuList.classList.toggle("active");
        menuIcon.classList.toggle("hidden");
    });

    // Закрытие меню при клике по ссылке в меню
    menuList.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            menuList.classList.remove("active");
            menuIcon.classList.remove("hidden");
        }
    });

    // Для второй страницы предотвратить переход по ссылке сразу
    if (window.location.pathname.includes("about.html")) {
        menuList.addEventListener("click", function(event) {
            if (event.target.tagName === "A") {
                event.preventDefault();  // Останавливаем переход по ссылке
                menuList.classList.remove("active");  // Закрываем меню
                menuIcon.classList.remove("hidden");  // Показать иконку

                // Переходим по ссылке после закрытия меню
                setTimeout(function() {
                    window.location.href = event.target.href;
                }, 300); // Немного задержим, чтобы закрытие меню успело произойти
            }
        });
    }
});


