gsap.defaults({ ease: "elastic(1, 0.01)" });

let svgs = document.querySelectorAll("svg");
let paths = document.querySelectorAll("path");


let connected = false;
let snapDist = 5;
let startY = 10;

let mousePosition = { y: startY };

// gsap.ticker.add(update);
for (let i = 0; i < svgs.length; i++) {
    const svg = svgs[i];
    const path = paths[i];
  
    svg.addEventListener("mousemove", (event) => {
        // console.log(path, i)
        if (!connected && event.target === path) {
            connected = true;
            gsap.killTweensOf(mousePosition);
        }
    
        if (connected) {
            mousePosition.y = event.pageY * 2 - (mousePosition.y + mousePosition.y) / 2;
        }
        // gsap.ticker.add(update);
        update(path);
     
    });
    svg.addEventListener('mouseout', event => {
        gsap.to(path, {ease: "elastic(1, 0.01)", attr: {d: "M0,10 Q50,10 100,10"}})
    })
 
}

function update(path) {
    console.log(path)
    let d = `M0,10 Q50,${mousePosition.y} 100,10`;
    // let d = `M0,10 Q50,30 100,10`;

    path.setAttribute("d", d);
    console.log(mousePosition.y)
    // if (Math.abs(mousePosition.y - startY) > snapDist * 2) {
    //     connected = false;
    //     gsap.to(mousePosition, { duration: 1, y: startY });
    // }

    if (Math.abs(mousePosition.y >= 15) || Math.abs(mousePosition.y <= 5) ) {
        connected = false;
        gsap.to(mousePosition, { duration: 1, y: startY });
    }
}
