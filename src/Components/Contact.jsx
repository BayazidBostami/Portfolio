import React from 'react';
import Section from './UI/Section';
import Container from './UI/Container';
import SectionHeading from './UI/SectionHeading';
import contactUs from '../assets/contactUs.jpg'
import Button from './UI/Button';

const Contact = () => {
    return (
        <Section>
            <Container>

                <div className='grid grid-cols-[472px_1fr] items-center gap-6'>
                    <div className='bg-slate-300  h-[586px]'>
                        <img className='object-cover h-full w-full' src={contactUs} alt="" />
                    </div>
                    <div>
                        <SectionHeading subTitle="Get In Touch"
                            Title="Feel Free to contact"
                            center={false}></SectionHeading>
                        <form action="">
                            <div className=' grid grid-cols-2 gap-x-6 gap-y-9'>
                                <div>
                                    <input className='border-b-[1px] border-b-slate-300 placeholder:text-primary text-lg p-3 outline-none  w-full d-block' type="text" placeholder="Enter Name" />  </div>
                                <div>
                                    <input className='border-b-[1px] border-b-slate-300 placeholder:text-primary text-lg p-3 outline-none w-full d-block' type="email" placeholder='Enter Email' />
                                </div>
                                <div>
                                    <input className='border-b-[1px] border-b-slate-300 placeholder:text-primary text-lg p-3 outline-none w-full d-block' type="Number" placeholder='Enter Number' />
                                </div>
                                <div>
                                    <input className='border-b-[1px] border-b-slate-300 placeholder:text-primary text-lg p-3 outline-none w-full d-block' type="text" placeholder='Subject' />
                                </div>
                            </div>
                            <div className='w-full d-flex'>
                                <textarea className='border-b-[1px] border-b-slate-300 text-primary text-lg p-3 outline-none w-full d-flex resize-none'>Message</textarea>
                            </div>
                        </form>
                        <div className='pt-10'>
                            <Button TagName="button" type="submit" text="Contact Us"></Button>
                        </div>

                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;