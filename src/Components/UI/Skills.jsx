import React from 'react';
import Section from './Section';
import Container from './Container';
import Progress from './Progress';



const Skills = () => {

    const servicesData = [
        {
            id: 3,
            title: "Web Design",
            Percentage: 66,
        },
        {
            id: 3,
            title: "Brand Design",
            Percentage: 78,
        },
        {
            id: 3,
            title: "Graphic Design",
            Percentage: 85,
        },
        {
            id: 3,
            title: "Web Development",
            Percentage: 76,
        }
    ]

    return (
        <Section>
            <Container>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-4'>
                    {servicesData.map((data) => {
                        return (<Progress key={data.id} percentage={data.Percentage} title={data.title}></Progress>)
                    })}

                </div>
            </Container>
        </Section>
    );
};

export default Skills;

// <Progress percentage={66} title="Programming"></Progress>
// <Progress percentage={70} title="React"></Progress>
// <Progress percentage={59} title="Js"></Progress>
// <Progress percentage={80} title="Tailwind" ></Progress>