# 🚀 Error Explainer API

A backend API that converts programming error messages into **structured debugging insights** using AI.

Instead of long, unstructured explanations, this API returns:
- error type
- summary
- root cause
- first fix
- step-by-step debugging guidance

---

## 🧠 Why This Exists

While coding, error messages often:
- feel confusing
- lack context
- slow down debugging

This API solves that by turning raw errors into **clear, actionable insights**.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- Gemini API (Google AI)
- REST API architecture

---

## 📦 Features

- 🔹 Converts error messages into structured JSON
- 🔹 AI-powered explanation using Gemini
- 🔹 API key authentication (middleware)
- 🔹 Clean backend architecture (route → controller → service)
- 🔹 Robust error handling and fallback responses

---

## 📡 API Endpoint

### POST `/api/explain-error`

#### 🔸 Request Body

```json
{
  "error": "TypeError: Cannot read properties of undefined"
}
