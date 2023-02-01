//******
    // Generator Function
    // https://youtu.be/xIXrBuOOVgI
//*/

function* generateFun() {
    for (let index = 1; index < 20; index++) {
        yield index;     
    }    
}
const data = generateFun();
let generateDone;
 
waitFun();
function delayExe(index) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj = data.next();
            console.log(index, obj.value, obj.done);         
            generateDone = obj.done;
            obj.value ? createElement(obj.value) : '';
            resolve();    
        }, 2000);
    })
        
}

async function waitFun() {
    for (let index = 1; index < 20; index++) { 
        await delayExe(index);
    }
       
}
 
function createElement(value) {
    const para = document.createElement('p');
    para.innerText = "Number "+ value;
    document.body.appendChild(para);
}

