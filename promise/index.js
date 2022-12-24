console.log("Ravichandran1");
setTimeout(()=> console.log("Settimeut0"),12);
setTimeout(()=> console.log("Settimeut1"),0);
Promise.resolve().then(()=> console.log("Promise solve"));
console.log("Ravichandran 2")
function getFruit(name) {
    const obj = {
        pinapple:"emoji",
        apple:"Applle"
    }
    return Promise.resolve(obj[name]);
}
const makeSmooth = async() => {
    const a = await getFruit("pinapple");
    const b = await getFruit("apple");
   
    return new Promise(resolve => {
        resolve([a,b])
    });
}
    makeSmooth().then((val)=>console.log(val[0]));

 
makeSmooth().then(val => console.log({val}));

 function fun1() { 
    p1 = Promise.resolve(50);
    p2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("200")
        },1000);
    });
    p3 = new Promise(function(resolve, reject) {
        return resolve('geek');
    });
 
    return Promise.all([p1, p2, p3]);
}   
// fun1().then((val) => {
//     console.log(val);
// });
    const tOut = (t) => {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
             resolve(`Completed in ${t}`)
           },t)                       
        })
      }
      function fun2() {
          return new Promise((resolve,reject) => {
             setTimeout(() => {
                reject("func2 rejected")
             }, 2000)
          });
      } 

      function fun3() {
          return new Promise((resolve,reject) => {
             setTimeout(() => {
                reject("func3 rejected")
             }, 2000)
          });
      }


// 
    //   Promise.all([tOut(1000), tOut(2000)]).then(result => console.log(result))

    tOut(1000).then((data) => {
        console.log(data);
        return fun1()
    }).then((data) => {
        console.log(data);
        return fun2();
    }).then((data) => {
        console.log(data);
        return fun3()
    }).catch((err) => {
        console.log("error "+err);
    })