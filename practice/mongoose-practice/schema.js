const bookInventorySchema = new mongoose.Schema (
    {
         title: "String",
         author: "String",
         isBestseller: Boolean,
         price: Number,
         reviewSources: [String],
         storeInfo: {
             shelfLocation: "String",
             isInStock: Boolean,
             salesToDate: Number
         }
})