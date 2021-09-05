/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
// React player
import ReactPlayer from 'react-player';
// React router dom
import { useParams, Link } from 'react-router-dom';
// Icon
import { BiArrowBack } from 'react-icons/bi';
// axios
import axios from 'axios';

// ROUTES
import * as ROUTES from '../constants/routes';

const Watch = () => {
    const { _id } = useParams();

    const [movie, setMovie] = useState({});

    const [showText, setShowText] = useState(false);
    function handleShowText() {
        setShowText(true);
    }
    function handleHideText() {
        setShowText(false);
    }

    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get(`/movies/find/${_id}`,
                    { headers: {token: 'Hello eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg5OTQwYjEzOWRhMzdlYTE3NTc4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDczMDgzOSwiZXhwIjoxNjMxMzM1NjM5fQ.8Vgz67zjx7sBH20TDXZlwgv_mvXyR9CiGVWKNzfczoQ'}}
                );
                // console.log('res', res.data);
                setMovie(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getMovies();
    }, [_id]);

    return (
        <div className='relative w-screen h-screen'>
            <div className='absolute top-8 left-8 z-20'>
                <Link to={ROUTES.BROWSE} className='flex items-center text-4xl text-white transform motion-safe:hover:scale-300'>
                    <BiArrowBack className='mr-6' onMouseOver={handleShowText} onMouseOut={handleHideText} />
                    {showText && <span>Back to Browse</span>}
                </Link>
            </div>
            <div className='w-screen h-screen'>
                <ReactPlayer url={movie.video} width='100%' height='100%' playing loop controls />
            </div>
        </div>
    );
};

export default Watch;
