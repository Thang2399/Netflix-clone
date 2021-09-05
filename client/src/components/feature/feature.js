/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { GrPlayFill } from 'react-icons/gr';
import { AiOutlineInfoCircle } from 'react-icons/ai';
// React router dom
import { Link } from 'react-router-dom';

// Routes
import * as ROUTES from '../../constants/routes';

const url = 'https://genk.mediacdn.vn/139269124445442048/2021/1/5/1-1609821748300935640933.jpeg';
const title = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dcunetv-e452e13f-9a29-4c72-9ad1-db96a0537609.png/v1/fill/w_1280,h_542,strp/avengers__endgame__2019__logo_png__2_by_mintmovi3_dcunetv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQyIiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kY3VuZXR2LWU0NTJlMTNmLTlhMjktNGM3Mi05YWQxLWRiOTZhMDUzNzYwOS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.SA6FuF9bQUepCtWnIPDVkgvB9Br8zuLpHLVFGJrnPD8';

const Feature = ({type}) => {
    console.log('Feature');
    return (
        <div className='relative w-screen'>
            {type && (
                <div className='absolute top-20 left-20 flex items-center'>
                    <span className='text-white text-5xl font-semibold mr-4'>
                        {type === 'movies' ? 'Movies' : 'TV Shows'}
                    </span>
                    <select name='genre' id='genre' className='p-2 text-white bg-black ring-1 ring-white cursor-pointer text-xl font-medium grid grid-col-3'>
                        <option>Genre</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comed'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='historical'>Historical</option>
                        <option value='horror'>Horror</option>
                        <option value='romance'>Romance</option>
                        <option value='sci-fi'>Sci-fi</option>
                        <option value='thriller'>Thriller</option>
                        <option value='western'>Western</option>
                        <option value='animation'>Animation</option>
                        <option value='drama'>Drama</option>
                        <option value='documentary'>Documentary</option>
                        <option value='vietnam'>Vietnamese</option>
                    </select>
                </div>
            )}
            <img src={url} alt='img' className='w-full h-11/12 object-contain' />
            <div className='info absolute bottom-1/3 left-10'>
                <img src={title} alt='title' className='h-2/5 w-1/2' />
                <div className='text-white max-w-1/5 w-full mt-6 absolute left-10 flex'>
                    <Link to={ROUTES.BROWSE} className='mr-4'>
                        <button
                            type='button'
                            className='bg-white w-36 p-3 flex justify-center items-center text-2xl text-black font-semibold rounded hover:bg-gray-300 '
                        >
                            <GrPlayFill className='mr-4' />
                            Play
                        </button>
                    </Link>
                    <Link to={ROUTES.BROWSE}>
                        <button
                            type='button'
                            className='bg-gray-700 w-48 p-3 flex justify-center items-center text-2xl text-white font-semibold rounded hover:bg-opacity-60 focus:ring-2 focus:ring-white'
                        >
                            <AiOutlineInfoCircle className='mr-4' />
                            More Info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Feature;
