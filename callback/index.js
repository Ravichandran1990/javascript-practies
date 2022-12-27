    const callback = function(msg) {
        console.log("Inside call Back " + msg)
    }
    initialFun("test",callback);
    
    function initialFun(test, fn) {
        console.log("test");

        setTimeout(function() {
            fn(test);
        }, 3000)
    }