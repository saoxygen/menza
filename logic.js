// window.addEventListener("scroll", function () {
//   const navbar = document.getElementById("nav");
//   const navbar2 = document.getElementById("nav2");
//   if (window.scrollY > 0) {
//     navbar2.style.backgroundColor = "#000";
//     navbar2.classList.remove("nav");
//     navbar2.classList.add("sticky");
//     navbar2.classList.remove("hideDiv");
//     navbar.classList.add("hideDiv");
//   } else {
//     navbar2.style.backgroundColor = "transparent";
//     navbar2.classList.add("nav");
//     navbar2.classList.remove("sticky");
//     navbar2.classList.add("hideDiv");
//     navbar.classList.remove("hideDiv");
//   }
// });


document.getElementById("menu").addEventListener("click", function () {

    document.getElementById("nav2").classList.add("hideDivs");
    document.getElementById("menu").classList.add("hideDivs");
    document.getElementById("nav_mobile").classList.remove("hideDivs");
    document.getElementById("cross").classList.remove("hideDivs");

});

document.getElementById("cross").addEventListener("click", function () {

    document.getElementById("nav2").classList.remove("hideDivs");
    document.getElementById("menu").classList.remove("hideDivs");
    document.getElementById("nav_mobile").classList.add("hideDivs");
    document.getElementById("cross").classList.add("hideDivs");

});

// document.getElementById("nav_mobile").addEventListener("click", function () {

//     document.getElementById("nav2").classList.remove("hideDivs");
//     document.getElementById("menu").classList.remove("hideDivs");
//     document.getElementById("nav_mobile").classList.add("hideDivs");
//     document.getElementById("cross").classList.add("hideDivs");

// });

document.querySelectorAll("ul a").forEach(function(a) {
a.addEventListener("click", function (e) {

    //e.preventDefault();

    document.getElementById("nav2").classList.remove("hideDivs");
    document.getElementById("menu").classList.remove("hideDivs");
    document.getElementById("nav_mobile").classList.add("hideDivs");
    document.getElementById("cross").classList.add("hideDivs");

});
});