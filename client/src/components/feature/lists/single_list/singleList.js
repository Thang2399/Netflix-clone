/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
// axios
import axios from 'axios';

const SingleList = ({item}) => {
    const [movie, setMovie] = useState({});
    console.log(movie);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get(`/movies/find/${item}`,
                    { headers: {token: 'Hello eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg5OTQwYjEzOWRhMzdlYTE3NTc4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDczMDgzOSwiZXhwIjoxNjMxMzM1NjM5fQ.8Vgz67zjx7sBH20TDXZlwgv_mvXyR9CiGVWKNzfczoQ'}}
                );
                // console.log('res', res.data);
                setMovie(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getMovies();
    }, [item]);

    return (
        <div className='cursor-pointer transition duration-500 ease-in-out transform hover:scale-150'>
            <div className='mr-4'>
                <img src={movie.imageSm} alt={movie.title} className='w-96 h-52 object-cover' />
            </div>
            <h1 className='text-white'>{movie.title}</h1>
        </div>
    );
};

export default SingleList;
