import React, { useState } from 'react';
import Container from './UI/Container';
import Button from './UI/Button';
import logo from '../assets/logo.svg';

const manus = [
    "Home",
    "About",
    "Blog",
    "Pages",
]

const Header = () => {
    const [active, setActive] = useState(0)
    return (
        <nav className='py-[18px]  bg-slate-300'>

            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="image" />
                    </div>
                    <ul className='flex gap-[42px]'>
                        {
                            manus.map((item, index) => <li className={index === active ? "text-secondery" : "text-black"} key={item} title={index}
                                onClick={() => setActive(index)}>
                                {item}</li>)
                        }
                    </ul>
                    <div>

                        <Button href="#" TagName="a" text="Downloade CV" type='kh'></Button>



                    </div>
                </div>
            </Container>
        </nav >
    );
};

export default Header;