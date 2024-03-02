//bubble creation
var bubble="";
function makebubble(){
    for(i=0;i<25;i++){
    bubble+=`<div id="bubble">${Math.floor(Math.random()*10)}</div>`
}
document.querySelector(".cont").innerHTML=bubble;
}
//timer
var timer=10;
setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector(".timer").textContent=timer;
    }
    else{
        clearInterval();
        document.querySelector(".cont").innerHTML="Game over"
    }
},1000)
//woring 
var hit=0;
function hitrn() {
     hit =Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent=hit;
}
hitrn();
var score=0;
function scoreup() {
     score += 10;
    document.querySelector(".score").textContent=score;
}
document.querySelector(".cont").addEventListener("click",function(det){
    var hitnum = Number(det.target.textContent);
    if(hitnum===hit){
        scoreup();
        hitrn();
        makebubble();
    }
    
})
makebubble();
function reload(){
    window.location.reload();
}