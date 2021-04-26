const User = require("../models/user");
const Transaction = require("../models/transaction");

exports.getTransactionById = (req, res, next, id) => {
  Transaction.findById(id).exec((err, transaction) => {
    if (err) {
      return res.status(400).json({
        error: "Transaction not found in DB",
      });
    }
    req.transaction = transaction;
    next();
  });
};

exports.addTransaction = async (req, res) => {
  const body = req.body;
  const user = await User.findById(req.user.id);
  const transaction = new Transaction({
    ammount: body.ammount,
    category: body.category,
    description: body.description,
    date: body.date,
    user: user._id,
  });

  const savedTransaction = await transaction.save();
  res.json(savedTransaction);
};

exports.getTransaction = (req, res) => {
  return res.json(req.transaction);
};

exports.getAllTransactions = async (req, res) => {
  const transactions = await Transaction.find({
    user: req.user.id,
  });

  res.json(transactions);
};

exports.updateTransaction = async (req, res) => {
  const body = req.body;

  const updatedTransaction = await Transaction.findByIdAndUpdate(
    req.transaction.id,
    {
      ammount: body.ammount,
      category: body.category,
      description: body.description,
      date: body.date,
      user: req.transaction.user,
    },
    { new: true }
  );

  if (updatedTransaction) {
    res.json(updatedTransaction.toJSON());
  } else {
    res.status(404).end();
  }
};

exports.deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndRemove(req.transaction.id);
  res.status(204).end();
};
