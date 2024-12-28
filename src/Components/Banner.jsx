import React from 'react';
import Container from './UI/Container';
import Button from './UI/Button';
import BannerImg from '../assets/BannerBackground.png';

const Banner = () => {

    return (
        <section className='bg-primary relative py-[220px] z-0'>
            <Container>
                <div className='relative z-0 max-w-[834px]'>
                    <h1 className='text-white text-[100px] font-bold leading-[1.1]'>
                        Hello! <br />
                        I’m Zarror Nibors</h1>
                    <p className='text-white/50 py-[14px] pb-[50px] max-w-[534px]'>I’am freelance <span className='text-white'> UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
                    <Button TagName="a" text="Contract Me"></Button>
                </div>
            </Container>
            <div className='w-[44%] h-full absolute right-0 bottom-0 -z-[1]'>
                <img className='h-full object-cover' src={BannerImg} alt="" />

            </div>
        </section>
    );
};

export default Banner;