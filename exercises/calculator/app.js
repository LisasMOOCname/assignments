// adds two numbers
addBtn.onclick = function() {
    var add1 = document.getElementById("num1Add").value;
    add1 = Number(add1);
    var add2 = document.getElementById("num2Add").value;
    add2 = Number(add2);
    var output = document.getElementById("additionOutput");
    output.innerHTML = add1 + add2;
    document.getElementById("num1Add").value = "";
    document.getElementById("num2Add").value = "";
}

// subtracts two numbers
subtractBtn.onclick = function() {
    var subtract1 = document.getElementById("num1Subtract").value;
    subtract1 = Number(subtract1);
    var subtract2 = document.getElementById("num2Subtract").value;
    subtract2 = Number(subtract2);
    var output = document.getElementById("subtractionOutput");
    output.innerHTML = subtract1 - subtract2;
    document.getElementById("num1Subtract").value = "";
    document.getElementById("num2Subtract").value = "";
}

// multiplies two numbers
multiplyBtn.onclick = function() {
    var multiply1 = document.getElementById("num1Multiply").value;
    multiply1 = Number(multiply1);
    var multiply2 = document.getElementById("num2Multiply").value;
    multiply2 = Number(multiply2);
    var output = document.getElementById("multiplicationOutput");
    output.innerHTML = multiply1 * multiply2;
    document.getElementById("num1Multiply").value = "";
    document.getElementById("num2Multiply").value = "";
}