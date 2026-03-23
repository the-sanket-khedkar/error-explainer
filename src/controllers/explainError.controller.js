const explainErrorService = require("../services/explainError.service");

const explainErrorController = async (req, res) => {
  try {
    console.log("➡️ Controller hit");

    // 🔹 Extract input
    const { error } = req.body;

    // 🔹 Validate input
    if (!error) {
      return res.status(400).json({
        error_type: "BAD_REQUEST",
        summary: "Error field is required",
        root_cause: "Missing 'error' in request body",
        first_fix: "Send { error: 'your error message' }",
        debug_steps: [],
        confidence: 1
      });
    }

    console.log("📥 Error received:", error);

    // 🔹 Call service
    const result = await explainErrorService(error);

    console.log("📤 Service result:", result);

    // 🔹 Send response (ONLY ONCE)
    return res.status(200).json(result);

  } catch (err) {
    console.log("❌ Controller Error:", err.message);

    // 🔹 Always return to avoid double response bug
    return res.status(500).json({
      error_type: "SERVER_ERROR",
      summary: "Internal Server Error",
      root_cause: err.message,
      first_fix: "Check server logs",
      debug_steps: [],
      confidence: 0
    });
  }
};

module.exports = explainErrorController;