import { Router } from "express";
import { addDoctor } from "../controllers/adminControllers.js";
import upload from "../middleware/muter.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleAuth from "../middleware/roleAuth.js";

const adminRoute = Router();

adminRoute.post(
  "/add-doctor",
  authMiddleware,
  roleAuth(["admin"]),
  upload.single("image"),
  addDoctor
);

export default adminRoute;
