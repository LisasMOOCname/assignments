var shopper = {
    name: "Lesa",
    itemsToBuy: 4,
    hasCoupons: false,
    groceryCart: ["fruit", "meat", "cheese", "chips"],
    shop: function(food) {
        shopper.groceryCart.push(food);
    }
};

shopper.shop("eggs");

console.log(shopper.groceryCart);