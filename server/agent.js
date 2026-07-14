import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });


import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  apiKey: process.env.GROQ_API_KEY,
});

const agent = createReactAgent({
  llm: model,
  tools: [],
});

const result = await agent.invoke({
  messages: [
    {
      role: "user",
      content: "Hello, what is india capital?",
    },
  ],
});

// console.log(result.messages.at(-1)?.content);

console.log(result);
