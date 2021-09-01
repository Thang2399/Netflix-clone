const express = require('express');
const mongoose = require('mongoose');
const dotenv =  require('dotenv');

const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/users.js');
const moviesRoute = require('./routes/movies.js');
const listsRoute = require('./routes/lists.js');

dotenv.config();

const app = express();
const PORT = 5000;

const CONNECTION_URL = process.env.MONGOOSE_URL;

mongoose
    .connect( CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongooseDB connected successfully'))
    .catch((err) => console.log(err));
    
    app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', moviesRoute);
app.use('/api/lists', listsRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});