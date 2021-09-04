/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
// React router dom
import { Link } from 'react-router-dom';
// axios
import axios from 'axios';
// Icon
import {
    AiOutlineClose,
    AiOutlineCheckCircle,
    AiOutlineLike,
    AiOutlineDislike
} from 'react-icons/ai';
import { GrPlayFill } from 'react-icons/gr';

// ROUTES
import * as ROUTES from '../../../../constants/routes';
import './singleList.scss';

const SingleList = ({ item }) => {
    const [isClicked, setIsClicked] = useState(false);
    function handleShowContent() { setIsClicked(true); }
    function handleHideContent() { setIsClicked(false); }

    const [movie, setMovie] = useState({});
    console.log('movie', movie);
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
        <Link to={{pathname: ROUTES.WATCH, movie}}>
            <div>
                <div className='cursor-pointer transition duration-500 ease-in-out transform hover:scale-150'>
                    <div className='mr-4' onClick={handleShowContent}>
                        <img src={movie.imageSm} alt={movie.title} className='w-96 h-52 object-cover' />
                    </div>
                </div>
                {isClicked && <SubContent handleHideContent={handleHideContent} movie={movie} />}
            </div>
        </Link>
    );
};

export default SingleList;

const SubContent = ({handleHideContent, movie}) => (
    <div className='sub-content'>
        <div className='w-4/5 mx-auto'>
            <div className='relative w-4/5 mx-auto bg-black'>
                <img src={movie.image} alt={movie.title} className='w-full h-auto mx-auto object-contain rounded' />
                <button
                    type='button'
                    onClick={handleHideContent}
                    className='absolute top-2 right-2 text-3xl font-medium w-8 h-8 bg-black bg-opacity-25 rounded'
                >
                    <AiOutlineClose />
                </button>
                <div className='text-white max-w-1/5 w-full absolute bottom-8 left-10 flex'>
                    <Link to={ROUTES.BROWSE} className='mr-4'>
                        <button
                            type='button'
                            className='bg-white w-36 p-3 flex justify-center items-center text-2xl text-black font-semibold rounded hover:bg-gray-300 '
                        >
                            <GrPlayFill className='mr-4' />
                            Play
                        </button>
                    </Link>
                    <button
                        type='button'
                        className='text-white text-4xl bg-black bg-opacity-50 p-1 py-0 rounded mr-4'
                    >
                        <AiOutlineCheckCircle />
                    </button>
                    <button
                        type='button'
                        className='text-white text-4xl bg-black bg-opacity-50 p-1 py-0 rounded mr-4'
                    >
                        <AiOutlineLike />
                    </button>
                    <button
                        type='button'
                        className='text-white text-4xl bg-black bg-opacity-50 p-1 py-0 rounded mr-4'
                    >
                        <AiOutlineDislike />
                    </button>
                </div>
            </div>
            <div className='w-4/5 mx-auto pt-10 px-6 bg-black'>
                <h1 className='text-6xl font-medium mb-4'>{movie.title}</h1>
                <div className='flex mt-4 justify-between'>
                    <div className='w-3/5'>
                        <div className='w-3/5 flex items-center text-lg mb-4'>
                            <span className='mr-2'>{movie.year}</span>
                            <span className='mr-2 border-2 px-2 border-white  font-medium cursor-pointer'>
                                {movie.limit}
                                {'+'}
                            </span>
                            <span className='mr-2'>
                                2 seasons
                            </span>
                            <span className='mr-2 border-2 px-2 border-white  font-medium cursor-pointer'>
                                HD
                            </span>
                        </div>
                        <h3 className='mb-20 text-2xl leading-normal'>
                            {movie.description}
                        </h3>
                    </div>
                    <div className='w-1/4'>
                        <span className='text-gray-600'>
                            Genre:
                            {' '}
                            {movie.genre.map((item) => (
                                <span key={Math.random()} className='mr-1 text-lg text-white cursor-pointer hover:underline'>
                                    {item}
                                    ,
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
