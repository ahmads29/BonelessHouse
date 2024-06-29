document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-ul li a");
    const checkBox = document.getElementById("check");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            checkBox.checked = false; // Uncheck the checkbox to close the menu
        });
    });
});



document.querySelector('.right').addEventListener('click', function() {
    console.log("Right arrow clicked");
    document.querySelector('.devzur_categories-container').scrollBy({
        left: 100,
        behavior: 'smooth'
    });
});

document.querySelector('.left').addEventListener('click', function() {
    console.log("Left arrow clicked");
    document.querySelector('.devzur_categories-container').scrollBy({
        left: -100,
        behavior: 'smooth'
    });
});