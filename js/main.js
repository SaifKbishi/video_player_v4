const videoElem = document.getElementsByTagName('video')[0];
const allSpans = document.getElementsByTagName('span');
const captionsClick = document.getElementsByClassName('captions')[0];


videoElem.addEventListener('timeupdate', ()=>{
   //document.getElementById("demo").innerHTML = "The current playback position is " + videoElem.currentTime + " seconds.";
   for(let i=0; i < allSpans.length; i++){
     if(videoElem.currentTime > allSpans[i].getAttribute('data-start') && videoElem.currentTime < allSpans[i].getAttribute('data-end')){
       allSpans[i].style.color ="#FFAD33";
     }else{
       allSpans[i].style.color ="black";
     }
   }
});

captionsClick.addEventListener('click', (event)=>{
  if(event.target.tagName == 'SPAN'){
    videoElem.currentTime = event.target.getAttribute('data-start');
  }
});
