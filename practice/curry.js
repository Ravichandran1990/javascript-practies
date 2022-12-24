function curry(fun) {
    return function curried(...args) {
        if (args.length >= fun.length) {
            return fun.apply(this, args)
        } else {
            return function(...args1) {
                return curried.apply(this, args.concat(args1));
            }            
        }
    }
}

function multiple(a,b,c,d) {
    return a * b * c * d
}

const curryMultipleFun = curry(multiple);
const curryMultipleCal = curryMultipleFun(2)(3,5)(4)(5);
console.log(curryMultipleCal);