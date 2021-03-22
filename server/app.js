const config = require("./utils/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user");
const loginRoutes = require("./routes/login");
const transactionRoutes = require("./routes/transaction");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/users", userRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/transactions", transactionRoutes);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
