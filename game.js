const game=document.querySelector(".game");
const dino=document.querySelector(".dino");
const obstacle=document.querySelector(".obstacle");
let score=0;
let cross=true;

document.onkeydown=(e)=>{
    document.querySelector("p").innerText="";
    console.log(e.keyCode);
    if(e.keyCode===38){
        dino.classList.add('animate');
       setTimeout(()=>{
        dino.classList.remove("animate");
       },800);

    }
    if(e.keyCode===39){
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=dinox+123+"px";
    }
    if(e.keyCode===37){
        dinoy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=(dinoy-113)+"px";
        
    }

setInterval(()=>{
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"))
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    if(offsetX<60 && offsetY<50){
        document.querySelector("p").innerText="Game Over! Reload the page for restart"
        obstacle.classList.remove('animateObs');
    }
    else if(offsetX<80 && cross){
        score+=1;
        update(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000)
        setTimeout(()=>{
            aniDur=parseInt(window.getComputedStyle(obstacle).getPropertyValue("animation-duration"));
            newDur=aniDur-0.1;
            obstacle.style.animationDuration=newDur+"s";
        },500)

    }

},10)


}
function update(score){
    document.querySelector("span").innerText="Score:-"+score;
}