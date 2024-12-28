import { CircularProgressbar } from 'react-circular-progressbar';   // react - circular - progressbar (google search) ইনস্টল করা হইছে(Tarminal thake)
import 'react-circular-progressbar/dist/styles.css';

const Progress = ({ percentage, title }) => {
    return (
        <div className='py-[30px] px-7 bg-white drop-shadow-box' >
            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={3}

                //  এই  styles টা react-circular-progressbar  থেকে কপি করে নেওয়া হইছে  
                styles={{

                    path: {
                        stroke: '#E5745D',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    trail: {
                        stroke: '#d6d6d6',
                        strokeLinecap: 'butt',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    text: {
                        fill: '#E5745D',
                        fontSize: '16px',
                    },
                    background: {
                        fill: '#E5745D',
                    },
                }}
            />
            <p className='text-primary text-[26px] font-semibold pt-2 text-center'>{title}</p>
            {/* 33 Video 00 munite */}
        </div>
    );
};

export default Progress;