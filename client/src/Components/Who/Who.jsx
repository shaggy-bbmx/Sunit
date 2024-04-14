import React from 'react'
import who_img from '../../assets/images/who_img.jpg'
import laptop_img from '../../assets/images/laptop_img.jpg'
import './Who.css'
import { Fade } from 'react-awesome-reveal'

const Who = () => {
    return (
        <div className='w-full sm:pb-[15vh] flex flex-col'>
            <div className='w-full h-[130vh] sm:h-[100vh] md:h-[85vh] lg:h-[90vh] flex flex-col md:flex-row justify-center pb-[20vh]'>
                <Fade
                    triggerOnce='true'
                    direction='left'
                    style={{
                        border: '1px solid #303030'
                    }}
                    className='w-[80%] sm:w-[45%] xl:w-[40%] h-[50%] md:h-full rounded-2xl ml-[4vw] md:ml-0 px-4 py-4 '>
                    <img src={who_img} alt='bg_img' className='h-full w-full o object-cover rounded-xl filter grayscale hover:grayscale-0  transition duration-150'></img>
                </Fade>

                <div className='sm:w-[80%] md:w-[50%] lg:w-[45%] xl:w-[40%] pl-[5vw]  md:pl-8 lg:pl-16 pt-8 flex flex-col'>
                    <Fade triggerOnce='true' direction='right' className=' text-gray-500  font-semibold  text-sm pb-4'>WHO WE ARE</Fade>
                    <Fade triggerOnce='true' direction='right' className='text-slate-50 font-bold text-2xl lg:text-4xl flex leading-normal justify-center pb-4'>
                        Your Digital Future, Our Expertise: Digimax Delivers Excellence.
                    </Fade>
                    <Fade triggerOnce='true' direction='right' className='font-semibold md:text-md lg:text-lg text text-gray-500 pb-8'>
                        Pede inceptos dui diam felis vehicula rutrum ridiculus at consectetur nam et mollis vitae netus duis pellentesque ligula aenean taciti eget tincidunt commodo tristique elit
                    </Fade>
                    <Fade triggerOnce='true' direction='right'>
                        <button
                            style={{
                                backgroundColor: '#181818',
                                backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                            }}
                            className='py-2 px-8  border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold  text-md text-md relative z-30 md:w-[50%] lg:w-[40%] xl:w-[35%]'>
                            Learn More
                        </button>
                    </Fade>
                </div>
            </div>

            <div className='w-full h-[210vh] sm:h-[160vh] md:h-[150vh] lg:h-[80vh] xl:h-[100vh] flex items-center sm:justify-between flex-col lg:flex-row  gap-8 lg:justify-center pb-[5vh] sm:pb-[10vh]'>
                <Fade triggerOnce='true' direction='left' className='w-full sm:w-[90%] lg:w-[55%] xl:w-[50%] h-[50%]  sm:h-[60%] lg:h-full'>
                    <div style={{
                        backgroundImage: `url(${laptop_img})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                        className='w-full h-full rounded-2xl  px-6 pt-64 lg:pt-32 xl:pt-64 relative z-0 flex flex-col'>
                        <p className=' text-slate-50  font-semibold  text-sm pb-4 relative z-30'>OUR VALUE</p>
                        <p className='text-slate-50 font-bold text-xl sm:text-3xl xl:text-4xl flex leading-normal justify-center pb-4 relative z-30 '>
                            Smart Designs, Sharp Results - Choose Digimax for Digital Excellence.
                        </p>
                        <p className='font-semibold text-md text text-gray-500 pb-8 relative z-30'>
                            Neque sodales elementum fames ac nunc pellentesque penatibus. Consectetuer donec nascetur fames metus est faucibus sodales commodo natoque consequat fusce.
                        </p>
                        <button
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'linear-gradient(135deg, #0A011899 0%, #0A0316 100%)'
                            }}
                            className='py-2 px-8  border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold  text-md text-md relative z-30 w-full sm:w-[32%] xl:w-[28%]'>
                            Learn More
                        </button>
                        <div style={{
                            backgroundImage: 'linear-gradient(135deg, #0A011899 0%, #0A0316 100%)',
                            backgroundColor: 'transparent'
                        }}
                            className='absolute w-full h-full z-20 top-0 left-0'></div>
                    </div>
                </Fade>
                <div className='w-[95vw] lg:w-[32%] xl:w-[30%] h-[50%] sm:h-[30%] lg:h-full flex flex-col sm:flex-row lg:flex-col items-center sm:justify-around lg:justify-between'>
                    <Fade triggerOnce='true'
                        direction='down'
                        className='w-[80%] sm:w-[40%] md:w-[35%] lg:w-full h-[40%] sm:h-full lg:h-[48%] xl:h-[45%]'>
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                            }}
                            className='w-full h-full  px-6 py-6 bg-[#181818] rounded-2xl border-[1px] border-solid border-[#303030]'>
                            <p className=' text-gray-500  font-semibold  text-sm pb-2'>OUR VISION</p>
                            <p className='text-slate-50 font-bold text-xl xl:text-2xl flex leading-normal justify-center pb-4'>
                                Elevate Your Digital Presence with Digimax Expertise.
                            </p>
                            <p className='font-semibold text-md text text-gray-500 pb-8'>
                                Ac neque commodo litora nam mattis platea dui molestie aenean integer potenti imperdiet class semper
                            </p>
                        </div>
                    </Fade>
                    <Fade triggerOnce='true' direction='up' className='w-[80%] sm:w-[40%] md:w-[35%] lg:w-full h-[40%] sm:h-full lg:h-[48%] xl:h-[45%] mt-16 sm:mt-0'>
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                            }}
                            className='w-full h-full px-6 py-6 bg-[#181818] rounded-2xl border-[1px] border-solid border-[#303030]'>
                            <p className=' text-gray-500  font-semibold  text-sm pb-2'>OUR MISSION</p>
                            <p className='text-slate-50 font-bold text-xl xl:text-2xl flex leading-normal justify-center pb-4'>
                                Unleash Your Potential in the Digital Realm with Digimax.
                            </p>
                            <p className='font-semibold text-md text text-gray-500 pb-8'>
                                Ac neque commodo litora nam mattis platea dui molestie aenean integer potenti imperdiet class semper
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div >
    )
}

export default Who
