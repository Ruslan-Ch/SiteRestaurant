'use strict';

document.querySelector('.header__burger').onclick = function () {
    const toggleClassActive = document.querySelectorAll('.header__burger, .header__menu');
    const toggleClassLock = document.querySelector('body');
    toggleClassActive.forEach((e) => {
        e.classList.toggle('active');
    });
    toggleClassLock.classList.toggle('lock');
};


