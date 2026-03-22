const axios = require("axios");

const explainErrorService = async (error) => {
  try {
    console.log("⚙️ Service running");

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Explain programming errors in simple terms. Give a short explanation and a clear first fix."
          },
          {
            role: "user",
            content: error
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ AI response received");

    const aiText =
      response.data?.choices?.[0]?.message?.content || "No explanation generated";

    return {
      explanation: aiText,
      first_fix: "Check the variables and inputs related to the error",
      confidence: 0.8
    };

  } catch (err) {
    console.log("❌ Service Error:", err.message);

    return {
      explanation: "Failed to generate explanation",
      first_fix: "Check API key or request format",
      confidence: 0
    };
  }
};

module.exports = explainErrorService;