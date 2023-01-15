import * as React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import heroImage from '../assets/engine-mask.png'

interface CircleProps {
    circle: React.ReactNode,
    isVisible: Boolean
 }

 const Hero: React.FC<CircleProps> = ({circle, isVisible}) => {    

    return ( 
        <div className='text-sand h-[calc(100vh-84px)]'>
            {circle}
            <div className="grid grid-cols-2">
                <div className='ml-32 mt-40 h-fit'>
                    <h1 className={`font-semibold text-8xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} transition-all duration-700`}>I'm Raed</h1>
                    <h2 className='mt-3 font-light text-3xl'>
                        <Typewriter
                        options={{
                            strings: ['Engineer', 'Web Designer', 'Web Developer'],
                            autoStart: true,
                            loop: true
                        }}
                        />
                    </h2>
                    <Link to='contact-section' spy={true} smooth={'easeInOutCubic'} duration={1500}>
                        <div className={`px-12 w-fit py-3 mt-9 border border-primary-red text-xl overflow-hidden cursor-pointer hover:shadow-[inset_13rem_0_0_0] hover:shadow-primary-red transition-all duration-500  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                        Contact Me</div>
                    </Link>
                </div>
                <div className='h-[calc(100vh-84px)]'>
                    <img src={heroImage} alt="" className='object-cover h-full w-full'/>
                </div>
            </div>
          
        </div>
     );
}

export default Hero; 