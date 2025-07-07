"use strict";

let secret=Math.round(Math.random()*20+1);
document.querySelector(".secret").innerHTML="?";
let score=20;
let highscore=0;
document.querySelector(".check").addEventListener("click", function () {
let guess=document.querySelector(".enter").value.trim();

if(guess===""){
document.querySelector(".message").innerHTML="Enter a number"; 
return;
}
let guessNumber=Number(guess);

if(guessNumber===secret){
    document.querySelector(".message").innerHTML="Correct ans!!";
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".secret").innerHTML=secret;
    document.querySelector(".secret").style.Width="200px";
    if(score>highscore){
    highscore=score;
     document.querySelector(".highscore").innerHTML = highscore;
     return;
  }
}
else if(score>1){
    if(guessNumber>secret){
       document.querySelector(".message").innerHTML="TOO HIGH!!";  
      
    }
    else{
         document.querySelector(".message").innerHTML="TOO LOW!!";  
        
    }
     score--;
         document.querySelector(".score").innerHTML=score;
}
    });
document.querySelector(".again").addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor="black";
    score=20;
    document.querySelector(".score").innerHTML = score;
    document.querySelector(".message").innerHTML="Start Guessing.."; 
     secret=Math.round(Math.random()*20+1);
    document.querySelector(".secret").innerHTML="?";
     document.querySelector(".enter").value = "";
});