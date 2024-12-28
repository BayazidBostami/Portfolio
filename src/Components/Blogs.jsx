import React from 'react';
import Section from './UI/Section';
import Container from './UI/Container';
import SectionHeading from './UI/SectionHeading';
// import ServiceCard from './UI/ServiceCard';
import BlogCard from './UI/CommonCard';
import { BlogData } from '../Data/Api'

const Blogs = () => {
    return (
        <Section>
            <Container>
                <SectionHeading subTitle="Latest Blog" Title="Blog & Articles" center={true}></SectionHeading>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* <ServiceCard></ServiceCard>
                    <ServiceCard></ServiceCard>
                    <ServiceCard></ServiceCard> */}
                    {BlogData.slice(0, 3).map((blog) => (
                        <BlogCard key={blog.id} project={blog} blog={true}></BlogCard>
                    ))}

                </div>
            </Container>
        </Section>
    );
};

export default Blogs;