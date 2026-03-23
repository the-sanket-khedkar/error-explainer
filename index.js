require('dotenv').config();
const express = require("express");

const app = express();

const explainErrorRoute = require("./src/routes/explainError.route");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10
});

app.use(limiter);
app.use(express.json());

app.use("/api", explainErrorRoute);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});