const hamburger = document.querySelector('.nav--menu-icon');
const mobileMenu = document.querySelector('.mobile-nav-elements');

hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle('hidden');
})