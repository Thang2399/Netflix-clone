import React from 'react';

const SearchBar = () => {
    console.log('SearchBar');

    return (
        <input
            type='text'
            placeholder='Title, people, genre'
            className='p-2 text-sm w-60'
        />
    );
};
export default SearchBar;
