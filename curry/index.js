function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          console.log(this);
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }
function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  // alert( curriedSum(1, 2, 3) ); // 6, still callable normally
  console.log(( curriedSum(1)(2,3) )); // 6, currying of 1st arg
  // alert( curriedSum(1)(2)(3) ); // 6, full currying