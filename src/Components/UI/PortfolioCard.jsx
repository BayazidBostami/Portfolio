import React from 'react';

// const PortfolioCard = ({ img, title, subTitle }) => {
const PortfolioCard = ({ portfolio }) => {
    const { img, title, subTitle } = portfolio;
    return (
        <div className='relative'>    {/* ata parent div , akhane relative na dile 11 number line er absolute deka jabe na , seta nica cole jabe */}
            <div>
                <img src={img} alt="image" />
            </div>
            <div className='absolute w-full bottom-0 left-0 py-[22px] px-[18px] bg-primary z-10'>     {/* absolute & z-10 use kora hoicha akta div er upor onnota rakkar jonno ,*/}
                <h3 className='text-white font-semibold text-2xl'>{title}</h3>
                <p className='text-white  text-base font-normal'>{subTitle}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;