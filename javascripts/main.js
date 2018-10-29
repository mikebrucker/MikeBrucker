let nav = document.getElementById('nav'),
mainElement = document.querySelector('main'),
navHide = document.getElementsByClassName('navHide'),
menu = document.getElementById('menu'),
overlay = document.getElementById('overlay'),
menuHidden = true;


window.onscroll = function () { 
    "use strict";
    if (document.scrollingElement.scrollTop >= 70 ) {
        nav.style.backgroundColor = "#222222";
    } 
    else {
        nav.style.backgroundColor = "rgba(34, 34, 34, 0.4)";
    }
};

menu.addEventListener('click', () => {
    hideMenu();
});

overlay.addEventListener('click', () => {
    hideMenu();
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        menuHidden = true;
    } else {
        menuHidden = false;
    }
    if (window.innerWidth > 1280) {
        mainHeightChange();
    } else if (window.innerWidth > 641 && window.innerWidth < 1281) {
        mainElement.style.height = "1029px";
    } else {
        mainElement.style.height = "514px";
    }
    hideMenu();
    overlay.style.display = "none";
});

const mainHeightChange = () => {
    mainElement.style.height = (1543 * (mainElement.offsetWidth/1920)).toString() + 'px';
}

const hideMenu = () => {
    if (menuHidden) {
        for (let navItem of navHide) {
            navItem.style.display = "inline";
            overlay.style.display = "block";
        }
    } else {
        for (let navItem of navHide) {
            navItem.style.display = "none";
            overlay.style.display = "none";
        }
    }
    menuHidden = !menuHidden;
}

mainHeightChange();