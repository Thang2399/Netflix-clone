/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from 'react';
// Icons
import { GrFormNext, GrPrevious } from 'react-icons/gr';

// Components
import SingleList from './single_list/singleList';
import './list.scss';

const Lists = ({list}) => (
    <div className='text-white bg-black py-8 w-screen'>
        <span className='text-3xl font-semibold cursor-pointer text-gray-300 hover:text-white mx-20'>
            {list.title}
        </span>

        <div className=''>
            <div className='flex mt-4 ml-20'>
                {list.content.map((item, slideIndex) => (
                    <SingleList key={Math.random()} item={item} slideIndex={slideIndex} />)
                )}
            </div>
        </div>
    </div>
);

export default Lists;
