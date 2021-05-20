gsap.defaults({ ease: "elastic(1, 0.01)" });

let svgs = document.querySelectorAll("svg");
let paths = document.querySelectorAll("path");

let connected = false;
let snapDist = 5
let startY = 10;

let mousePosition = { y: startY };

for (let i = 0; i < paths.length; i++) {
    const svg = svgs[i];
    const path = paths[i];

    svg.addEventListener("mousemove", (event) => {
        if (!connected && event.target === path) {
            connected = true;
            console.log(i) 
        }

        if (connected) {
            mousePosition.y = event.pageY * 2 - (mousePosition.y + mousePosition.y) / 2;
            update(path)
        }
        // console.log(i) 
        // update(path)
    });

    svg.addEventListener("mouseleave", () => {
        gsap.to(path, { ease: "elastic(5, 0.1)", attr: { d: "M0,10 Q50,10 100,10" } })
    })
}

function update(path) {
    let d = `M0,10 Q50,20 100,10`;

    path.setAttribute("d", d);
    // if (mousePosition.y >= 20 || mousePosition.y <= 0) {      
    //     connected = false;
    //     gsap.to(mouseCoords, { duration: 1,  y: startY });
    //     gsap.to(path, { ease: "elastic(3, 0.01)", attr: { d: "M0,10 Q50,10 100,10" } })
    //   }  
}
