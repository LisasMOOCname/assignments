var box = document.getElementById("box");
box.onmouseover = function(event) {
    box.style.backgroundColor = "blue";
}

box.onmousedown = function(event) {
    box.style.backgroundColor = "red";
}

box.onmouseup = function(event) {
    box.style.backgroundColor = "yellow";
}

box.ondblclick = function(event) {
    box.style.backgroundColor = "green";
}

window.onwheel = function(event) {
    box.style.backgroundColor = "orange";
}
