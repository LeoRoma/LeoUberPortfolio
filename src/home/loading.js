function loading(){
    const percentage = document.querySelector('.loading-percentage');
    let counter = 0;
    const id = setInterval(count, 20);

    function count(){
        if(counter === 100){
            clearInterval(id);
            makeVisible();
            moveUp()
        }else{
            counter += 1;
            percentage.innerHTML = counter + "%";
        }
    }
}


function makeVisible(){
    body.style.overflow = "visible";
}

function moveUp(){
    const loadingPage = document.querySelector('.loadingpage-container');
    loadingPage.style.transform = "translateY(-100%)";
}



loading();
window.onbeforeunload = function () {
    body.style.display = "none";
    window.scrollTo(0, 0);
}