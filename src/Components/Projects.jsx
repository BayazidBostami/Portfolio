import Container from "./UI/Container";
import ProjectCard from "./UI/CommonCard.jsx";
import Section from "./UI/Section";
import SectionHeading from "./UI/SectionHeading";
// Project Data import from Api.js file
import { projectData } from '../Data/Api.js';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplaySpeed: 3000,
    // autoplay: false,
    arrows: false,
};
const Projects = () => {
    return (
        <Section>
            <Container>
                <SectionHeading subTitle="Recent Projects" Title="My Recent Projects" center={false}></SectionHeading>
                {/* <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectData.map((project) =>
                    (<ProjectCard key={project.id} project={project}></ProjectCard>))}
                </div> */}
                <Slider {...settings}>
                    {projectData.map((project) =>
                        (<ProjectCard key={project.id} project={project}></ProjectCard>))}
                </Slider>
            </Container>
        </Section>
    );
};

export default Projects; 