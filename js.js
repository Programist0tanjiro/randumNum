const but = document.getElementById("buttun1");
const label = document.getElementById("h1");
const min = 1;
const max = 6;
let randomNum;

but.onclick = function(){
 randomNum =  Math.floor(Math.random() * max) + min;
 label.textContent = randomNum;
}