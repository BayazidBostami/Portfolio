import React from 'react';

const SectionHeading = ({ subTitle, Title, center = true }) => {
    return (
        <div className={`${center && "text-center mx-auto  w-[517px]"}`}>
            <h1 className='text-xl text-secondery leading-tight'>{subTitle}</h1>
            <h2 className='text-[50px] text-primary font-medium leading-tight'>{Title}</h2>
        </div>
    );
};

export default SectionHeading;