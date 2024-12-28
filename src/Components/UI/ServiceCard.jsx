import { HiOutlineArrowLongRight } from "react-icons/hi2";

const shadowStyle = {
    boxShadow: "0 20px 100px rgba(0, 65, 61, 0.06)",
};
//  #00413D
const ServiceCard = ({ title, desc, icon }) => {
    return (
        <div className=' py-12 px-9 ' style={shadowStyle}>
            <div>
                <img src={icon} alt="" />
            </div>
            <h4 className='text-[24px] font-extrabold text-primary py-2'>{title}</h4>
            <p className='w-[245px]'>{desc}</p>
            <span><HiOutlineArrowLongRight /></span>
        </div>
    );
};

export default ServiceCard;