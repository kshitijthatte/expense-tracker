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
  category: {
    type: String,
    required: true,
  },
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
