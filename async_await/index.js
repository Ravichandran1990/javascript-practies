https://jsonplaceholder.typicode.com/todos/1

//  async function myTest() {
//      const test = await func1();
//      console.log(test);
//      const test2 = await func2()
//      console.log(test2);
//  };

// function func1(num = 3) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello" +num)
//         }, 4000)
//     })
// }
// function func2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("World")
//         }, 2000)
//     })
// }
// myTest();

// async function fun3() {
//     for (let index = 0; index < 4; index++) {
//         const log = await func1(index);
//         console.log(log);        
//     }
// }
// fun3();

function fetchApi() {
    return fetch('https://jsonplaceholder.typicode.com/todos/-11')
}

async function todos() {
    const promiseData = fetchApi().then((data) => {
         if(data.status !== 200) {
             return Promise.reject("404 not found")
         }         
          return data.json();
    }).then((result) => {
        return result;
    }).catch((err) => {
        console.log("err "+err);
    });
    console.log(await promiseData);     
}

todos();


 