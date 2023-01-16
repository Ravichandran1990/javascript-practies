var global = "global Scope";
function test() {
    //var global = "local scope";
    function f() {
        return global;
    }
    return f;
}
console.log(test()());