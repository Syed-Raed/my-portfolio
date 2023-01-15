import * as React from 'react';
import { FaSortUp } from 'react-icons/fa';
import {BiChevronUp} from 'react-icons/bi';
import { animateScroll as scroll } from 'react-scroll';

interface Props {
    end: Boolean
}

const BacktoTop: React.FC<Props> = ({end}) => {

    const [show, setShow] = React.useState(false)

    return ( 
        <div className='fixed bottom-16 right-20 cursor-pointer transition-all ease-in flex flex-col items-center z-10'
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => {scroll.scrollToTop(
            {
                duration: 1500,
                smooth: 'easeInOutCubic'
            }
        )}}
        >
            <div className='w-12 h-12 flex justify-center items-center bg-primary-red hover:bg-[#1E2428] rounded-md shadow-md shadow-slate-800'>
                <BiChevronUp size={44} color='white' />
            </div>
            <p className={`mt-3 ${end ? 'text-black' : 'text-white'} font-mono ${show ? 'visible' : 'collapse'}`}>Back to Top</p>
        </div>
     );
}

export default BacktoTop;