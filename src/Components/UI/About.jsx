import Section from "./Section";
import about_1 from "../../assets/about-1.png"
import about_2 from "../../assets/about-2.png"
import about_3 from "../../assets/about-3.png"
import Container from "./Container";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

const About = () => {
    return (
        <Section>
            <Container>
                <div className="grid grid-cols-2 gap-[30px]">
                    <div className="grid grid-cols-[3fr_2fr] gap-3">
                        <div className="h-full">
                            <img className="h-full object-cover" src={about_1} alt="" />
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="h-full">
                                <img className="h-full object-cover" src={about_2} alt="" />
                            </div>
                            <div className="h-full">
                                <img className="h-full object-cover" src={about_3} alt="" />
                            </div>
                        </div>

                    </div>
                    <div>
                        <SectionHeading subTitle="About Me" Title="I Enjoy Solving Problems With Scalable Solutions" center={false}>      </SectionHeading>
                        <p className="py-3">
                            Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                            aeci velit, sed quia non numquam eius modi tempora incidunt lao
                            magnam aliquam quaerat voluptatem reprehenderit.
                        </p>
                        <p className="pb-[50px]"> Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                            reprehenderit non numquam eius.
                        </p>
                        <Button href="#" TagName="a" text="Downloade CV"  ></Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default About;