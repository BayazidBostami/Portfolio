import React from 'react';
import SectionHeading from './UI/SectionHeading';
import Container from './UI/Container';
import Section from './UI/Section';
import ServiceCard from './UI/ServiceCard';
// import icon_1 from "../assets/Card-Icon-1.png"
// import icon_2 from "../assets/Card-Icon-2.png"
import { ServiceData } from '../Data/Api'

// const ServiceData = [
//     {
//         id: 1,
//         title: "Ui/Ux Design",
//         desc: "Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na aibus minima veniam.",
//         icon: icon_1
//     },
//     {
//         id: 2,
//         title: "Mobile App Design",
//         desc: "Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na aibus minima veniam.",
//         icon: icon_2
//     },
//     {
//         id: 3,
//         title: "Web Design",
//         desc: "Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na aibus minima veniam.",
//         icon: icon_1
//     },

// ]
const Services = () => {
    return (
        <Section>
            <Container>
                <SectionHeading subTitle="My Services" Title="Provide wide Range of Digital Services" center={true}>
                </SectionHeading>
                <div className='grid grid-cols-3 gap-6'>
                    {ServiceData.map((card) => {
                        return (
                            <ServiceCard
                                key={card.id}
                                title={card.title}
                                desc={card.desc}
                                icon={card.icon}
                            ></ServiceCard>
                        )
                    })}
                    {/* video 31 ..... 112 minute */}
                </div>
            </Container>

        </Section>
    );
};

export default Services;