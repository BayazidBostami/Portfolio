import { FaArrowRight } from "react-icons/fa";
const ProjectCard = ({ project, blog = false }) => {
    const { img, category, title, description, date } = project
    return (
        <div className="p-3">
            <div className="h-[270px]">
                <img src={img} alt="" className="h-full w-full object-cover" />
            </div>
            <div>
                {blog ? (
                    <div className="flex justify-between items-center gap-3">
                        <p className="text-secondery pt-5 pb-2">{category}</p>
                        <span>{date}</span>
                    </div>
                ) : (
                    <h3 className="text-secondery pb-2 pt-5 ">{category}</h3>
                )}
                <h3 className="pb-[10px] text-2xl font-medium">{title}</h3>
                <p>{description}</p>
                <a href="#" className=" mt-5 flex text-primary items-center gap-1 font-medium text-lg hover:text-secondery transition-all duration-200">
                    {blog ? (
                        <span>View more</span>
                    ) : (
                        <>
                            <span>View Case Studies</span>
                            <FaArrowRight /></>
                    )}
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;