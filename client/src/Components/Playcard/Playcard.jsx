import React, { useRef } from 'react'
import { useState, useEffect } from 'react'



const Playcard = () => {

    const textRef1 = useRef(null)
    const textRef2 = useRef(null)
    const textRef3 = useRef(null)
    const [scrollPosition1, setScrollPosition1] = useState(0)
    const [scrollPosition2, setScrollPosition2] = useState(0)
    const [scrollPosition3, setScrollPosition3] = useState(0)



    useEffect(() => {
        const handleScroll = () => {
            const currentPosition1 = textRef1.current.getBoundingClientRect().top
            setScrollPosition1(currentPosition1 / window.innerHeight)

            const currentPosition2 = textRef2.current.getBoundingClientRect().top
            setScrollPosition2(currentPosition2 / window.innerHeight)

            const currentPosition3 = textRef3.current.getBoundingClientRect().top
            console.log(currentPosition3 / window.innerHeight)
            setScrollPosition3(currentPosition3 / window.innerHeight)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const calculate = (y1, x1, y2, x2, x) => {
        const A = (y1 - y2) / (x1 - x2);
        const B = (x1 * y2 - x2 * y1) / (x1 - x2)
        return A * x + B
    }


    const scale1 = scrollPosition1 > 0.7 && scrollPosition1 < 0.28 ? 1 : calculate(1, 0.7, 0.95, 0.28, scrollPosition1)

    const scale2 = scrollPosition2 > 0.77 && scrollPosition2 < 0.38 ? 1 : calculate(1, 0.77, 0.97, 0.38, scrollPosition2)

    const scale3 = scrollPosition3 > 0.88 && scrollPosition3 < 0.48 ? 1 : calculate(1, 0.88, 0.99, 0.48, scrollPosition3)

    const scale4 = scrollPosition3 > 0.18 && scrollPosition3 < 0 ? 1 : calculate(1, 0.18, 0.95, 0, scrollPosition3)

    return (
        <div className=''>
            <div className='flex flex-col items-center pb-[10vh]'>
                <div style={{
                    boxShadow: '0px -5px 30px 15px black',
                    border: '1px solid #303030',
                    visibility: `${scrollPosition3 <= 0.19 ? 'hidden' : ''}`,
                    transform: `scale(${scale1})`,
                    transition: 'transform 0.1s ease',

                }}
                    className='w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw]  bg-[#101010] rounded-lg px-6 py-6 mb-24 sticky top-32 z-10'>
                    <p className='text-slate-50 text-3xl lg:text-4xl font-semibold pb-2'>For founders</p>
                    <p className='text-gray-500 text-lg lg:text-xl pb-6'>Scale your orgs & products.</p>
                    <p className='font-semibold text-md lg:text-lg text text-gray-500'>
                        Design your revenue roadmap, go from Pre-PMF to Series A. Soundboard with founders from Pre-PMF to Series B with ~$20M in revenue. Build your growth team - get access to a pool 1,600+ top growth talent.
                    </p>
                </div>
                <div
                    ref={textRef1}
                    style={{
                        boxShadow: '0px -5px 30px 15px black',
                        border: '1px solid #303030',
                        visibility: `${scrollPosition3 <= 0.19 ? 'hidden' : ''}`,
                        transform: `scale(${scale2})`,
                        transition: 'transform 0.1s ease'
                    }}
                    className='w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw]  bg-[#101010] rounded-lg px-6 py-6 mb-24 sticky top-[28vh] z-20'>
                    <p className='text-slate-50 text-3xl lg:text-4xl font-semibold pb-2'>For leaders</p>
                    <p className='text-gray-500 text-lg lg:text-xl pb-6'>Create revenue impact.</p>
                    <p className='font-semibold text-md lg:text-lg text text-gray-500'>
                        Build a revenue growth model & prioritise based on business objectives. Soundboard with 500+ growth & product leaders in similar journeys. Hire top talent with in-depth proof of work.
                    </p>
                </div>
                <div
                    ref={textRef2}
                    style={{
                        boxShadow: '0px -5px 30px 15px black',
                        visibility: `${scrollPosition3 <= 0.19 ? 'hidden' : ''}`,
                        border: '1px solid #303030',
                        transform: `scale(${scale3})`,
                        transition: 'transform 0.1s ease'
                    }}
                    className='w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw]  bg-[#101010] rounded-lg px-6 py-6 mb-24 sticky top-[38vh] z-30'>
                    <p className='text-slate-50 text-3xl lg:text-4xl font-semibold pb-2'>For mid-managers</p>
                    <p className='text-gray-500 text-lg lg:text-xl pb-6'>Pave your transition to leadership.</p>
                    <p className='font-semibold text-md lg:text-lg text text-gray-500'>
                        Learn how to impact the business bottomline. Work with top founders, typically in the 1→10 stage, 80% having raised money. Soundboard with top growth leaders and founders from the ecosystem.
                    </p>
                </div>
                <div
                    ref={textRef3}
                    style={{
                        boxShadow: '0px -5px 30px 15px black',
                        border: '1px solid #303030',
                        transform: `scale(${scale4})`,
                        transition: 'transform 0.1s ease'
                    }}
                    className='w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw]  bg-[#101010] rounded-lg px-6 py-6 mb-24 sticky top-[48vh] z-40'>
                    <p className='text-slate-50 text-3xl lg:text-4xl font-semibold pb-2'>For operators</p>
                    <p className='text-gray-500 text-lg lg:text-xl pb-6'>Design your 5 year career roadmap.</p>
                    <p className='font-semibold text-md lg:text-lg text text-gray-500'>
                        Learn the macro and micro nuances of revenue growth. Apply frameworks on your product the next Monday morning. Soundboard with marquee leaders & founders. Build the right surface area of luck to land breakout roles.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Playcard
