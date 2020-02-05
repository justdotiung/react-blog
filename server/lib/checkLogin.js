const checkLogin = (req, res, next) =>{
    if(!req.state.token)
        return res.status(401).json({error:"로그인해 주세요."});
    return next();
}

module.exports={
    checkLogin
};