const percentage = document.querySelector('.loading-percentage');

function loading(){
    let counter = 0;
    const id = setInterval(count, 20);

    function count(){
        if(counter === 100){
            clearInterval(id);
        }else{
            counter += 1;
            percentage.innerHTML = counter + "%";
        }
    }
}

loading();