# 🚀 ai-error-explainer-api

A backend API that converts programming error messages into **structured debugging insights** using AI.

Instead of long, unstructured explanations, this API returns:

* error type
* summary
* root cause
* first fix
* step-by-step debugging guidance

---

## 🧠 Why This Exists

While coding, error messages often:

* feel confusing
* lack context
* slow down debugging

This API solves that by turning raw errors into **clear, actionable insights**.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Gemini API (Google AI)
* REST API architecture

---

## 📦 Features

* 🔹 Converts error messages into structured JSON
* 🔹 AI-powered explanation using Gemini
* 🔹 API key authentication (middleware)
* 🔹 Clean backend architecture (route → controller → service)
* 🔹 Robust error handling and fallback responses

---
## 🧩 Challenges Faced

- Handling inconsistent AI responses (markdown → JSON parsing)
- Debugging API key and model compatibility issues
- Ensuring reliable structured output from generative AI
- Preventing multiple response errors in Express (headers already sent)

 --- 

## 📡 API Endpoint

### POST `/api/explain-error`

#### 🔸 Request Body

```json
{
  "error": "TypeError: Cannot read properties of undefined"
}
```

#### 🔸 Headers

```
x-api-key: your-api-key
Content-Type: application/json
```

---

## ✅ Example Response

```json
{
  "error_type": "TypeError",
  "summary": "Trying to access a property of undefined",
  "root_cause": "Variable is undefined or not initialized",
  "first_fix": "Check if variable exists before accessing properties",
  "debug_steps": [
    "Log variable before usage",
    "Ensure API response exists",
    "Check for typos in variable names"
  ],
  "confidence": 0.95
}
```

---

## 🏗️ Project Structure

```
src/
│
├── routes/
│   └── explainError.route.js
│
├── controllers/
│   └── explainError.controller.js
│
├── services/
│   └── explainError.service.js
│
├── middleware/
│   └── apiKeyAuth.js
```

---

## 🧪 Running Locally

### 1. Clone the repo

```
git clone https://github.com/your-username/error-explainer.git
cd error-explainer
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create `.env`

```
GEMINI_API_KEY=your_api_key_here
```

---

### 4. Start server

```
node index.js
```

Server runs on:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

| Key            | Description               |
| -------------- | ------------------------- |
| GEMINI_API_KEY | Gemini API key (required) |

---

## 🚀 Deployment

This API is deployed on Render:

```
https://your-app-name.onrender.com
```

---
## 🌐 Live API

Base URL:
https://your-app.onrender.com

Endpoint:
POST /api/explain-error

---
## 🧠 Future Improvements

* Detect programming language automatically
* Support full stack traces
* Add usage tracking & analytics
* Improve structured output consistency
* Build a frontend interface

---

## 👨‍💻 Author

Built by Sanket Khedkar

---

## 📌 Note

This project focuses on learning backend architecture, API design, and real-world debugging — not just using AI blindly.
