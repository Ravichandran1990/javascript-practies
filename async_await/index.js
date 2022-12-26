 async function myTest() {
     const test = await func1();
     console.log(test);
     const test2 = await func2()
     console.log(test2);
 };

function func1(num = 3) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello" +num)
        }, 4000)
    })
}
function func2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("World")
        }, 2000)
    })
}
myTest();

async function fun3() {
    for (let index = 0; index < 4; index++) {
        const log = await func1(index);
        console.log(log);        
    }
}
fun3();


 