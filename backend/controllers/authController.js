import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

// Register Function
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email format",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already in use" });
    }

    // Check password strength
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
      role,
    });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};


//login function

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT tokens
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "1m" } // Access token expiration
    );

    const refreshToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" } // Refresh token expiration
    );
    // Store the refresh token securely in cookies
    res.cookie("JWT", refreshToken);

    res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      role: user.role,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



//refresh function

const refresh = (req, res) => {
  try {
    // Extract cookies from the request
    const cookies = req.cookies;
   // console.log("Cookies received:", cookies); // Debugging log

    // Ensure the `jwt` cookie is present
    if (!cookies?.JWT) {
      console.error("No JWT cookie found");
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No refresh token found",
      });
    }

    const refreshToken = cookies.JWT;

    // Verify the refresh token
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
      if (err) {
        console.error("Refresh token verification failed:", err);

        return res.status(403).json({
          success: false,
          message: "Invalid or expired refresh token",
        });
      }

      // Generate a new access token
      const accessToken = jwt.sign(
        { id: decoded.id, role: decoded.role },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: "15m" } // 1 minute expiration
      );

      console.log("New access token generated:", accessToken); // Debugging log

      // Respond with the new access token
      return res.status(200).json({
        success: true,
        accessToken,
      });
    });
  } catch (err) {
    console.error("Error refreshing token:", err);

    // General error handling
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Logout Function
const logout = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logged out successfully" });
};

export { register, login, refresh, logout };
