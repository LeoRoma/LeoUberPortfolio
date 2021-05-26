const projects = document.querySelectorAll('.project-container');
const images = document.querySelectorAll('.project-image');


let mouseCoords = {
    x: 0,
    y: 0
}

function getMouseCoords(event){
    mouseCoords.x = event.pageX;
    mouseCoords.y = event.pageY;
}

function followMouse(image){
    image.style.left = mouseCoords.x + 20 + "px";
    image.style.top = mouseCoords.y + (-200) + "px";
}

for(let i = 0; i < projects.length; i++){
    const project = projects[i];
    const image = images[i];
    project.addEventListener('mouseenter', () => {
        image.style.opacity = "1";
    })

    project.addEventListener('mousemove', (event) => {
        getMouseCoords(event);
        followMouse(image);
    })

    project.addEventListener('mouseleave',() => {
        image.style.display = "hidden";
        image.style.opacity = "0";
    })
}