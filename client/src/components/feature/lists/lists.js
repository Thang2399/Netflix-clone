/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
// Icons
import { GrFormNext, GrPrevious } from 'react-icons/gr';

// Components
import SingleList from './single_list/singleList';
import './list.scss';

const Lists = ({list}) => {
    // console.log('Length', list.content.length);
    // const [index, setIndex] = useState(0);

    // function handleNextSlide() { setIndex(index + 1); }
    // function handlePrevSlide() { setIndex(index + 1); }

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 384);

    const listRef = useRef();

    // const handleClick = (direction) => {
    //     setIsMoved(true);
    //     let distance = listRef.current.getBoundingClientRect().x - 50;
    //     if (direction === 'left' && slideNumber > 0) {
    //         setSlideNumber(slideNumber - 1);
    //         listRef.current.style.transform = `translateX(${384 + distance}px)`;
    //     }
    //     if (direction === 'right' && slideNumber < 10 - clickLimit) {
    //         setSlideNumber(slideNumber + 1);
    //         listRef.current.style.transform = `translateX(${-384 + distance}px)`;
    //     }
    // };

    return (
        <div className='text-white bg-black py-8 w-full'>
            <span className='text-3xl font-semibold cursor-pointer text-gray-300 hover:text-white mx-20'>
                {list.title}
            </span>

            <div className='w-full'>
                {/* {list.content.length >= 5 && (
                    <button type='button' className=' bg-red-300 prev' onClick={() => handleClick('left')}>
                        <GrPrevious className='icon' />
                    </button>
                )} */}
                <div className='flex w-max mt-4 ml-20' ref={listRef}>
                    {list.content.map((item, slideIndex) => (
                        <SingleList key={Math.random()} item={item} slideIndex={slideIndex} />)
                    )}
                </div>
                {/* {list.content.length >= 5 && (
                    <button type='button' className='next bg-red-300' onClick={() => handleClick('right')}>
                        <GrFormNext className='icon' />
                    </button>
                )} */}
            </div>
        </div>
        // <div className='list'>
        //     <span className='listTitle'>{list.title}</span>
        //     <div className='wrapper'>
        //         <GrPrevious
        //             className='sliderArrow left'
        //             onClick={() => handleClick('left')}
        //             style={{ display: !isMoved && 'none' }}
        //         />
        //         <div className='container' ref={listRef}>
        //             {list.content.map((item, i) => (
        //                 <SingleList index={i} item={item} />
        //             ))}
        //         </div>
        //         <GrFormNext
        //             className='sliderArrow right'
        //             onClick={() => handleClick('right')}
        //         />
        //     </div>
        // </div>
    );
};

export default Lists;
