import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.js";
import { Request, Response } from "express";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.get("/test", async (req: Request, res: Response) => {
  res.json({
    message: "Kyu bhodi kay harkat ha Yaaaa ",
  });
});
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await connectDB();
});
