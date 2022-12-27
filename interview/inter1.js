// const arr = [1,2,3,4,5,6,7,8]
// const result = arr.filter((a) => a > 4)
// .map((b) => b + b)
// .reduce((t,c) => t + c , 0);

// console.log(result);
// const arr1 = [];
const arr1 = [{id:1,val:[{name:"ravi"},{name:"ravi12"}]},{id:1,val:[{name:"ravi"},{name:"ravi21"}]}]
        .map((da) => da.val)
        // .map((d) => {
        //     return d;
        // })
        .reduce((d,e) => d.concat(e), [])
         
console.log(arr1);