const express = require("express");
const router = express.Router();

const explainErrorController = require("../controllers/explainError.controller");
const apiKeyAuth = require("../middleware/apiKeyAuth");

router.post("/explain-error", apiKeyAuth, explainErrorController);

module.exports = router;