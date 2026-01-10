var result = document.getElementById("programmer").innerHTML;
console.log(result);

var result2 = document.getElementsByTagName("p")[1].innerHTML;
console.log(result2);

var result3 = document.getElementsByClassName("apps")[0].innerHTML;
console.log(result3);

var item = document.getElementsByClassName("apps").length;
var i;
for (i=1; i< item; i++){
    var result4 = document.getElementsByClassName("apps")[i].innerHTML;
    console.log(result4);
}

var result5 = document.getElementsByTagName("p")[0].innerHTML = "Hello Programmer!";
console.log(result5);

var result6 = document.getElementsByTagName("p")[0].className = "blue";
console.log(result6);

var result7 = document.getElementsByTagName("p")[1].style.color = "green";
console.log(result7)

var result8 = document.getElementsByTagName("P")[2].setAttribute("class", "yellow")
console.log(result8)


var paragraph = document.createElement("P");
paragraph.innerHTML = "New Paragraph";
document.body.appendChild(paragraph).setAttribute("class", "blue");

var list = document.getElementById("language");
list.removeChild(list.childNodes[1]);

// document.querySelectorAll("p");

function dayMode(){
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.
    backgroundColor = "white";
}

function nightMode(){
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.
    backgroundColor = "black";
}