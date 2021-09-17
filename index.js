const hamburger = document.querySelector('.nav--menu-icon');
const mobileMenu = document.querySelector('.mobile-nav-elements');
const backdrop = document.querySelector('.backdrop');

hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
})

backdrop.addEventListener('click', function(){
    mobileMenu.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
})