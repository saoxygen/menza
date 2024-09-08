

// document.getElementById("menu").addEventListener("click", function () {

//     document.getElementById("nav2").classList.add("hideDivs");
//     document.getElementById("menu").classList.add("hideDivs");
//     document.getElementById("nav_mobile").classList.remove("hideDivs");
//     document.getElementById("cross").classList.remove("hideDivs");

// });

document.querySelectorAll(".menu").forEach(menu => {

    menu.addEventListener("click", function () {

        document.getElementById("nav2").classList.add("hideDivs");
        document.getElementById("menu").classList.add("hideDivs");
        document.getElementById("nav_mobile").classList.remove("hideDivs");
        document.getElementById("cross").classList.remove("hideDivs");
    
    });

})

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

function hideOnClickOutside(element) {
    document.addEventListener('click', function(event) {
        // Check if the click was outside the element
        const isClickInside = element.contains(event.target);
        const isClickInside2 = document.getElementById("list_of_services").contains(event.target);

        if (!isClickInside && !isClickInside2) {
            element.classList.add("hideDivs");  // Hide the element
        }
    });
}

const myElement = document.querySelectorAll('.full_service');

myElement.forEach(element => {
    // Call the function and pass the element
    hideOnClickOutside(element);
});
