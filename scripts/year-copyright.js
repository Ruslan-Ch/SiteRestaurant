'use strict';

function yearCopyright() {
    const text = document.querySelector('.footer__copyright');
    text.innerHTML = "Copyright" + " " + new Date().getFullYear();
    return text.innerHTML;
}

yearCopyright();