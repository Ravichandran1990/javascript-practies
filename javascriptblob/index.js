  async function fetchImg() {
     return await fetch('http://127.0.0.1:5500/javascriptblob/throttle.JPG').then((res) => {
         return res.blob()
     }).then((blob) => {
      debugger;
      let blobUrl = URL.createObjectURL(blob);
      document.querySelector('img').src = blobUrl;
      console.log(blobUrl);    
     })
  }
  let blobUrl = null;
function btnClick() {     
  blobUrl = fetchImg();   
}
function btnClick1() {     
  display("https://www.youtube.com/embed/R61Mv2PcYwM");
}
document.querySelector('#btn').addEventListener('click', btnClick);
document.querySelector('#btn1').addEventListener('click', btnClick1);

function createObjectURL(object) {
  return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
}

async function display(videoStream){
  var video = document.getElementById('_video');
  let blob = await fetch(videoStream).then(r => r.blob());
  var videoUrl=createObjectURL(blob);
  video.src = videoUrl;
}