const div = document.querySelector('.chessContainer');
const row = 8;
const column = 8;
for (let i = 0; i < row; i++) {
     for (let j = 0; j < column; j++) {
        const div1 = document.createElement("div");
        div1.setAttribute('data-i', i);
        div1.setAttribute('data-j', j);
        (i+j)%2 === 0 ? div1.classList.add('even') : div1.classList.add('odd');
        div1.innerHTML = "";
        div.appendChild(div1);
        setListener( div1 );
     }    
}

document.querySelector('.chessContainer div').addEventListener('click', function() {
    console.log("testing");
});

function clickChessBox(){
    console.log(this);
}

function setListener( el ) {
    // Dynamic elements event listener
    el.addEventListener( 'click', function(event) {
        setActive(event.target.dataset);
    } );
}


function setActive(dataSet) {

    let row = +(dataSet.i); //1
    let column = +(dataSet.j); //3
    const activeClass = document.querySelectorAll('div.active');
    for (let index = 0; index < activeClass.length; index++) {
        activeClass[index].classList.remove('active');
    }

    let columnI = column;
    for (let index = row; index < 8; index++) {
        if(index === 8 || columnI === 8){
            break;
        }
        document.querySelector('div[data-i="'+(index)+'"][data-j="'+(columnI)+'"]').classList.add("active");
        columnI++;
        
    }
    let columnD = column;
    
    for (let index = (row-1); index >= 0; index--) {
        columnD--;
        if(columnD < 0 || index < 0){
            break;
        }                         
        document.querySelector('div[data-i="'+(index)+'"][data-j="'+(columnD)+'"]').classList.add("active");                 
                         
    }
    let columnIRowD = column;
    for (let index = (row-1); index >= 0; index--) {
        columnIRowD++;
        if(columnIRowD < 0 || index < 0 || columnIRowD > 7 || index > 7){
            break;
        }                                              
        document.querySelector('div[data-i="'+(index)+'"][data-j="'+(columnIRowD)+'"]').classList.add("active");                 
    }
    let columnDRowI = column;
    for (let index = (row+1); index < 8; index++) {
        columnDRowI--;
        if(columnDRowI < 0 || index < 0){
            break;
        }                                              
        document.querySelector('div[data-i="'+(index)+'"][data-j="'+(columnDRowI)+'"]').classList.add("active");                 
    }
    
}
