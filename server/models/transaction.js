const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  ammount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
  },
  category: { type: String, enum: ["Income", "Expense"] },
  date: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
