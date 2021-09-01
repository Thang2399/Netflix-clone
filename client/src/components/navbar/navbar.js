/* eslint-disable max-len */
import React from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// Icons
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiArrowDownSFill } from 'react-icons/ri';

// Logo
import logo from '../../logo.svg';
// Routes
import * as ROUTES from '../../constants/routes';
// Components
import SearchBar from './search/search';
import './navbar.scss';

const NavBar = () => {
    console.log('NavBar');
    const scrolled = false;

    return (
        <div className='bg-black max-w-full w-full px-16 py-5'>
            <div className={`w-full flex items-center justify-between ${scrolled}`}>
                <div className='flex flex-row items-center w-3/4'>
                    <Link to={ROUTES.BROWSE} className='pr-8'>
                        <span><img src={logo} alt='Netflix-logo' className='w-auto h-6' /></span>
                    </Link>
                    <Link to={ROUTES.BROWSE}>
                        <span
                            className='pr-6 text-white text-sm delay-75 cursor-pointer hover:text-gray-400'
                        >
                            Home
                        </span>
                    </Link>
                    <Link to={ROUTES.BROWSE}>
                        <span
                            className='pr-5 text-white text-sm delay-75 cursor-pointer hover:text-gray-400'
                        >
                            TV Shows
                        </span>
                    </Link>
                    <Link to={ROUTES.BROWSE}>
                        <span
                            className='pr-5 text-white text-sm delay-75 cursor-pointer hover:text-gray-400'
                        >
                            Movies
                        </span>
                    </Link>
                    <span
                        className='pr-5 text-white text-sm delay-75 cursor-pointer hover:text-gray-400'
                    >
                        New & Popular
                    </span>
                    <span
                        className='pr-5 text-white text-sm delay-75 cursor-pointer hover:text-gray-400'
                    >
                        My List
                    </span>
                </div>
                <div
                    className='flex flex-row justify-between items-center w-1/4 text-white text-2xl font-bold'
                >
                    <div className='mr-4'>
                        <SearchBar />
                    </div>
                    <span className='mr-4'><IoMdNotificationsOutline /></span>
                    <div className='flex flex-row items-center'>
                        <img src='/images/users/1.png' alt='' className='w-1/5 h-2/3 mr-2' />
                        <div className='profile'>
                            <RiArrowDownSFill />
                            <div className='options text-sm'>
                                <span className='bg-black'>Setting</span>
                                <span className='bg-black'>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
