document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const menuList = document.getElementById("menuList");

    if (menuIcon && menuList) {
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
    }
});
