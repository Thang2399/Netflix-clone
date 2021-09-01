/* eslint-disable max-len */
import React from 'react';

// data
import jumbotronData from '../../fixtures/jumbo';

const Jumbotron = () => (
    <div className='w-full  mx-auto bg-black text-white'>
        {jumbotronData.map((item) => (
            <div
                className='w-full border-b-8 border-gray-500'
                key={item.id}
            >
                <div className={`max-w-5xl w-full mx-auto py-20 flex flex-${item.direction} justify-between items-center`}>
                    <div className='w-3/5'>
                        <h1 className='text-6xl font-semibold mb-4'>{item.title}</h1>
                        <h5 className='text-3xl'>{item.subTitle}</h5>
                    </div>
                    <div className='w-2/5'>
                        <img src={item.image} alt={item.alt} className='w-4/5 h-2/5' />
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default Jumbotron;
