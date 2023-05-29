import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/user");
app.use("/contact");

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
  process.exit(1);
});

// app.use(`error`)

export default app;
