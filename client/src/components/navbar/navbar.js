/* eslint-disable no-unneeded-ternary */
/* eslint-disable max-len */
import React, {useState} from 'react';
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
    const [searchTerm, setSearchTerm] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div
            className={isScrolled ? 'navbar scrolled' : 'navbar'}
        >
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-row items-center w-3/5'>
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
                    <Link to={ROUTES.SHOWS}>
                        <span
                            className='pr-5 text-white text-sm delay-75 cursor-pointer hover:text-gray-400'
                        >
                            TV Shows
                        </span>
                    </Link>
                    <Link to={ROUTES.MOVIES}>
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
                    className='flex flex-row justify-end items-center w-2/5 text-white text-2xl font-bold'
                >
                    <div className='mr-8 w-8/12'>
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </div>
                    <span className='mr-4 w1/12'><IoMdNotificationsOutline /></span>
                    <div className='flex flex-row justify-center items-center w-3/12'>
                        <img src='/images/users/1.png' alt='' className='w-1/4 h-2/3 mr-6 rounded' />
                        <div className='profile'>
                            <RiArrowDownSFill className='icon' />
                            <div className='options text-sm'>
                                <span className='bg-black '>Setting</span>
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
