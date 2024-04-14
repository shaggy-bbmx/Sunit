import React, { useRef } from 'react'
import { useState, useEffect } from 'react'




const Usecase = () => {

    const [scrollPosition1, setScrollPosition1] = useState(0)
    const [scrollPosition2, setScrollPosition2] = useState(0)
    const [scrollPosition3, setScrollPosition3] = useState(0)
    const [scrollPosition4, setScrollPosition4] = useState(0)
    const textRef1 = useRef(null)
    const textRef2 = useRef(null)
    const textRef3 = useRef(null)
    const textRef4 = useRef(null)



    useEffect(() => {
        const handleScroll = () => {
            const currentPosition1 = textRef1.current.getBoundingClientRect().top
            setScrollPosition1(currentPosition1);
            console.log('cp', currentPosition1)
            console.log('sp', window.innerHeight)
            console.log('lp', window.innerHeight * 0.2)
            console.log('hp', window.innerHeight * 0.35)

            const currentPosition2 = textRef2.current.getBoundingClientRect().top
            setScrollPosition2(currentPosition2);

            const currentPosition3 = textRef3.current.getBoundingClientRect().top
            setScrollPosition3(currentPosition3);

            const currentPosition4 = textRef4.current.getBoundingClientRect().top
            setScrollPosition4(currentPosition4);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const textStyles1 = {
        color: scrollPosition1 >= window.innerHeight * 0.47 && scrollPosition1 <= window.innerHeight * 0.61 ? 'rgb(248 250 252)' : 'rgb(107 114 128)',
        transition: 'color 0.1s ease',
    }

    const textStyles2 = {
        color: scrollPosition2 >= window.innerHeight * 0.47 && scrollPosition2 <= window.innerHeight * 0.61 ? 'rgb(248 250 252)' : 'rgb(107 114 128)',
        transition: 'color 0.1s ease',
    }

    const textStyles3 = {
        color: scrollPosition3 >= window.innerHeight * 0.47 && scrollPosition3 <= window.innerHeight * 0.61 ? 'rgb(248 250 252)' : 'rgb(107 114 128)',
        transition: 'color 0.1s ease',
    }

    const textStyles4 = {
        color: scrollPosition4 >= window.innerHeight * 0.47 && scrollPosition4 <= window.innerHeight * 0.61 ? 'rgb(248 250 252)' : 'rgb(107 114 128)',
        transition: 'color 0.1s ease',
    }

    return (
        <div className='w-full  flex flex-col items-center justify-center pt-32 gap-6 pb-32'>
            <div ref={textRef1} style={textStyles1} className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Membership built for</div>
            <div ref={textRef2} style={textStyles2} className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>ambitious founders,</div>
            <div ref={textRef3} style={textStyles3} className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>marketing, product</div>
            <div ref={textRef4} style={textStyles4} className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>‍&#38; business leaders</div>
        </div>
    )
}

export default Usecase
