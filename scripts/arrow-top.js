'use strict';

const arrowTop = document.querySelector('.arrowTop');

arrowTop.hidden = true;

arrowTop.onclick = function () {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function () {
    pageYOffset > document.documentElement.clientHeight? arrowTop.hidden = false : arrowTop.hidden = true;
});
