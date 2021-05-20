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

    path.addEventListener("mouseenter", (event) => {
        // if (!connected && event.target === path) {
        //     connected = true;
        //     console.log(i) 
        // }

        // if (connected) {
        //     mousePosition.y = event.pageY * 2 - (mousePosition.y + mousePosition.y) / 2;
        //     update(path)
        // }
        console.log(i) 
        update(path)
    });

    path.addEventListener("mouseleave", () => {
        gsap.to(path, { ease: "elastic(3, 0.01)", attr: { d: "M0,10 Q50,10 100,10" } })
    })
}

function update(path) {
    let d = `M0,10 Q50,50 100,10`;

    path.setAttribute("d", d);
    // if (Math.abs(mousePosition.y - startY) > snapDist * 2) {      
    //     connected = false;
    //     gsap.to(mouseCoords, { duration: 1,  y: startY });
    //     gsap.to(path, { ease: "elastic(3, 0.01)", attr: { d: "M0,10 Q50,10 100,10" } })
    //   }  
}
