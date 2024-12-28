import Container from './UI/Container'
import Section from './UI/Section';
import SectionHeading from './UI/SectionHeading'
import TestimonialCard from './UI/TestimonialCard';
import testimonial_1 from '../assets/Testimonial-1.png';
import Slider from "react-slick";


const TestimonialData = [
    {
        id: 1,
        img: testimonial_1,
        name: "Mobile App Design",
        title: "Product Designer",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.",

    },
    {
        id: 2,
        img: testimonial_1,
        name: "Adam Smithign",
        title: "Designer",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.",

    },
    {
        id: 3,
        img: testimonial_1,
        name: "Adam Smithign",
        title: "Designer",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.",

    },
    {
        id: 4,
        img: testimonial_1,
        name: "Adam Smithign",
        title: "Designer",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.",

    }
]

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
    }

    return (
        <Section>
            <Container>
                <SectionHeading subTitle="Client Testimonial"
                    Title="Feedback From Client"
                    center={true} boolean ></SectionHeading>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-[52px]'>
                    </div> */}
                <div className='pt-10'>
                    <Slider {...settings}>
                        {TestimonialData.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>
                        ))}
                    </Slider>
                </div>
            </Container>
        </Section >
        //     video 34(2) , 5 minute
    );
};

export default Testimonial;