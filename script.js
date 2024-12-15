
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

    // Проверка на наличие элементов
    if (menuIcon && menuList) {

        // Открытие/закрытие меню при клике на бургер
        menuIcon.addEventListener("click", function() {
            menuList.classList.toggle("active"); // Открытие/закрытие меню
            menuIcon.classList.toggle("hidden"); // Скрытие/показ иконки
        });

        // Закрытие меню при клике на ссылку в меню
        menuList.addEventListener("click", function(event) {
            if (event.target.tagName === "A") {
                menuList.classList.remove("active"); // Закрытие меню
                menuIcon.classList.remove("hidden"); // Показ иконки
            }
        });

        // Дополнительная логика для page2.html
        if (window.location.pathname.includes("page2.html")) {
            menuList.addEventListener("click", function(event) {
                if (event.target.tagName === "A") {
                    event.preventDefault(); // Предотвращаем переход сразу

                    menuList.classList.remove("active"); // Закрываем меню
                    menuIcon.classList.remove("hidden"); // Показ иконки

                    // Переход по ссылке через задержку после закрытия меню
                    setTimeout(function() {
                        window.location.href = event.target.href; // Переход по ссылке
                    }, 300); // Задержка для плавного закрытия меню
                }
            });
        }
    }
});
