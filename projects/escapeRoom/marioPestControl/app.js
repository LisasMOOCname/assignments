var baddies = [
               {name: "Goomba", amtCaught: 12, price: 5},
			   {name: "Bob-omb", amtCaught: 8, price: 7},
			   {name: "Cheep-cheep", amtCaught: 5, price: 11}
			   ];
			   
function calcBaddieTotal() {
	var baddieTotals = [];
    for(var i =0; i < baddies.length; i++){
	    var baddiePrice = baddies[i].amtCaught * baddies[i].price;
        baddieTotals.push(baddiePrice);
	}
	return baddieTotals;
}

(function displayTotals(charges) {
	var baddieTotals2 = calcBaddieTotal();
	document.getElementById("goombaTotal").innerHTML = baddieTotals2[0];
	document.getElementById("bobombTotal").innerHTML = baddieTotals2[1];
	document.getElementById("cheepcheepTotal").innerHTML = baddieTotals2[2];
	
	var totalPrice = 0;
	for(var i = 0; i < baddieTotals2.length; i++){
		totalPrice += baddieTotals2[i];
	}
	document.getElementById("totalCost").innerHTML = totalPrice;
})();
