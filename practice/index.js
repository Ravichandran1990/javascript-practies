// var test1 = "Ravi"
// async function test() {
//       return await returnValue();
       
//         //console.log(test1)
//         //var test1 = "chan"        
// }
// function returnValue() {
//     let te;
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("return value");
//         }, 2000);
//     })
     
// }
// (async () => {     
//      await test().then((d) => {
//         console.log(d);
//     });
//     // console.log(tes);
// })();

const dates = [
    '2019/06/01',
    '2018/06/01',
    '2019/09/01', // This is the most recent date, but how to find it?
    '2018/09/01'
  ]
const maxDate = dates.reduce((max, d) => {
    return d > max ? d : max
   }, dates[0]);
console.log(maxDate);
