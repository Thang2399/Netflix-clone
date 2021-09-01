const jwt = require('jsonwebtoken');

const verifyFunction = ( req, res, next ) => {
    const authHeader = req.headers.token;
    console.log("auth header: ", authHeader);
    //  Have token
    if(authHeader){
        const token = authHeader.split( " " )[1];
        
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) return res.status(403).json("Toke is not valid");
            req.user = user;
            console.log("user", req.user);
            next();
        });
    }
    //  Not have token
    else { return res.status( 401 ).json( "You are not authenticated" );}
};

module.exports = verifyFunction;