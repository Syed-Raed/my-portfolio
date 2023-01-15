import * as React from 'react';
import {FaLinkedin, FaMailBulk, FaTwitter, FaWhatsapp} from "react-icons/fa";
import {IoMailSharp} from "react-icons/io5";
import mainLogo from '../assets/SRD-logo.png'
import {Link} from 'react-scroll'

function Navbar() {
    return ( 
        <div className='w-full px-24 bg-dark-black text-white flex justify-between items-center z-10'>
            <img src={mainLogo} alt="brand logo" className='h-8'/>
            <div className='h-full grid place-items-center'>
                <ul className='h-full flex text-lg gap-11 items-stretch'>
                    <Link to="about-me" spy={true} smooth={true}><li className='p-3 py-7 flex items-center cursor-pointer hover:bg-white hover:text-black transition-all duration-200'>About Me</li></Link>
                    <Link to="my-portfolio" spy={true} smooth={'easeInOutCubic'} duration={1500}><li className='p-3 py-7 flex items-center cursor-pointer hover:bg-white hover:text-black transition-all duration-200'>Portfolio</li></Link>
                    <ul className='flex gap-8    items-center'>
                        <li><FaLinkedin color='white' size={22}/></li>
                        <li><FaTwitter color='white' size={22}/></li>
                        <li><IoMailSharp color='white' size={22}/></li>
                        <li><FaWhatsapp color='white' size={23}/></li>
                    </ul>
                </ul>
            </div>
        </div>
     );
}

export default Navbar;