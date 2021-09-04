/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({searchTerm, setSearchTerm}) => {
    function handleChangeSearchTerm(e) { setSearchTerm(e.target.value); }

    return (
        <input
            type='text'
            placeholder='Title, people, genre'
            className='p-2 text-sm w-full text-black'
            value={searchTerm}
            onChange={handleChangeSearchTerm}
        />
    );
};
export default SearchBar;
