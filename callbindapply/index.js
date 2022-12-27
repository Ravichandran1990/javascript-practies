function callFun(arg, t) {
    this.a = 'b'
    console.log(this);
    console.log(arg, t);
}
const obj = {
    1: '1',
    a: 'a'
}

callFun.call(obj,"ravi","chan");
console.log(obj);

const arr = ["asd_asd","qwe_asd","weqwqw_ldfk"];
const re = arr.map(e => e.split("_")[1]);
console.log(re);

function test(a,s) {
    console.log(a,s);
}

test(1,2,3,4)

function curry(fun) {
    return function curried(...args){
        if(args.length >= fun.length) {
            return fun.apply(this,args);
        }else {
            return function(...args1){
                return curried.apply(this, args.concat(args1));
            }
        }
    }
}

function add(a,b,c,d) {
    return a + b +c +d
}
const addtion = curry(add);
const radd = addtion(2)(3)(4)(5);
console.log(radd);


