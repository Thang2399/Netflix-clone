/* eslint-disable react/prop-types */
import React from 'react';

// data
import faqsData from '../../fixtures/faqs';
// Component
import SingleQuestion from './singleQuestion';
import SignUpForm from '../sign-up-form/signUp-form';

const Accordion = () => (
    <div className='w-full mx-auto border-b-8 border-gray-500'>
        <div className='py-20 flex flex-col justify-center items-center'>
            <div className='max-w-5xl w-full mx-auto'>
                <h1 className='text-6xl font-semibold text-center mb-4'>Frequently Asked Questions</h1>
                <div className='w-4/5 mx-auto my-9'>
                    {faqsData.map((item) => (
                        <SingleQuestion key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <SignUpForm />
        </div>
    </div>
);

export default Accordion;
