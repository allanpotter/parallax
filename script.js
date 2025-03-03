let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");
let desertMoon = document.getElementById("desert-moon");
let man = document.getElementById("man");


window.addEventListener("scroll",()=>{
  let value = window.scrollY;
  moon.style.top = value * .9 + "px";
  text.style.top = 80 + value * -0.2 + "%";
  train.style.left = value * 1.5 + "px";
  desertMoon.style.top = value * .3 +"px";
  man.style.left = value * .6 + "px";
})

let calcScrollValue = ()=>{
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight - documentElement.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100)/calcHeight);

  if(pos > 100){
    scrollProgress.style.display = "grid";
  }else{
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;