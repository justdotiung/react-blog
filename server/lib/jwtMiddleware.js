const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) =>{
    console.log(1);
    const token = req.cookies.access_token;
    console.log(token)
    if(!token) return next();
    try{
        console.log(2);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        return next();
    }catch(e) {
        return next();
    }
}

module.exports = jwtMiddleware;