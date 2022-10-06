const jwt = require("jsonwebtoken");
const authenticateJWT = (req, res, next) => {
  try {
    console.log(req.cookies.access_token)
    const token = req.cookies.access_token;
    if (!token) {
      console.log("no token")
      return res.status(403).json({message:"no token"});
    }
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        return res.status(403).send({ msg: "something wrong" });
      }
      req.user = user;
      next();
    });
  } catch {
    return res.sendStatus(403);
  }

};

module.exports = authenticateJWT;


