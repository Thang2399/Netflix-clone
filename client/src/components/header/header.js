/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
// React router dom
import { Link } from 'react-router-dom';

// Component
import SignUpForm from '../sign-up-form/signUp-form';
// Logo
import logo from '../../logo.svg';
// Routes
import * as ROUTES from '../../constants/routes';
import './header.css';

const Header = () => (
    <div className='header border-b-8 border-gray-600 text-white'>
        <HeaderButtons />
        <div className='mx-auto my-20 py-10 px-10 flex flex-col justify-between items-center'>
            <h1 className='w-1/2 mb-4 text-6xl text-center font-semibold'>Unlimited films, TV programmes and more.</h1>
            <h3 className='w-1/2 mb-4 text-2xl text-center font-medium'>Watch anywhere. Cancel at any time.</h3>
            <SignUpForm to={ROUTES.SIGN_UP} />
        </div>
    </div>
);

export const HeaderButtons = () => (
    <div className='my-6 mx-20 mt-0 pt-10 flex flex-row justify-between items-center'>
        <button type='button'>
            <Link to={ROUTES.HOME}>
                <img src={logo} alt='Netflix-logo' className='w-auto h-10' />
            </Link>
        </button>
        <button type='button' className='px-5 py-2 rounded-md bg-red-600 text-white text-lg font-semibold tracking-wide'>
            <Link to={ROUTES.SIGN_IN}>
                Sign In
            </Link>
        </button>
    </div>
);

export default Header;
