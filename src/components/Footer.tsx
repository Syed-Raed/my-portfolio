import * as React from 'react';


interface CircleProps {
    circle: React.ReactNode,
    isVisible: Boolean
 }

 const Footer: React.FC<CircleProps> = ({circle, isVisible}) => {    

    return ( 
        <div className='h-[40vh] relative bg-[#F5F3F4] border-2 border-dark-grey overflow-hidden'>
            {circle}
            <div className={`flex justify-center items-center h-full w-full ${isVisible ? 'translate-y-0' : 'translate-y-full'} transition-all duration-500`}>
                <h3 className='text-6xl text-dark-grey font-lekton'>You've reached the <span className='text-primary-red'>end</span></h3>
            </div>
        </div>
     );
}

export default Footer;