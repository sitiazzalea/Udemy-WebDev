function getRandomNumber() {
    let rn = Math.floor(Math.random()*6) + 1;
    return rn;
}

rn1 = getRandomNumber();    
// alert("random number 1: " + rn1);    
rn2 = getRandomNumber();
// alert("random number 1: " + rn1 + " random number 2: " + rn2);   
// console.log("random number 1: " + rn1 + " random number 2: " + rn2); 


document.querySelector(".img1").setAttribute("src", "images/dice" + rn1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + rn2 + ".png");
// Your code here

if (rn1 > rn2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins"
}
else if (rn2 > rn1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins &#128681"        
}
else {
    document.querySelector("h1").innerHTML = "Refresh Me Again!&#128681"
}

// document.addEventListener("DOMContentLoaded", function() {
// });

