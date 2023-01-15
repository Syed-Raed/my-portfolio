 import * as React from 'react';
 import photo from '../assets/photo2x.png'
 import signature from '../assets/signature-white.png'
 
 interface CircleProps {
    circle: React.ReactNode,
    isVisible: Boolean
 }

 const About: React.FC<CircleProps> = ({circle, isVisible}) => {
    
    return ( 
        <div id='about-me' className='h-screen relative text-sand overflow-hidden'>
            {circle}
            <div className={`absolute -bottom-20 -right-60 text-[300px] font-semibold opacity-10 leading-none ${isVisible ? 'translate-x-0' : '-translate-x-1/2'} transition-all duration-1000`}>About</div>
            <div className='mx-auto pt-28 px-32 grid grid-cols-2 gap-10'>
                <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
                    <img src={photo} alt="" className='w-80 mx-auto'/>
                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <h2 className={`text-6xl font-semibold ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1/2'} transition-all duration-500`}>About Me 
                            <span className='text-primary-red text-3xl align-top'>*</span>
                        </h2>
                    </div>
                    <p className='mt-12 text-xl leading-9 font-light'>Mechanical engineering senior at the Petronas University of Technology who also develops React tailwind websites and more recently designing in Webflow. I love traveling and taking on new challenges. My name is Syed Raed.</p>
                    <div className="signature">
                        <img src={signature} alt="" className='w-40 mt-24' />
                    </div>
                    <p className='text-primary-red text-3xl mt-10 font-caveat'>*<span>briefly</span></p>
                </div>
            </div>
        </div>
     );
 }
 
 export default About;