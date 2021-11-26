'use strict';

/*----- скроллинг с помощью метода requestAnimationFrame ----*/
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling === false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

/*-----END  скроллинг с помощью метода requestAnimationFrame ----*/

document.addEventListener("DOMContentLoaded", scrolling, false);

const animVegetables = document.querySelectorAll("._anim-vegetables");

let lastScrollTop = 0;

function scrolling(e) {

    animVegetables.forEach((elem) => {
        if (isPartiallyVisible(elem)) {

            const top = window.pageYOffset;

            if (lastScrollTop > top) {
                animVegetables.forEach((elem) => {
                    elem.style.top = elem.dataset.top + '%';
                    // console.log('top');
                });
            } else if (lastScrollTop < top) {
                animVegetables.forEach((elem) => {
                    elem.style.top = elem.dataset.down + '%';
                    // console.log('down');
                });
            }
            lastScrollTop = top;
        }
    });
}

/*  Определение частично видимых элементов*/

function isPartiallyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}