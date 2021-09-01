/* eslint-disable max-len */
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
// React router dom
import {Link} from 'react-router-dom';

// ROUTES
import * as ROUTES from '../../constants/routes';

const handleSubmit = (e) => e.preventDefault();

const SignUpForm = () => (
    <div className='w-2/5'>
        <p className='mb-4 text-lg text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-row justify-between items-start'>
            <input
                type='text'
                name='text'
                id='text'
                placeholder='Enter your email address'
                className='w-2/3 h-16 p-2'
            />
            <Link to={ROUTES.SIGN_UP} className='w-1/3 h-16 p-2 bg-red-600 hover:bg-red-800 text-2xl font-medium flex flex-row justify-center items-stretch'>
                <button type='submit' className='tracking-wide flex flex-row justify-center items-center'>
                    Get Started
                    <span className='text-xl ml-2'>
                        <AiOutlineRight />
                    </span>
                </button>
            </Link>
        </form>
    </div>
);

export default SignUpForm;
