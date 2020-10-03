var h3=document.querySelector("h3");
var body=document.getElementById("gradient");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
h3.textContent="linear-gradient(to right, red , yellow)";

function setBackground()
{
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    h3.textContent=body.style.background;
}

color1.addEventListener("input",setBackground);
color2.addEventListener("input",setBackground);
