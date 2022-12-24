
(function(){
    function getBlob(workerUrl) {
        return new Blob(["importScripts('" + workerUrl + "')"], {type: 'application/javascript'})
    }
    let worker = null;
    const blob = getBlob( 'http://127.0.0.1:5500/index.js' );
    const url = window.URL || window.webkitURL;
    const blobUrl = url.createObjectURL(blob);
    worker = new Worker(blobUrl);
    let count = 0;
    let btn = document.querySelector('#button');
    btn.addEventListener('click', () => {
        count++;
        worker.postMessage(count)
    })
    worker.onmessage = (event) => {
        document.querySelector('#result').innerHTML = event.data;
    }
     
    
}());
