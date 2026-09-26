const menu = document.getElementById('menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', function () {
    menu.classList.toggle('open');
    nav.classList.toggle('open');
});

const mediaQuery = window.matchMedia('(min-width: 650px)');

function handleScreenResize(e) {
    if (e.matches) {
        menu.classList.remove('open');
        nav.classList.remove('open');
    }
}

mediaQuery.addEventListener('change', handleScreenResize);

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

