import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Get the token from the `Authorization` header (Bearer token)
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = decoded; // Attach the decoded payload to the request object
    next(); // Pass control to the next middleware or route
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

export default authMiddleware;
