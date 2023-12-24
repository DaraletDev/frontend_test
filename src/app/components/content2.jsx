import React from 'react';
import TitleContent from './title_content';
import Features from './features';

const Content2 = () => {
    return (
        <div className='bg-[#ECF4FF] py-20 px-5 lg:px-10 xl:px-40'>
            <TitleContent title={'Content2'} justifyEnd={true} />
            <Features />
        </div>
    );
};

export default Content2;
