import * as React from 'react';
import projectphoto from '../assets/sample-website.jpg'
import buildingphoto from '../assets/pexels-buildings.jpg'
import burjalarab from '../assets/burj-al-arab-lower.jpg'

interface CircleProps {
    circle: React.ReactNode,
    isVisible: Boolean
 }


const Portfolio: React.FC<CircleProps> = ({circle, isVisible}) => {


    const projects = [projectphoto, buildingphoto, burjalarab].map((each) => {
        return (
            <div className='group relative cursor-pointer transition-all duration-500'>
                <div className='absolute h-full scale-105 w-full bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
              <img src={each} alt="" className='h-56 w-[330px] group-hover:scale-105 transition-all'/>
              <div className='absolute px-7 w-full font-mono bottom-2 flex justify-between items-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <p className=' text-lg'>Project Name</p>
                <button className='text-primary-red border border-white py-1.5 px-6'>View Demo</button>
              </div>
            </div>
            )
    })

    return ( 
        <div id='my-portfolio' className='h-screen relative text-sand py-8'>
            {circle}
            <div className="bg-[#1E2428] mx-auto w-[95%] h-full drop-shadow-lg">
                <div className="flex flex-col items-center">
                    <h2 className=' mt-20 text-6xl font-semibold'>Portfolio</h2>
                    <h3 className=' mt-4 text-2xl leading-9 font-light'>What I've worked on so far.....</h3>
                    <div className={`mt-16 flex gap-6 odd [&>*:nth-child(2)]:delay-150 [&>*:nth-child(3)]:delay-300 ${isVisible ? '[&>*]:opacity-100  [&>*]:translate-y-0' : ' [&>*]:opacity-0 [&>*]:translate-y-1/2'}`}>
                        {projects}
                    </div>
                    <p className='mt-16 text-lg font-mono'>more projects coming soon</p>
                </div>
            </div>
        </div>
     );
}

export default Portfolio;