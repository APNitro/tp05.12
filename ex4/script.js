var txt = text1 + " " + text2;
var int = int1 + int2;
var title = document.querySelector("h1");
title.onmouseover = function() {
    title.innerText = txt + " " + "(Niska " + int + ")";
}