import React from 'react';
import Card from './card';
import TitleContent from './title_content';

const Content1 = () => {
    return (
        <div id='content1' className='pb-20'>
            <TitleContent title={'Content1'}/>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Content1;
