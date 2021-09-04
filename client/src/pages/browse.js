/* eslint-disable max-len */
/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
// axios
import axios from 'axios';

// Components
import NavBar from '../components/navbar/navbar';
import Feature from '../components/feature/feature';
import Lists from '../components/feature/lists/lists';
import Footer from '../components/footer/footer';

const BrowsePage = ({type}) => {
    const [lists, setLists] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [genre, setGenres] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? '?type=' + type : ''}${genre ? '?genre=' + genre : ''}`,
                    { headers: {token: 'Hello eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg5OTQwYjEzOWRhMzdlYTE3NTc4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDczMDgzOSwiZXhwIjoxNjMxMzM1NjM5fQ.8Vgz67zjx7sBH20TDXZlwgv_mvXyR9CiGVWKNzfczoQ'} });
                setLists(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getRandomLists();
    }, [genre, type]);

    return (
        <div className='relative z-0'>
            <div className='fixed top-0 left-0 w-full z-10'>
                <NavBar />
            </div>
            <Feature type={type} />
            {lists.map((list) => (
                <Lists key={list._id} list={list} />
            ))}
            <Footer />
        </div>
    );
};

export default BrowsePage;
