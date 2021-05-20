gsap.defaults({ ease: "elastic(1, 0.01)" });

let svgs = document.querySelectorAll("svg");
let paths = document.querySelectorAll("path");

let connected = false;
let startY = 10;

let mousePosition = { y: startY };

for (let i = 0; i < paths.length; i++) {
    // const svg = svgs[i];
    const path = paths[i];
  
    path.addEventListener("mouseenter", (event) => {
        update(path);
    });

    path.addEventListener("mouseleave", () => {
        gsap.to(path, {ease: "elastic(2, 0.1)", attr: {d: "M0,10 Q50,10 100,10"}})
    })
}

function update(path) {
    let d = `M0,10 Q50,100 100,10`;

    path.setAttribute("d", d);
}
