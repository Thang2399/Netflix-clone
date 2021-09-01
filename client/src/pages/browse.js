import React from 'react';

// Components
import NavBar from '../components/navbar/navbar';
import Feature from '../components/feature/feature';
import List from '../components/feature/list/list';

const BrowsePage = () => {
    console.log('Browse Page');

    return (
        <div>
            <NavBar />
            <Feature />
            <List />
        </div>
    );
};

export default BrowsePage;
