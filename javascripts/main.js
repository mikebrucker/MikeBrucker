let nav = document.getElementById('nav'),
mainElement = document.querySelector('main'),
navHide = document.getElementsByClassName('navHide'),
menu = document.getElementById('menu'),
overlay = document.getElementById('overlay'),
images = document.getElementsByTagName('img'),
menuHidden = true;

window.onscroll = function () { 
    "use strict";
    navTransparent();
};

menu.addEventListener('click', () => {
    hideMenu();
});

overlay.addEventListener('click', () => {
    hideMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 756) {
        menuHidden = true;
    } else {
        menuHidden = false;
    }
    mainHeightChange();
    hideMenu();
    overlay.style.display = "none";
});

for (let nav of navHide) {
    nav.addEventListener('click', () => {
        hideMenuOnClick();
    });
}

for (let img of images) {
    img.addEventListener('click', () => {
        window.open(img.getAttribute('src', 'Image',));
    })
}

const navTransparent = () => {
    if (document.scrollingElement.scrollTop >= 70 ) {
        nav.style.backgroundColor = "#222222";
    } 
    else {
        nav.style.backgroundColor = "rgba(34, 34, 34, 0.4)";
    }    
}

const mainHeightChange = () => {
    if (window.innerWidth > 1280) {
        mainElement.style.height = (1543 * (mainElement.offsetWidth/1920)).toString() + 'px';
    } else if (window.innerWidth > 641 && window.innerWidth < 1281) {
        mainElement.style.height = "1029px";
    } else {
        mainElement.style.height = "514px";
    }
}

const hideMenu = () => {
    if (menuHidden) {
        for (let navItem of navHide) {
            if (window.innerWidth < 757) {
                navItem.style.display = "block";
            } else {
                navItem.style.display = "inline";
            }
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

const hideMenuOnClick = () => {
    if (window.innerWidth < 757) {
        hideMenu();
    }
}

//jquery to make links to anchors scroll
const scrollToAnchor = anchor => {
    let scrollMe = true;
    $('html').animate({
        scrollTop: $(anchor).offset().top
    },
    {
        start: () => {
            scrollMe = false;
        }
    }, 500);
    if (scrollMe) {
        $('body').animate({
            scrollTop: $(anchor).offset().top
        }, 500);
    }
}

navTransparent();
mainHeightChange();