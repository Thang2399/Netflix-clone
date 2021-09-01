import React from 'react';

// Components
import Header from '../components/header/header';
import Jumbotron from '../components/jumbotron/jumbotron';
import Accordion from '../components/accordion/accordion';
import Footer from '../components/footer/footer';

const App = () => (
    <div className='bg-black text-white'>
        <Header />
        <Jumbotron />
        <Accordion />
        <Footer />
    </div>
);

export default App;
