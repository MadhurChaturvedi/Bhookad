import { ChatAnthropic } from "@langchain/anthropic";

const llm = new ChatAnthropic({
  modelName: "claude-opus-4-5-20251101",
});
