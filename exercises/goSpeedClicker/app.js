let count = 0;
let interval;
let timeLeft = 30000;

function countClicks() {
	count++;
	localStorage.setItem("counter", JSON.stringify(count));
	showCount();
}

function showCount() {
	document.getElementById("counter").innerHTML = count;
	return count;
}

document.getElementById("field").addEventListener("click", countClicks);

(function retrieveCount() {
	count = localStorage.getItem("counter", count);
	showCount();
})();

function countdown() {
	interval = setInterval(timer, 1000);
}

document.getElementById("starter").addEventListener("click", countdown);

function timer() {
	timeLeft -= 1000;
	document.getElementById("timer").innerHTML = timeLeft/1000;
	if (timeLeft === 0) {
		clearInterval(interval);
	}
}

