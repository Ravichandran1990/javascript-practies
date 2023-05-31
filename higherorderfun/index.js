function higherOrder(fn) {

    return this
}

const orderFun = higherOrder(function() {console.log("test")});
orderFun();


const obj = {
    name: "Ravi"
}
const obj1 = {lname:"robert"};
 
console.log({...obj,...obj1});