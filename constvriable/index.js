const arr = ["ravi","chan"];
var index;
for (index = 0; index < arr.length; index++) {
    ((name) => {
        setTimeout(() => {
            console.log(name);
         },300);
    })(arr[index]);
        
   
}

// const arr = ['ravi','john','mickel'];
// // arr.length = 2;
// arr[6] = "mock"; 
// console.log(arr[5]);