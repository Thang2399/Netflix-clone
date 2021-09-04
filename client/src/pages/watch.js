/* eslint-disable max-len */
import React, {useState} from 'react';
// React router dom
import { Link } from 'react-router-dom';
// Icon
import { BiArrowBack } from 'react-icons/bi';

// ROUTES
import * as ROUTES from '../constants/routes';

const Watch = () => {
    console.log('Watch');
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
            <video controls autoPlay progress className='w-full h-full object-contain '>
                <track src='https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4' kind='captions' />
            </video>
        </div>
    );
};

export default Watch;
