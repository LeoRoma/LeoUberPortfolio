gsap.defaults({ ease: "elastic(1, 0.01)" });

let svgs = document.querySelectorAll("svg");
let paths = document.querySelectorAll("path");


let connected = false;
let snapDist = 10;
let startY = 10;

let mousePosition = { y: startY };

for (let i = 0; i < svgs.length; i++) {
    const svg = svgs[i];
    const path = paths[i];
  
    svg.addEventListener("mousemove", (event) => {
        if (!connected && event.target === path) {
            connected = true;
            gsap.killTweensOf(mousePosition);
        }
    
        if (connected) {
            mousePosition.y = event.pageY * 2 - (mousePosition.y + mousePosition.y) / 2;
        }
        update(path);
    });
}

function update(path) {
    let d = `M0,10 Q50,${mousePosition.y} 100,10`;

    path.setAttribute("d", d);

    if (Math.abs(mousePosition.y >= 13) || Math.abs(mousePosition.y <= 7) ) {
        connected = false;
        gsap.to(mousePosition, { duration: 0.5, y: startY });
        gsap.to(path, {ease: "elastic(1, 0.1)", attr: {d: "M0,10 Q50,10 100,10"}})
    }
}
