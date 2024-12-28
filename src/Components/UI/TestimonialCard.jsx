import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
    const { des, img, name, title } = testimonial
    return (
        <div className='px-3'>
            <div className='border-t-4 border-secondery p-[30px] bg-white testimonial_shadow'>  {/*bg  এর সাথে shadow কানেক্টেট */}
                <p className='  px-10 py-[21px] items-center justify-center'>{des}</p>
            </div>
            <div className='flex gap-6 items-center justify- pl-[52px] pt-[30px]  '>
                <div><img src={img} alt="" /></div>
                <div>
                    <h3 className='font-semibold text-primary text-[20px]'>{name}</h3>
                    <p>{title}</p>
                    <ul>
                        <li className='flex items-center'>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                        </li>
                    </ul>

                    {/* video 34 , 1:09 min */}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;