import express, { Application } from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";

import userRoutes from "./routes/users/users.route";
import contactRoutes from "./routes/contacts/contacts.route";
import { handleErrors } from "./errors";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/contact", contactRoutes);

app.use(handleErrors);

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
  process.exit(1);
});

export default app;
