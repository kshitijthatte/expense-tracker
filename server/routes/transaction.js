const router = require("express").Router();
const {
  isSignedIn,
  isAuthenticated,
  isAuthorized,
} = require("../controllers/auth");
const {
  getTransactionById,
  addTransaction,
  getTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);
router.param("transactionId", getTransactionById);

router.post("/:userId/add", isSignedIn, isAuthenticated, addTransaction);

router.get("/:userId", isSignedIn, isAuthenticated, getAllTransactions);

router.get(
  "/:userId/:transactionId",
  isSignedIn,
  isAuthenticated,
  isAuthorized,
  getTransaction
);

router.put(
  "/:userId/update/:transactionId",
  isSignedIn,
  isAuthenticated,
  isAuthorized,
  updateTransaction
);

router.delete(
  "/:userId/delete/:transactionId",
  isSignedIn,
  isAuthenticated,
  isAuthorized,
  deleteTransaction
);

module.exports = router;
