const router = require('express').Router();
const Movie = require('../models/movie');
const verifyFunction = require('../verifyToken.js');

// Create
router.post('/', verifyFunction, async (req, res) => {
	if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();
            console.log(savedMovie);

            res.status(201).json(savedMovie);
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
			const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
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
			await Movie.findByIdAndDelete(req.params.id);

			res.status(200).json('The movie has been deleted');
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json(`You don't have permission!`);
	}
});

// Get one movie
router.get('/find/:id', async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);

		res.status(200).json(movie);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Get one random movie
router.get( '/random/', async ( req, res ) => {
    const type = req.query.type;
    let movie;

	try {
        if (type === 'series') {
            movie = await Movie.aggregate( [
                { $match: { isSeries: true } },
                {$sample: {size: 1}}
            ]);
        }
        else {
            movie = await Movie.aggregate( [
                { $match: { isSeries: false }},
                {$sample: {size: 1}}
            ]); 
        }
        res.status(200).json(movie);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Get all movies
router.get('/', verifyFunction, async (req, res) => {
	if (req.user.isAdmin) {
		try {
            const movies = await Movie.find();

			res.status(200).json(movies.reverse());
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json('You are not allowed to get all users!');
	}
});

module.exports = router;
