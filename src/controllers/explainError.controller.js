const explainErrorService = require("../service/explainError.service");

const explainErrorController = async (req, res) => {
  try {
    console.log(" Controller hit");

    const { error } = req.body;

    if (!error) {
      return res.status(400).json({
        message: "Error field is required"
      });
    }

    console.log(" Error received:", error);

    const result = await explainErrorService(error);

    console.log(" Service result:", result);

    return res.status(200).json(result);

  } catch (err) {
    console.log(" Controller Error:", err.message);

    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

module.exports = explainErrorController;