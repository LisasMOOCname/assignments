function countGoombas(event) {
	event.preventDefault();
	var goombasCaught = document.getElementById("goombasCaught").value;
	var goombaCost = goombasCaught * 5;

	document.getElementById("goombaTotal").innerHTML = goombaCost;
	return goombaCost;
}

document.getElementById("goombaCost").addEventListener("click", countGoombas);

function countBobombs(event) {
	event.preventDefault();
	var bobombsCaught = document.getElementById("bobombsCaught").value;

	return document.getElementById("bobombTotal").innerHTML = bobombsCaught * 7;
}

document.getElementById("bobombCost").addEventListener("click", countBobombs);

function countCheepCheeps(event) {
	event.preventDefault();
	var cheepCheepsCaught = document.getElementById("cheepCheepsCaught").value;
	
	return document.getElementById("cheepCheepTotal").innerHTML = cheepCheepsCaught * 11;
}

document.getElementById("cheepCheepCost").addEventListener("click", countCheepCheeps);


function totalCost(event) {
	event.preventDefault();
	var g = countGoombas(event);
	var b = countBobombs(event);
	var c = countCheepCheeps(event);
	var total = g + b + c;
	return document.getElementById("totalCost").innerHTML = total;
}

document.getElementById("form").addEventListener("submit", totalCost);