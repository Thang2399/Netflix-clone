const router = require( 'express' ).Router();
const User = require( '../models/user' );
const CryptoJS = require('crypto-js');
const verifyFunction = require( '../verifyToken.js' );

// Update
router.put('/:id', verifyFunction,  async ( req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        // Have password
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password, process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});

            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error)
        }
    } 
    else {
        res.status(403).json("You can only update your own account!")
    }
});

// Delete
router.delete('/:id', verifyFunction, async (req, res) => {
	if (req.user.id === req.params.id || req.user.isAdmin) {
		try {
			await User.findByIdAndDelete(req.params.id);

			res.status(200).json("User has been deleted");
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json('You can only delete your own account!');
	}
});

// Get one user
router.get('/find/:id', async (req, res) => {
    try {
			const user = await User.findById(req.params.id);
			// hide password
			const { password, ...info } = user._doc;
			res.status(200).json(info);
		}
    catch (error) {
        res.status(500).json(error);
    }
}
);

// Get all users
router.get( '/', verifyFunction, async ( req, res ) => {
    const query = req.query.new;
    console.log("query", query);
	if (req.user.isAdmin) {
		try {
            const allUsers = query ? await User.find().sort({_id: -1}).limit(5) : await User.find()

			res.status(200).json(allUsers);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json('You are not allowed to get all users!');
	}
});

// Get user stats
router.get('/stats', async ( req, res ) => {
    const today = new Date();
    const lastYear = today.getFullYear( today.setFullYear() - 1 );
    
    const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    try {
        const data = await User.aggregate( [
            {
                $project: {month: {$month: '$createdAt'}}
            },
            {
                $group: {_id: '$month', total: {$sum: 1}}
            }
        ]);
        
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
