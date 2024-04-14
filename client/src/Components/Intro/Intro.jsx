import React from 'react'
import '../Navbar/Navbar.css'
import { useState, useEffect } from 'react'




const Intro = () => {



    return (
        <div className='bg-black pb-8'>
            <div className='h-[100vh] w-full'>

            </div>
            <div className='flex  flex-col items-center sm:flex-row justify-center lg:justify-start lg:pl-32 gap-16 py-4'>
                <button
                    style={{
                        backgroundColor: '#181818',
                        backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                    }}
                    className='py-2 px-8 w-[70%] sm:w-auto border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold  text-md scale-100 hover:scale-110 transition-all'>
                    GET STARTED
                </button>
                <button
                    style={{
                        backgroundColor: '#181818',
                        backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                    }}
                    className='py-2 px-8 w-[70%] sm:w-auto  border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold hover:scale-110 transition-all text-md'>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Intro
