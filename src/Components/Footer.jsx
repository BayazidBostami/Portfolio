import React from 'react';
import Container from './UI/Container';
import footerLogo from '../assets/logo.svg'

// icon
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const menus = ["Home", "Pages", "About", "Blog", "Contact"]
const Footer = () => {
    return (
        <footer className='py-10 bg-primary text-white'>
            <Container>
                <div className='flex items-center justify-center'>
                    <a href="">
                        <img src={footerLogo} alt="" />
                    </a>
                </div>
                <ul className='flex items-center justify-center'>
                    {menus.map((item, index) => (
                        <li key={index} className='px-6 relative after:absolute after:bottom-0 after:right-0 after:w-[2px] after:h-full after:bg-white/10 last:after:hidden'>
                            <a className='text-white' href="#">{item}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center justify-center gap-6 py-6'>
                    <a href="#">
                        <IoLogoFacebook className='w-[40px] h-[40px]' />
                    </a>
                    <a href="">
                        <FaInstagram className='w-[40px] h-[40px]' />
                    </a>
                    <a className=' object-cover' href="">
                        <FaGithub className='w-[40px] h-[40px]' />
                    </a>
                </div>
                <hr className='py-7' />
                <div className='flex  items-center justify-center'>
                    <p className='text-white/50'>Copyright © 2023 Design By Estiak. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;