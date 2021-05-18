// import { gsap } from "gsap";
// import '../node_modules/splitting/dist/splitting.css';
// import '../node_modules/splitting/dist/splitting-cells.css';
// import Splitting from 'splitting';

const splitting = Splitting();

console.log("hello")

const textOnHover = document.querySelector('.hero-name-container');

const upperName = document.querySelectorAll('.upper-name span.char');
const lowerName = document.querySelectorAll('.lower-name span.char');

textOnHover.addEventListener('mouseenter', () => {
    animateCharsIn();
})


textOnHover.addEventListener('mouseleave', () => {
    animateCharsOut()
})

let animateCharsTimeline = gsap.timeline({
    defaults: {duration: 0.5, ease: "power2", stagger: 0.525}
})

function animateCharsIn() {
 
    gsap.timeline({
        defaults: {duration: 0.5, ease: "power2", stagger: 0.025}
    })
    .to(lowerName, { 
        y: '100%',
        rotationX: -90,
        opacity: 0
    })
    .to(upperName, { 
        startAt: {y: '-100%', rotationX: 90, opacity: 0},
        y: '0%',
        rotationX: 0,
        opacity: 1
    }, 0);
}

function animateCharsOut() {
    if ( this.animateCharsTimeline ) this.animateCharsTimeline.kill();
    gsap.timeline({
        defaults: {duration: 0.5, ease: 'power2', stagger:0.025}
    })
    .to(upperName, {
        y: '-100%',
        rotationX: 90,
        opacity: 0
    })
    .to(lowerName, {
        startAt: {y: '100%', rotationX: -90, opacity: 1},
        y: '0%',
        rotationX: 0,
        opacity: 1
    }, 0);
}