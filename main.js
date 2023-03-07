 var buttEl = document.querySelector(".btn");
 var allpage = document.querySelector("body");
 var box = document.querySelector(".divv");
 const Colors = ["red", "blue", "green", "yellow", "white"]
 var i = 0;
 buttEl.onclick = function () {
    allpage.style.backgroundColor = Colors[i];
    box.style.backgroundColor = Colors[i - 1];
    i++;
    if(i == (Colors.length)) {
        i = 0;
    }
 }