/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// Icon
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({item}) => {
    const [showContent, setShowContent] = useState(false);

    const handleShowContent = () => {
        console.log(789456);
        setShowContent(!showContent);
    };

    return (
        <div className='mb-3'>
            <div
                className='mb-1 p-4 px-5 flex flex-row justify-between items-center bg-gray-700 cursor-pointer'
                onClick={() => handleShowContent()}
            >
                <h3 className='text-3xl'>{item.header}</h3>
                <button
                    type='button'
                    className='text-3xl'
                >
                    {showContent ? <AiOutlineClose /> : <AiOutlinePlus />}
                </button>
            </div>
            {showContent ? (
                <div className='mt-1 mb-3 p-4 px-5 bg-gray-700'>
                    <h3 className='text-3xl font-light leading-tight'>{item.body}</h3>
                </div>
            ) : null}
        </div>
    );
};

export default SingleQuestion;
