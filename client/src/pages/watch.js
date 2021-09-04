/* eslint-disable max-len */
import React, { useState } from 'react';
// React player
import ReactPlayer from 'react-player';
// React router dom
import { Link, useLocation } from 'react-router-dom';
// Icon
import { BiArrowBack } from 'react-icons/bi';

// ROUTES
import * as ROUTES from '../constants/routes';

const Watch = () => {
    const location = useLocation();
    console.log('Location: ', location);

    const { movie } = location;

    const [showText, setshowText] = useState(false);
    function handleShowText() {
        setshowText(true);
    }
    function handleHideText() {
        setshowText(false);
    }

    return (
        <div className='relative w-screen h-screen'>
            <div className='absolute top-8 left-8 z-20'>
                <Link to={ROUTES.BROWSE} className='flex items-center text-4xl text-white transform motion-safe:hover:scale-300'>
                    <BiArrowBack className='mr-6' onMouseOver={handleShowText} onMouseOut={handleHideText} />
                    {showText && <span>Back to Browse</span>}
                </Link>
            </div>
            <div className='w-screen h-screen'>
                <ReactPlayer url={movie.video} width='100%' height='100%' playing='true' loop='true' control='true' />
            </div>

        </div>
    );
};

export default Watch;
