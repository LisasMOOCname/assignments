var box = document.getElementById("box");

box.onmouseover = function (event) {
    box.style.backgroundColor = "blue";
}

box.onmousedown = function (event) {
    box.style.backgroundColor = "red";
}

box.onmouseup = function (event) {
    box.style.backgroundColor = "yellow";
}

box.ondblclick = function (event) {
    box.style.backgroundColor = "green";
}

window.onwheel = function (event) {
    box.style.backgroundColor = "orange";
}

window.onkeyup = function (event) {
    switch (event.which) {
        case 71:
            box.style.backgroundColor = "green";
            break;

        case (event.which === 66):
        case (event.which === 98):
            box.style.backgroundColor = "blue";
            break;
        case (event.which === 114):
            box.style.backgroundColor = "red";
            break;
        case (event.which === 121):
            box.style.backgroundColor = "yellow";
            break;
        case (event.which === 103):
            box.style.backgroundColor = "green";
            break;
        case (event.which === 111):
            box.style.backgroundColor = "orange";
    }
}


