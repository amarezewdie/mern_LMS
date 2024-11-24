import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/db.js";

//config
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["get", "put", "post", "patch"],
    allowedHeaders: ["content-type", "authorization"],
    credentials: true,
  })
);
app.options("*", cors()); // Preflight for all routes

app.use(express.json());

app.listen(port, () => {
  connectDb();
  console.log(`server running on port ${port}`);
});
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.json({ success: false, message: "something went wrong" });
});
