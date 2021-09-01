import React from 'react';

// Components
import { HeaderButtons } from '../components/header/header';
import SignUpForm from '../components/forms/sign-up-form';

// Css
import '../components/header/header.css';

const SignUpPage = () => {
    console.log(123);

    return (
        <div className='header h-screen'>
            <HeaderButtons />
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
