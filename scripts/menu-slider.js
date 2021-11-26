'use strict';

/*------для переключения классов при выборе слайдов(категорий)------*/
const listObj = document.querySelectorAll('.itm');
const sizeObj = document.querySelectorAll('.itm__content');

function func() {
    for (let i = 0; i < listObj.length; i++) {
        listObj[i].classList.remove('_itm-nth');
        sizeObj[i].classList.remove('_itm__content');
        console.log(sizeObj[0].classList)
    }
    this.classList.add('_itm-nth');
    this.children[0].classList.add('_itm__content');
}

for (let i = 0; i < listObj.length; i++) {
    listObj[i].onclick = func;
}

/*------для переключения класса при нажатии на названмя блюд------*/
const toggleClassActive = document.querySelectorAll('._add-cart');
toggleClassActive.forEach((elem) => {
    elem.onclick = function () {
        this.classList.toggle('add-cart_active');
    }
});