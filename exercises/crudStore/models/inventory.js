const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
    {
        item: {
            type: "String",
            required: true
        },
        styles = [String],
        price: Number,
        isOnSale = Boolean,
        inventoryInfo: {
            quantityInStock: Number,
            IsOnBackorder: Boolean
        }
    }
);

module.exports = mongoose.model("Inventory", inventorySchema);