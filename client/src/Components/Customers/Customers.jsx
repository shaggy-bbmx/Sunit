import React, { useEffect, useRef, useState } from 'react'
import bg_img from '../../assets/images/bg__customers.png'



const Customers = () => {

    const divRef1 = useRef(null)
    const [flag, setFlag] = useState(false)


    useEffect(() => {

        const scrollHandler = () => {

            const xDistance = divRef1.current.getBoundingClientRect().top
            if ((xDistance / window.innerHeight) > 0.25 && (xDistance / window.innerHeight) < 0.75) {
                setFlag(1.1)
            } else {
                setFlag(1)
            }


        }

        window.addEventListener('scroll', scrollHandler)

        return () => { window.removeEventListener('scroll', scrollHandler) }
    }, [])


    return (
        <div className='flex justify-center w-full h-[100vh]  pb-[20vh] '>
            <div
                style={{
                    background: 'rgb(0,0,0)',
                    background: 'linear-gradient(180deg, rgba(0,0,0,1) 20%, rgb(16, 16, 16) 50%)',
                    border: '1px solid #241A30',
                    borderTop: '0px solid #241A30',
                    scale: `${flag}`
                }}
                className='w-[90%] sm:w-[90%] md:w-[80%] h-full bg-[#101010] py-16 px-8 rounded-xl relative transition-all  duration-1000'>
                <div className='text-slate-50 font-bold text-3xl sm:text-3xl lg:text-4xl  text-center flex tracking-normal  justify-center'>
                    <div
                        ref={divRef1}
                        className='w-full md:w-[90%] lg:w-[80%] xl:w-[60%] h-full'>
                        Join over 300,000+ businesses to create unique brand designs.
                    </div>
                    <div></div>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, rgba(0,0,0,1) 80%, rgb(16, 16, 16) 50%)'
                        }}
                        className='absolute top-0 left-[-1px] w-[1px] h-[50%] bg-black'></div>
                    <div className='absolute top-0 right-[-1px] w-[1px] h-[50%] bg-black'></div>
                </div>
            </div>
        </div>
    )
}

export default Customers
