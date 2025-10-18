import jwt from "jsonwebtoken";

export default function authUser(req, res, next) {
  //Middleware to authenticate user based on JWT token in cookies
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "You are not authenticated User" });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Invalid or expired token" });
      }
      
      // Attach user ID to request object for use in route handlers
      req.userId = decoded.id;
      next();
    });

  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
