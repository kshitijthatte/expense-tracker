const router = require("express").Router();
const {
  addTransaction,
  getAllTransactions,
} = require("../controllers/transaction");

router.post("/", addTransaction);
router.get("/", getAllTransactions);

module.exports = router;
