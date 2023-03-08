const data = [1, 2, 3, 4, 5];

// Array.prototype.myCustomFilter = function (fn) {
//   const filtered = []; // it will receive all values that match to condition passed in fn callback.

//   for (let i = 0; i < this.length; i++) {
//     console.log(fn(this[i]));
//     if (fn(this[i])) {
//       filtered.push(this[i]);
//     }
//   }

//   return filtered;
// };

// const filteredData = data.myCustomFilter(myFunction);
// function myFunction(el) {
//     if (el > 2) return el;
// }
// console.log(filteredData);


Array.prototype.myCustomMap = function (fn) {
  const filtered = []; // it will receive all values that match to condition passed in fn callback.

  for (let i = 0; i < this.length; i++) {
    console.log(fn(this[i]));
    if (fn(this[i])) {
      filtered.push(fn(this[i]));
    }else {
        filtered.push(this[i]); 
    }
  }

  return filtered;
};
const compare = 2
const filteredData = data.myCustomMap(myFunction);

function myFunction(el) {
    if (el > compare) return el * compare;
}
console.log(filteredData);