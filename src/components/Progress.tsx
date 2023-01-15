import * as React from 'react';
import { round, throttle } from 'lodash';


function ProgressBar() {

    const [height, setHeight] = React.useState(0)
    const myRef = React.useRef<HTMLDivElement | null>(null)
    const [com, setCom] = React.useState(Number)

    React.useEffect(()=>{
        const ss = document.documentElement.scrollHeight
        const cc = document.documentElement.clientHeight
        setCom(ss-cc)
    },[])

    const scrollProgress = () => {

        //how far user is from the top of the root document (pixels)
        const scrollTop = document.documentElement.scrollTop
        const sh = document.documentElement.scrollHeight
        const ch = document.documentElement.clientHeight
        
        const percent = scrollTop / (sh - ch)*100
        setHeight(round(percent))
    }
        
    React.useEffect(() => {

    window.addEventListener('scroll', throttle(scrollProgress, 250))

    return window.removeEventListener('scroll', throttle(scrollProgress, 250))
    }, []);
        
    return ( 
        <div style={{height: `${com}px`}} className={`ml-32 absolute top-3/4 w-0.5 bg-gray-600 bg-opacity-25 z-30`}>
            <div ref={myRef} style={{height: `${height}%`}} className="line absolute w-0.5 bg-primary-red h-40 transition-all duration-500 ease-out"></div>
        </div>
     );
}

export default ProgressBar;