//bubble sort algorithem
let arr = [2,30,11,67,80,90,10]; //7
for (let index = 0; index < arr.length; index++) {
    let swapped = false;    
    for (let j = 0; j < arr.length - 1; j++) {
        const ref= [...arr];
        if(arr[j] > arr[j+1]) {            
            arr[j+1] = ref[j];
            arr[j] = ref[j + 1];
            swapped = true;
        }
        
    }
    if(!swapped) {
        break;
    }
    
}
console.log(arr);