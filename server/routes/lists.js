const router = require('express').Router();
const List = require('../models/list');
const verifyFunction = require('../verifyToken.js');

// Create
router.post('/', verifyFunction, async (req, res) => {
	if (req.user.isAdmin) {
		const newList = new List(req.body);

		try {
			const savedList = await newList.save();
			console.log(savedList);

			res.status(201).json(savedList);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json(`You don't have permission!`);
	}
});


// Update
router.put('/:id', verifyFunction, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const updatedMovie = await newMovie.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true },
			);
			console.log(updatedMovie);

			res.status(200).json(updatedMovie);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json(`You don't have permission!`);
	}
});

// Delete
router.delete('/:id', verifyFunction, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await List.findByIdAndDelete(req.params.id);

			res.status(200).json('This list has been deleted');
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json(`You don't have permission!`);
	}
});

// Get all list
router.get( '/', async ( req, res ) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    console.log("Type query: " + typeQuery);
    console.log("Genre query: " + genreQuery);
    
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery, genre: genreQuery}}
                ]);
            }
            else {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery}}
                ]);
            }
        }
        // Home page
        else {
            list = await List.aggregate([{ $sample: {size: 10}}]);
        }
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
