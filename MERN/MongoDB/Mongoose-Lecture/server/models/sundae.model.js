const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({
    flavor: String,
    numScoops: Number,
    nuts: Boolean,
    price: Decimal128,
    toppings: [String],
    customerName: Straing,
})

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;