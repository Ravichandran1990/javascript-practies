  async function fetchImg() {
     return await fetch('http://127.0.0.1:5500/throttle.jpg').then((res) => {
         return res.blob()
     }).then((blob) => {
      let blobUrl = URL.createObjectURL(blob);
      document.querySelector('img').src = blobUrl;
      console.log(blobUrl);    
     })
  }
  let blobUrl = null;
function btnClick() {     
  blobUrl = fetchImg();  
}
document.querySelector('#btn').addEventListener('click', btnClick) 