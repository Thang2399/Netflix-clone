import React from 'react';

// Data
import footerData from '../../fixtures/footer';

const Footer = () => (
    <div className='bg-black bg-opacity-60 w-full'>
        <div className='max-w-5xl w-full mx-auto pb-5 pt-20 text-gray-500'>
            <h4 className='mb-6 text-xl'>Question? Contact us.</h4>
            <div className='grid grid-cols-4 grid-rows-4 mb-4'>
                {footerData.map((item) => (
                    <div key={item.id} className='m-2 ml-0 mt-0 text-sm cursor-pointer'>
                        {item.title}
                    </div>
                ))}
            </div>
            <p>Netflix Vietnam</p>
        </div>
    </div>
);

export default Footer;
