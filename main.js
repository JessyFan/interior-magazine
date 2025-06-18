let menu = document.getElementById('menu');
let menuButton = document.getElementById('menuButton');
let closeIcon = document.getElementById('closeIcon');


// Show the menu when clicking
menuButton.addEventListener('click', function() {
    menu.classList.add("show-menu");
    menu.classList.remove("close-menu");
});

// Hide the menu when clicking
closeIcon.addEventListener('click', function() {
    menu.classList.add("close-menu");
    menu.classList.remove("show-menu");
});



