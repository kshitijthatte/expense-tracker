const User = require("../models/user");
const Transaction = require("../models/transaction");
const jwt = require("jsonwebtoken");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

exports.addTransaction = async (request, response, next) => {
  const body = request.body;
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);

  const transaction = new Transaction({
    ammount: body.ammount,
    category: body.category,
    description: body.description,
    date: body.date,
    user: user._id,
  });

  const savedTransaction = await transaction.save();
  user.transactions = user.transactions.concat(savedTransaction._id);
  await user.save();

  response.json(savedTransaction);
};

// exports.getAllTransactions = async (request, response) => {
//   const transactions = await Transaction.find({}).populate("user", {
//     email: 1,
//     name: 1,
//   });

//   response.json(transactions);
// };

exports.getTransaction = async (request, response) => {
  const transaction = await Transaction.findById(request.params.id);
  if (transaction) {
    response.json(transaction.toJSON());
  } else {
    response.status(404).end();
  }
};

exports.updateTransaction = async (request, response) => {
  const body = request.body;
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);
  const transactionToUpdate = await Transaction.findById(request.params.id);

  if (user.id !== transactionToUpdate.user.toString()) {
    return response.status(403).json({
      error: "ACCESS DENIED",
    });
  }

  const transaction = {
    ammount: body.ammount,
    category: body.category,
    description: body.description,
    date: body.date,
    user: user._id,
  };

  const updatedTransaction = await Transaction.findByIdAndUpdate(
    request.params.id,
    transaction,
    { new: true }
  );

  if (updatedTransaction) {
    response.json(updatedTransaction.toJSON());
  } else {
    response.status(404).end();
  }
};

exports.deleteTransaction = async (request, response) => {
  await Transaction.findByIdAndRemove(request.params.id);
  response.status(204).end();
};
