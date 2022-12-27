const debounce = (...args) => {
    let clearTime;
          
    return () => {
        clearTimeout(clearTime);
        clearTime = setTimeout(() => {
            args[0](args[2])
        }, args[1]);
    }
    
}
let timer;
function debounce1(func, timeout = 3000, a){
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, a); }, timeout);
    };
  }
// let debo = debounce
// debounce(load, 12,32)
document.querySelector('#btn').addEventListener('click', testing.bind(this));
// document.querySelector('#btn').addEventListener('click', debounce1(load));
// testing();
// let test;
function testing() {
    debounce1(load, 3000, 123);
}
 
function load(params) {    
    console.log("Debouncing Demo" +params);    
}