const count = () => {
    let num = 0;
    return () => {
        console.log("Number "+(num++));
    }
}
const count1 = count();
count1();
count1();
count1();
count1();