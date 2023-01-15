import * as React from 'react';
import {FaLinkedin, FaWhatsapp, FaDribbble, FaBehanceSquare} from "react-icons/fa"
import { Element } from 'react-scroll';


interface CircleProps {
    circle: React.ReactNode,
    isVisible: Boolean
 }

 const Contact: React.FC<CircleProps> = ({circle, isVisible}) => {    

    return (  
        <Element name='contact-section' className='relative'>
            {circle}
            <div className='h-screen relative py-28 px-48 flex flex-col gap-24 text-sand overflow-hidden'>
                <div className={`absolute -top-[13%] -right-1/4 text-[300px] font-semibold opacity-10 leading-none ${isVisible ? 'translate-x-0' : '-translate-x-1/2'} transition-all duration-1000`}>Contact</div>
                <div>
                    <h2 className='text-6xl font-semibold'>Get in Touch</h2>
                    <p className='mt-7 text-2xl leading-9 font-light'>Excited to hear from you!</p>
                </div>
                <div className={`text-5xl font-light ${isVisible ? 'translate-y-0 blur-none' : '-translate-y-1/2 blur-lg'} transition-all duration-500`}>
                    <h3>syedraed333@gmail.com</h3>
                    <h3 className='mt-10'>(60) 132244887</h3>
                </div>
                <div>
                    <ul className='flex gap-20'>
                        <li><FaLinkedin color='#BA181B' size={55} className='hover:invert hover:saturate-0 cursor-pointer hover:scale-90'/></li>
                        <li><FaWhatsapp color='#BA181B' size={55} className='hover:invert hover:saturate-0 cursor-pointer hover:scale-90'/></li>
                        <li><FaDribbble color='#BA181B' size={55} className='hover:invert hover:saturate-0 cursor-pointer hover:scale-90'/></li>
                        <li><FaBehanceSquare color='#BA181B' size={55} className='hover:invert hover:saturate-0 cursor-pointer hover:scale-90'/></li>
                    </ul>
                </div>
            </div>
        </Element>
    );
}

export default Contact;