const router = require('express').Router();
const User = require( '../models/user.js' );
const CryptoJS = require( 'crypto-js' );
const jwt = require( 'jsonwebtoken' );

// Register
router.post( '/register', async ( req, res ) => {
    const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: CryptoJS.AES.encrypt(
			req.body.password, process.env.SECRET_KEY
			).toString(),
		});
    
    try {
        const user = await newUser.save();
        console.log("Register success", user);
        res.status(201).json(user);    
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login
router.post( '/login', async ( req, res ) => {
    try
    {
        const user = await User.findOne( { email: req.body.email } );
        !user && res.status( 401 ).json( 'Wrong password or username' );
        
        const bytes = CryptoJS.AES.decrypt( user.password, process.env.SECRET_KEY );
        const originalPassword = bytes.toString( CryptoJS.enc.Utf8 );
        
        originalPassword !== req.body.password &&
            res.status( 401 ).json( 'Wrong password or username' );
        
        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin }
            , process.env.SECRET_KEY
            , { expiresIn: '7d' },
            );

        // hide password
        const {password, ...info} = user._doc;
        
        console.log("Login success");
        res.status(200).json({...info, accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;