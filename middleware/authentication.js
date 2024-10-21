const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {

  console.log(req.headers.access_token);
  try {
    if(!req.headers.access_token){
      throw  {"name": "NOT_LOGIN"};
    }

    const decoded = await jwt.verify(
      req.headers.access_token,
      process.env.SECRET_KEY
    );

    if (decoded) {
      req.userId = decoded.id;
      next();
    }
    
  } catch (error) {
    next(error)
  }
}

module.exports = authentication