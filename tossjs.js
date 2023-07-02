let head = document.getElementById("head");
let tail = document.getElementById("tail");
let result = document.querySelector("#result");
head.addEventListener('click',toss);
tail.addEventListener('click',toss);
function toss(event){
    let clicked = event.target;
    let random = Math.floor(Math.random()*2);
    if(clicked === head){
      if(random == 0){
        result.innerHTML = "cool! Its a HEAD";
      }
      else{
        result.innerHTML = "ouch! Its a TAIL";
      }
    }
    if(clicked === tail){
        if(random == 1){
            result.innerHTML = "cool! Its a Tail";
        }
        else{
            result.innerHTML = "ouch! Its a Head";
        }
      }
    }