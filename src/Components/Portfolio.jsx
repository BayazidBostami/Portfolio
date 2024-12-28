import React from 'react';
import Section from './UI/Section';
import Container from './UI/Container';
import SectionHeading from './UI/SectionHeading';
import portfolio_1 from "../assets/portfolio-1.jpg";
import portfolio_2 from "../assets/portfolio-2.jpg";
import PortfolioCard from './UI/PortfolioCard';
import { useState } from 'react';

// Portfolio menu---------
const PortfolioMenu = [
    "All",
    "Branding",
    "Photography",
    "Fashion",
    "Product"
]

const portfolioData = [
    {
        id: 1,
        category: "Branding",
        title: "Ui/Ux Design",
        subTitle: "Website",
        img: portfolio_1
    },
    {
        id: 2,
        category: "Photography",
        title: "E-Learning App",
        subTitle: "IOS App",
        img: portfolio_2
    },
    {
        id: 3,
        category: "Fashion",
        title: "Web Application",
        subTitle: "Desktop",
        img: portfolio_2
    },
    {
        id: 4,
        category: "Product",
        title: "Visual Design",
        subTitle: "Desktop",
        img: portfolio_1
    },

]

const Portfolio = () => {
    const [active, setActive] = useState(0)                       /*Creative it video 34 , (15-23) munite importent */
    const [filterData, setFilterData] = useState(portfolioData);

    //Category change 
    const handleCategory = (i) => {                              /*Creative it video 34 , (37-52) munite importent */
        setActive(i)
        const filtered = portfolioData.filter(
            (item) => item.category === PortfolioMenu[i]
        );
        setFilterData(filtered);
        if (i === 0) {
            setFilterData(portfolioData)
        }
        console.log(filtered)
    };
    return (

        <Section>
            <Container>
                <SectionHeading subTitle="My Portfolio"
                    Title="My Work Example"
                    center={true}></SectionHeading>
                <ul className='items-center flex justify-center gap-6 mt-6 mb-2'>
                    {PortfolioMenu.map((list, i) => (
                        <li
                            title={i}
                            onClick={() => handleCategory(i)}
                            className={`text-primary ${active === i && 'text-blue-300 after_shape'} relative `} $ key={i}>{list}</li>
                    ))
                    }
                </ul>
                {/* PortfolioData map */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    {/* {portfolioData.map((data) => <PortfolioCard img={data.img} title={data.title} subTitle={data.subTitle}></PortfolioCard>)} */}
                    {portfolioData.map((data) =>
                        (<PortfolioCard key={data.id} portfolio={data}></PortfolioCard>))}
                </div>
                {/* video 34 , 50 minute */}
            </Container>
        </Section >
    );
};

export default Portfolio;