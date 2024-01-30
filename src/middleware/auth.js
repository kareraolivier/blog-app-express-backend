import jwt from "jsonwebtoken";
 
const authUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || req.query.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Missing token" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = decoded.userObj;
    next();
  });
};

export default authUser;