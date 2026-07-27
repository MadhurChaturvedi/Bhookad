import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI;
    const dbName = process.env.DB_NAME;

    if (!uri) {
      throw new Error("MONGO_URI is missing");
    }

    if (!dbName) {
      throw new Error("DB_NAME is missing");
    }

    await mongoose.connect(uri, {
      dbName,
    });

    console.log(`✅ MongoDB Connected`);
    console.log(`📂 Database: ${dbName}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌", error.message);
    }

    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  console.log("🟢 Database Connected");
});

mongoose.connection.on("error", (err) => {
  console.error("🔴 Database Error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("🟡 Database Disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("👋 Database Closed");
  process.exit(0);
});


