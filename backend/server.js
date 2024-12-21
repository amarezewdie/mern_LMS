import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/db.js";
import connectCloudinary from "./config/cluidnary.js";
import adminRoute from "./routes/adminRoute.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

//config
const app = express();
const port = process.env.PORT || 5000;
connectDb();
connectCloudinary();

//middleware

app.use(
  cors({
    origin: "http://localhost:5174", // Frontend URL
    credentials: true, // Allow cookies/credentials
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//api
app.use("/api/admin", adminRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.json({ success: false, message: "something went wrong" });
});
