 const throttle = (callback, duration) => {
        let oldtime;
        return (...args) => {
            const now = new Date().getTime();
            if(now - oldtime < duration) {
                return;
            };
            oldtime = now;
            return callback(...args)
        }
 }
 document.querySelector('#btn').addEventListener('click', throttle(() => {
    console.log("Demo Throtting");
 }, 5000))