import * as React from 'react';

interface Props {
    inSectionView: Boolean,
    page: String
}

const Sectioncircle: React.FC<Props> = ({inSectionView, page}) => {
    
    const [bgColor, setBgColor] = React.useState(String)

    React.useEffect(() => {
        if (page === '3') {
            setBgColor('bg-[#1E2428]')
        }
        else if (page === 'F') {
            setBgColor('bg-[#F5F3F4]')
        }
        else {
            setBgColor('bg-dark-grey')
        }
    }, [])
   

    return ( 
            <div className={`absolute ${bgColor} ${page === 'F' ? 'top-1/4' : 'top-3/4' } ml-[6.75rem] z-40 ${inSectionView ? '' : 'saturate-0 opacity-25'}`}>
                <div className="w-10 h-10 border-2 border-primary-red rounded-full flex justify-center items-center">
                    <div className={`h-4/5 w-4/5 bg-sand rounded-full flex justify-center items-center ${inSectionView ? 'opacity-100' : 'opacity-0'} transition-all`}>
                        <span className='font-mono text-dark-black'>{page}</span>
                    </div>
                </div>
            </div>
        )
}

export default Sectioncircle