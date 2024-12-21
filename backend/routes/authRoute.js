import { Router } from "express";
import {
  login,
  logout,
  refresh,
  register,
} from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.get("/refresh", refresh);
authRoute.post("/logout", logout);

export default authRoute;
