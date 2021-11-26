'use strict';

const animItems = document.querySelectorAll('._anim-items');

window.addEventListener('scroll', animScroll);

function animScroll() {
    animItems.forEach((e) => {
        if (pageYOffset > 1) {
            e.classList.add('action');
        } else {
            e.classList.remove('action');
        }
    });
}