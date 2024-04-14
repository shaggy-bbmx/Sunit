import React from 'react'
import Countup from 'react-countup'



const Numbers = () => {
    return (
        <div className='w-full h-[60vh] pb-[5vh] sm:pb-[40vh]'>
            <div
                style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgb(16, 16, 16)10%,rgb(16, 16, 16)70%,rgba(0,0,0,1) 90%)'
                }}
                className='w-full h-full  flex flex-col sm:flex-row justify-around items-center '>
                <div className='w-full h-full  flex justify-around items-center py-4'>
                    <div className='h-full w-[20%] text-center'>
                        <div className='text-slate-50  pb-2'>
                            <p className='font-bold text-4xl sm:text-5xl'>
                                <Countup duration={3} end={56} />+
                            </p>
                        </div>
                        <div className='text-slate-50 font-semibold text-sm sm:text-md'>
                            <p>PROJECT DONE</p>
                        </div>
                    </div>
                    <div className='h-full w-[20%] text-center'>
                        <div className='text-slate-50  pb-2'>
                            <p className='font-bold text-4xl sm:text-5xl'>
                                <Countup duration={3} end={35} />+
                            </p>
                        </div>
                        <div className='text-slate-50 font-semibold  text-sm sm:text-md'>
                            <p>AWARD WINNING</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full  flex justify-around items-center py-4'>
                    <div className='h-full w-[20%] text-center'>
                        <div className='text-slate-50  pb-2'>
                            <p className='font-bold text-4xl sm:text-5xl'>
                                <Countup duration={3} end={38} />+
                            </p>
                        </div>
                        <div className='text-slate-50 font-semibold  text-sm sm:text-md'>
                            <p>HAPPY CLIENT</p>
                        </div>
                    </div>
                    <div className='h-full w-[20%] text-center'>
                        <div className='text-slate-50  pb-2'>
                            <p className='font-bold text-4xl sm:text-5xl items-center'>
                                <Countup duration={2} end={4.7} decimals={1} />+
                            </p>
                        </div>
                        <div className='text-slate-50 font-semibold  text-sm sm:text-md'>
                            <p>CLIENT RATINGS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Numbers
