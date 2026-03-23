const axios = require("axios");

const explainErrorService = async (error) => {
  try {
    console.log("⚙️ Service running (Gemini)");

    const response = await axios.post(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `
You are a debugging assistant.

Return ONLY valid JSON in this format:

{
  "error_type": "",
  "summary": "",
  "root_cause": "",
  "first_fix": "",
  "debug_steps": [],
  "confidence": 0.0
}

Error:
${error}
`
              }
            ]
          }
        ]
      }
    );

    // ✅ STEP 1: Extract AI text
    const aiText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

   

    // ✅ STEP 2: PARSE HERE (this is your code)
    let cleanedText = aiText.trim();

// 🔹 Remove ```json and ```
if (cleanedText.startsWith("```")) {
  cleanedText = cleanedText.replace(/```json|```/g, "").trim();
}

// 🔥 Remove ANY markdown code block (robust)
cleanedText = cleanedText
  .replace(/```[a-zA-Z]*\n?/g, "") // removes ```json or ``` or ```js
  .replace(/```/g, "")            // removes closing ```
  .trim();

let parsed;

try {
  parsed = JSON.parse(cleanedText);
} catch (e) {
  console.log("⚠️ JSON parse failed");
  

  parsed = {
    error_type: "Unknown",
    summary: aiText,
    root_cause: "Could not parse structured output",
    first_fix: "Try again",
    debug_steps: [],
    confidence: 0.5
  };
}

return parsed;
  } catch (err) {
    console.log("❌ FULL ERROR:", err.response?.data || err.message);

    return {
      error_type: "API_ERROR",
      summary: "Failed to generate explanation",
      root_cause: "Gemini API request failed",
      first_fix: "Check API key or API format",
      debug_steps: [],
      confidence: 0
    };
  }
};

module.exports = explainErrorService;