const toggle = document.querySelector('.toggle');

const body = document.querySelector('body');

const navbarItems = document.querySelector('.navbar-container');

const heroNames = document.querySelectorAll('.hero-name-container h1');
const heroInfos = document.querySelectorAll('.hero-info');

const projectsTitles = document.querySelectorAll('.project-title');

const footerItems = document.querySelectorAll('.footer-item');
const textAndBorder = document.querySelector('.cd-back-cover');

const cdTitleLine = document.querySelector('.cd-title');
const cdBodyLine = document.querySelector('.cd-body');
const cdBodyMiddleLine = document.querySelector('.body-web');

const ellipses = document.querySelectorAll('.ellipse');

const bullseyeCenter = document.querySelector('.bullseye-center');
const bullseyeInnerCircle = document.querySelector('.bullseye-inner-circle');
const bullseyeOuterCircle = document.querySelector('.bullseye-outer-circle');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    navbarItems.classList.toggle('active');
    changeHeroNamesColour();
    changeHeroInfosColour();
    changeSVGLinesColour();
    changeProjectsTitleColour();
    changeFooterItemsColour();
    textAndBorder.classList.toggle('active');
    changeEllipsesColour();
    bullseyeOuterCircle.classList.toggle('active');
    bullseyeInnerCircle.classList.toggle('active');
    bullseyeCenter.classList.toggle('active');
})

function changeHeroNamesColour(){
    for(let i = 0; i < heroNames.length; i++){
        const heroName = heroNames[i];
        heroName.classList.toggle('active');
    }
}

function changeHeroInfosColour(){
    for(let i = 0; i < heroInfos.length; i++){
        const heroInfo = heroInfos[i];
        heroInfo.classList.toggle('active');
    }
}

function changeSVGLinesColour(){
    for(let i = 0; i < paths.length; i++){
        const path = paths[i];
        path.classList.toggle('active');
    }
}

function changeProjectsTitleColour(){
    for(let i = 0; i < projectsTitles.length; i++){
        const projectsTitle = projectsTitles[i];
        projectsTitle.classList.toggle('active');
    }
}

function changeFooterItemsColour(){
    for(let i = 0; i < footerItems.length; i++){
        const footerItem = footerItems[i];
        footerItem.classList.toggle('active');
    }
}

function changeEllipsesColour(){
    for(let i = 0; i < ellipses.length; i++){
        const ellipse = ellipses[i];
        ellipse.classList.toggle('active');
    }
}