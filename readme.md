# NekoTube - AI Agent Project

## 📋 Overview

NekoTube is an AI-powered agent application built with **LangChain** and **LangGraph**. It uses a free AI model from **Groq** to answer user queries intelligently without any API costs.

---

## 🚀 What We Built

A **React Agent** that:

- ✅ Processes user messages
- ✅ Generates intelligent responses using LLM (Large Language Model)
- ✅ Uses **100% free API** (Groq)
- ✅ Runs on Node.js with ES Modules
- ✅ Loads API keys securely from `.env` file

---

## 🛠️ Installation

### 1. Install Dependencies

```bash
cd server
npm install
```

**Installed Packages:**

- `@langchain/anthropic` - LangChain's Anthropic integration (kept for reference)
- `@langchain/core` - Core LangChain utilities
- `@langchain/langgraph` - Graph-based agent framework
- `@langchain/groq` - **Groq integration** (used for free API)
- `dotenv` - Environment variable management
- `zod` - Data validation

### 2. Get Your Free Groq API Key

1. Visit: https://console.groq.com/keys
2. Sign up (free account)
3. Click **"Create API Key"**
4. Copy the key (starts with `gsk_`)

### 3. Setup `.env` File

Create `server/.env` file with:

```env
GROQ_API_KEY=gsk_your_key_here
```

Replace `gsk_your_key_here` with your actual Groq API key.

---

## 📁 Project Structure

```
NekoTube/
├── readme.md                    # Project documentation
├── package.json                 # Root dependencies
├── server/
│   ├── package.json            # Server dependencies
│   ├── agent.js                # Main AI agent code ⭐
│   ├── .env                    # API keys (DO NOT COMMIT)
│   ├── .gitignore              # Ignore .env file
│   └── node_modules/           # Dependencies
```

---

## 💡 Why Groq Instead of Anthropic?

| Feature           | Anthropic               | Groq                             |
| ----------------- | ----------------------- | -------------------------------- |
| **Cost**          | Paid (requires credits) | ✅ **FREE**                      |
| **Rate Limit**    | 5 requests/min (free)   | ✅ **50+ requests/day**          |
| **Speed**         | Slower                  | ✅ **Ultra-fast**                |
| **Model Quality** | Claude (excellent)      | ✅ **Llama 3.3 70B (excellent)** |
| **Setup**         | API key only            | ✅ **API key only**              |

**Decision:** We switched to **Groq** because you don't have credits for Anthropic API.

---

## 🎯 How It Works

### `agent.js` Explained

```javascript
// 1. Load environment variables from .env
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, ".env") });

// 2. Import LangChain components
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatGroq } from "@langchain/groq";

// 3. Create AI model instance
const model = new ChatGroq({
  model: "llama-3.3-70b-versatile", // Free model from Groq
  apiKey: process.env.GROQ_API_KEY, // Loaded from .env
});

// 4. Create agent with the model
const agent = createReactAgent({
  llm: model,
  tools: [], // No tools yet (can add later)
});

// 5. Send a message and get response
const result = await agent.invoke({
  messages: [
    {
      role: "user",
      content: "Hello, what is india capital?",
    },
  ],
});

// 6. Print results
console.log(result);
```

---

## ▶️ How to Run

```bash
node server/agent.js
```

**Output:**

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Hello, what is india capital?"
    },
    {
      "role": "assistant",
      "content": "The capital of India is New Delhi..."
    }
  ]
}
```

---

## 🔧 Troubleshooting

### ❌ Error: "Groq API key not found"

- ✅ Check if `.env` file exists in `server/` folder
- ✅ Verify `GROQ_API_KEY=` is not empty
- ✅ Make sure no spaces around the key

### ❌ Error: "Model decommissioned"

- ✅ Update model name to: `llama-3.3-70b-versatile`
- ✅ This is the latest free model from Groq

### ❌ Error: "credit balance too low"

- ✅ You were using Anthropic API
- ✅ Switch to Groq (we already did this)

---

## 🎓 What You Learned

1. ✅ **LangChain Integration** - How to use LangChain for AI agents
2. ✅ **API Management** - Secure API key handling with `.env`
3. ✅ **Free AI APIs** - Using Groq as a free alternative to paid APIs
4. ✅ **Node.js ES Modules** - Modern JavaScript imports
5. ✅ **Environment Variables** - Loading config from `.env` safely

---

## 📚 Resources

- [Groq Console](https://console.groq.com/)
- [LangChain Documentation](https://js.langchain.com/)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)

---

## 🎉 Next Steps

1. Try changing the user message in `agent.js`
2. Add more complex queries
3. Add tools to the agent (web search, calculator, etc.)
4. Build a REST API around the agent

Happy coding! 🚀
