 async function myTest() {
     const test = await func1();
     console.log(test);
     const test2 = await func2()
     console.log(test2);
 };

function func1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello")
        }, 4000)
    })
}
function func2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("World")
        }, 4000)
    })
}
myTest();
 