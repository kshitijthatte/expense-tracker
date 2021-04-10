const router = require("express").Router();
const {
  addTransaction,
  getAllTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction");

router.post("/", addTransaction);
// router.get("/", getAllTransactions);
router.get("/:id", getTransaction);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

module.exports = router;
