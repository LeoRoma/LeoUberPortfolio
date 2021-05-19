const toggle = document.querySelector('.toggle');
// const indicator = document.querySelector('.indicator');




// Element to change once the toggle button is triggered

// body => change color
const body = document.querySelector('body');


// navbar font color 
const navbarItems = document.querySelector('.navbar-container');

// hero name
const heroNames = document.querySelectorAll('.hero-name-container h1');


// hero info
const heroInfos = document.querySelectorAll('.hero-info');


// svg lines

console.log(paths)


// projects title
const projectsTitles = document.querySelectorAll('.project-title');
// #C5C8C2

// footer

const footerItems = document.querySelectorAll('.footer-item')

// Cd backcover

// border lines & text
const textAndBorder = document.querySelector('.cd-back-cover');
const cdTitleLine = document.querySelector('.cd-title');
const cdBodyLine = document.querySelector('.cd-body');
const cdBodyMiddleLine = document.querySelector('.body-web');

//ellipse
const ellipses = document.querySelectorAll('.ellipse');

//bullseye
const bullseyeCenter = document.querySelector('.bullseye-center');
const bullseyeInnerCircle = document.querySelector('.bullseye-inner-circle');
const bullseyeOuterCircle = document.querySelector('.bullseye-outer-circle');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
})