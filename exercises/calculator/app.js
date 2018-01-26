// adds two numbers
addBtn.onclick = function() {
    var add1 = Number(document.getElementById("num1Add").value);
    var add2 = Number(document.getElementById("num2Add").value);
	document.getElementById("additionOutput").innerHTML = add1 + add2;
	
	//clears input fields when total is displayed
    document.getElementById("num1Add").value = "";
    document.getElementById("num2Add").value = "";
}

// subtracts two numbers
subtractBtn.onclick = function() {
    var subtract1 = Number(document.getElementById("num1Subtract").value);
    var subtract2 = Number(document.getElementById("num2Subtract").value);
	document.getElementById("subtractionOutput").innerHTML = subtract1 - subtract2;

	//clears input fields when total is displayed
    document.getElementById("num1Subtract").value = "";
    document.getElementById("num2Subtract").value = "";
}

// multiplies two numbers
multiplyBtn.onclick = function() {
    var multiply1 = Number(document.getElementById("num1Multiply").value);
    var multiply2 = Number(document.getElementById("num2Multiply").value);
	document.getElementById("multiplicationOutput").innerHTML = multiply1 * multiply2;
	
	//clears input fields when total is displayed
    document.getElementById("num1Multiply").value = "";
    document.getElementById("num2Multiply").value = "";
}