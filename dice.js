
var p1 = Math.floor(Math.random()*6+1);


document.getElementById("image1").src = "images/dice"+p1+".png";



var p2 = Math.floor(Math.random()*6+1);

document.getElementById("image2").src = "images/dice"+p2+".png";


if(p1>p2){
    document.querySelector("h1").innerHTML="Player1 Won !"
}
else if(p2>p1){
    document.querySelector("h1").innerHTML="Player2 Won !"
}
else{
    document.querySelector("h1").innerHTML="Draw, Reload"
}

function Reload() {
    location.reload();
  }
