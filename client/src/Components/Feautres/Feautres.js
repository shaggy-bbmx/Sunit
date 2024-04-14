import React from 'react'
import pc_img from '../../assets/images/pc_img.png'
import rocket_img from '../../assets/images/rocket_img.png'
import mobile from '../../assets/images/mobile.png'
import './Feautres.css'
import { Fade } from 'react-awesome-reveal'





const Feautres = () => {
    return (
        <div className='pb-[20vh] sm:pb-[30vh] w-full flex flex-col items-start pl-2 sm:pl-6 lg:pl-4 xl:pl-0 xl:items-center'>
            <div className='h-[20vh] sm:h-[25vh] w-[80%] py-0 sm:py-8 ' >
                <p className='text-slate-50 font-bold text-2xl sm:text-3xl md:text-4xl   leading-normal pb-8 w-[90vw] sm:w-[80vw] lg:w-[70vw] xl:w-[50vw]'>
                    Navigating Digital Horizons with Digimax: Your Trusted Partner.
                </p>
            </div>



            <div class="w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[95vw] xl:w-[80%] h-[150vh] md:h-[105vh] grid grid-rows-4 md:grid-cols-4 gap-4">
                <Fade triggerOnce='true' direction='left' className='rounded-2xl md:col-span-2 md:row-span-2 bg-gray-500'>
                    <div className='rounded-2xl w-full h-full bg-gray-500'>
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                            }}
                            class="h-full w-full rounded-2xl relative overflow-hidden pt-6 md:pt-20 pl-8">
                            <p className='text-slate-50 font-bold text-xl md:text-2xl  leading-normal  pb-4   w-[70%] md:w-[60%]'>
                                Timely and Transparent Communication
                            </p>
                            <p className='font-semibold text-md text text-gray-500 pb-4 sm:pb-8 w-[60%] z-20 relative'>
                                Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                            </p>
                            <button
                                style={{
                                    backgroundColor: '#181818',
                                    backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                                }}
                                className='py-2 px-8  border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold  text-md text-md relative z-30 '>
                                Learn More
                            </button>
                            <img src={pc_img} alt='cpu_img' className='object-contain h-[90%] absolute right-[-10%] top-8 z-10' />
                        </div>
                    </div>
                </Fade>



                <Fade triggerOnce='true' direction='up' className='rounded-2xl md:col-span-2 lg:col-span-1 md:row-span-2'>
                    <div className='rounded-2xl w-full h-full'>
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                            }}
                            class="h-full w-full rounded-2xl relative p-6">
                            <p className='text-slate-50 font-bold text-2xl  leading-normal  pb-4 w-[60%] sm:w-[40%] z-10'>
                                Boost Traffic & Sales
                            </p>
                            <p className='font-semibold text-md text text-gray-500 pb-8 w-[60%] z-10'>
                                Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                            </p>
                            <img src={rocket_img} alt='cpu_img' className='h-[120%]  rounded-2xl w-[50%] md:w-full object-cover absolute bottom-0  right-0' />
                        </div>
                    </div>
                </Fade>


                <Fade triggerOnce='true' direction='right' className=' hidden lg:block rounded-3xl col-span-1 row-span-4 '>
                    <div className="w-full h-full rounded-3xl p-4 border-style">
                        <div className='flex flex-col justify-center items-center w-full h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-24 w-24 mb-4 rounded-full bg-slate-100 border-style-circle flex justify-center items-center animate-bounce' fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 95.098 95.098">
                                <g>
                                    <path d="M92.961,0H2.137C0.957,0,0,0.957,0,2.137v90.824c0,1.18,0.957,2.137,2.137,2.137h90.824c1.18,0,2.137-0.957,2.137-2.137   V2.137C95.098,0.957,94.141,0,92.961,0z M79.561,69.389l-7.929,7.928c-0.069,0.069-0.144,0.133-0.226,0.188l-0.187,0.128   c-1.995,1.595-4.623,2.403-7.815,2.403c-8.939,0-21.317-6.601-31.534-16.816C17.515,48.863,11.207,31.551,17.51,23.806l0.015-0.017   c0.07-0.125,0.157-0.241,0.261-0.344l7.915-7.915c0.624-0.624,1.634-0.624,2.257,0l13.54,13.54   c0.299,0.299,0.468,0.705,0.468,1.128c0,0.423-0.169,0.829-0.468,1.128l-7.072,7.072c0.616,1.729,3.103,7.845,9.238,13.98   c5.914,5.913,11.053,7.793,12.986,8.328l7.113-7.113c0.623-0.623,1.633-0.623,2.256,0l13.541,13.54   c0.299,0.299,0.467,0.705,0.467,1.128S79.859,69.09,79.561,69.389z" />
                                </g>
                            </svg>
                            <p className='text-slate-50 font-bold text-2xl  leading-normal  pb-4'>
                                (888) 4000-2234
                            </p>
                            <p className='font-semibold text-md text text-gray-500 pb-8 text-center w-[80%]'>
                                Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                            </p>
                            <button
                                style={{
                                    backgroundColor: '#181818',
                                    backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                                }}
                                className='py-2 px-8  border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold  text-md text-md relative z-30 '>
                                Learn More
                            </button>
                        </div>
                    </div>
                </Fade>




                <Fade triggerOnce='true' direction='down' className='rounded-2xl  md:row-span-2 md:col-span-2 lg:col-span-1'>
                    <div className='w-full h-full rounded-2xl '>
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                            }}
                            class="h-full w-full rounded-2xl pt-6 flex flex-col justify-center items-center bg-red-700">
                            <p className='text-slate-50 text-6xl font-bold pb-4'>4.7+</p>
                            <div className='flex pb-2'>
                                <svg fill="#c2ee49" className='h-8 w-8' viewBox="0 0 32 32" version="1.1" stroke="#c2ee49" stroke-width="0.576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
                                <svg fill="#c2ee49" className='h-8 w-8' viewBox="0 0 32 32" version="1.1" stroke="#c2ee49" stroke-width="0.576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
                                <svg fill="#c2ee49" className='h-8 w-8' viewBox="0 0 32 32" version="1.1" stroke="#c2ee49" stroke-width="0.576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
                                <svg fill="#c2ee49" className='h-8 w-8' viewBox="0 0 32 32" version="1.1" stroke="#c2ee49" stroke-width="0.576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
                                <svg fill="rgb(100 116 139)" className='h-8 w-8' viewBox="0 0 32 32" version="1.1" stroke="rgb(100 116 139)" stroke-width="0.576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
                            </div>
                            <p className='text-slate-50 text-2xl mb-4 md:mb-0 font-semibold'>Client Ratings</p>
                            <p className='font-semibold text-md text text-gray-500 pb-8  sm:w-[60%] md:w-[80%] text-center'>
                                Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                            </p>
                        </div>
                    </div>
                </Fade>




                <div
                    style={{
                        backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                    }}
                    class="rounded-2xl md:row-span-2 md:col-span-2 bg-red-700 relative pt-5 lg:pt-20 pl-6">
                    <p className='text-slate-50 font-bold text-xl sm:text-2xl  leading-normal  pb-4 sm:w-[50%] md:w-[70%] lg:w-[40%] z-30'>
                        Responsive and Scalable Solutions
                    </p>
                    <p className='font-semibold text-md text text-gray-500 pb-12 md:pb-8 md:w-[75%] lg:w-[50%] z-30'>
                        Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                    </p>
                    <button
                        style={{
                            backgroundColor: '#181818',
                            backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                        }}
                        className='py-2 px-8  border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold  text-md text-md relative z-30 '>
                        Learn More
                    </button>
                    <img src={mobile} alt='cpu_img' className='w-[40%] md:w-[50%] object-contain absolute bottom-0 right-0 z-10 filter grayscale' />
                </div>




            </div>

            <div className='flex justify-start w-full mt-12'>
                <Fade triggerOnce='true' direction='right' className=' block lg:hidden rounded-3xl'>
                    <div className="w-[250px] h-[480px] sm:w-[290px] sm:h-[550px] rounded-3xl p-4 border-style">
                        <div className='flex flex-col justify-center items-center w-full h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-16 w-16 sm:h-24 sm:w-24 mb-4 rounded-full bg-slate-100 border-style-circle flex justify-center items-center animate-bounce' fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 95.098 95.098">
                                <g>
                                    <path d="M92.961,0H2.137C0.957,0,0,0.957,0,2.137v90.824c0,1.18,0.957,2.137,2.137,2.137h90.824c1.18,0,2.137-0.957,2.137-2.137   V2.137C95.098,0.957,94.141,0,92.961,0z M79.561,69.389l-7.929,7.928c-0.069,0.069-0.144,0.133-0.226,0.188l-0.187,0.128   c-1.995,1.595-4.623,2.403-7.815,2.403c-8.939,0-21.317-6.601-31.534-16.816C17.515,48.863,11.207,31.551,17.51,23.806l0.015-0.017   c0.07-0.125,0.157-0.241,0.261-0.344l7.915-7.915c0.624-0.624,1.634-0.624,2.257,0l13.54,13.54   c0.299,0.299,0.468,0.705,0.468,1.128c0,0.423-0.169,0.829-0.468,1.128l-7.072,7.072c0.616,1.729,3.103,7.845,9.238,13.98   c5.914,5.913,11.053,7.793,12.986,8.328l7.113-7.113c0.623-0.623,1.633-0.623,2.256,0l13.541,13.54   c0.299,0.299,0.467,0.705,0.467,1.128S79.859,69.09,79.561,69.389z" />
                                </g>
                            </svg>
                            <p className='text-slate-50 font-bold text-2xl  leading-normal  pb-4'>
                                (888) 4000-2234
                            </p>
                            <p className='font-semibold text-md text text-gray-500 pb-8 text-center w-[80%]'>
                                Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                            </p>
                            <button
                                style={{
                                    backgroundColor: '#181818',
                                    backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                                }}
                                className='py-2 px-8  border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold  text-md text-md relative z-30 '>
                                Learn More
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>

        </div >
    )
}

export default Feautres
