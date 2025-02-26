let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelector(".menu-list");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show")
    let activeNav = menuList.hasAttribute("class", "show");
    if (activeNav) { menuIcon.classList.toggle("active") };
})

$(document).ready(function () {
    $('.my-file').slick({
        dots: true,
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,

    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const backToTopButton = document.getElementById("backToTop");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 300) {
//             backToTopButton.style.display = "block";
//         } else {
//             backToTopButton.style.display = "none";
//         }
//     });

//     backToTopButton.addEventListener("click", function () {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     });
// });



