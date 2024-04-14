import React, { useEffect, useRef, useState } from 'react'
import collab_img from '../../assets/images/collab_img.jpg'
import ProgressBar from "@ramonak/react-progress-bar"
import { Fade } from 'react-awesome-reveal'
import './Stastics.css'



const Stastics = () => {

    const divRef = useRef(null)
    const [progress1, setProgress1] = useState(5)
    const [progress2, setProgress2] = useState(5)
    const [progress3, setProgress3] = useState(5)
    const [progress4, setProgress4] = useState(5)


    return (
        <Fade
            direction='left'
            triggerOnce='true'
            onVisibilityChange={() => {

                const handler = () => {
                    setProgress1(87)
                    setProgress2(91)
                    setProgress3(74)
                    setProgress4(96)
                }

                setTimeout(handler, 2000)
            }}
            className='w-full h-[150vh] md:h-[200vh] lg:h-[110vh] xl:h-[140vh]'>
            <div className='w-full h-full flex  flex-col-reverse  gap-8 lg:gap-0  lg:flex-row  lg:justify-end pb-[8vh] md:pb-[5vh] lg:pb-[20vh]'>
                <div
                    style={{
                        // backgroundImage: 'linear-gradient(0deg,#0000 0%, #1d1d1d 8%, #111 90%,#0000 100%)'
                        backgroundColor: 'black'
                    }}
                    className='w-[50%] h-full pl-2 sm:pl-8 lg:pl-14 xl:pl-28 lg:pt-0 xl:pt-28'>
                    <div className='text-slate-50 font-bold text-3xl xl:text-4xl   leading-normal  pb-8 w-[98vw] sm:w-[70vw] lg:w-[90%]'>
                        Experience the magic of Interiokit. Contact us to discuss your project.
                    </div>
                    <p className='font-semibold text-md text text-gray-500 pb-8 w-[90vw] sm:w-[80vw] lg:w-[90%]'>
                        Maecenas massa inceptos placerat ultricies ridiculus vulputate torquent curae. Tortor cubilia risus nam cursus sit dui. Facilisi vivamus fermentum commodo nascetur orci morbi quisque ipsum suscipit vel.
                    </p>
                    <div className='w-[80vw] sm:w-[60vw] lg:w-[90%] font-semibold text-md text text-slate-50 py-4'>
                        <p className='pb-3'>Design & Branding</p>
                        <div>
                            <ProgressBar
                                completed={progress1}
                                className="wrapper"
                                barContainerClassName="container"
                                bgColor='#1d1d1d'
                                labelClassName="label"
                                height='15px'
                            />
                        </div>
                    </div>
                    <div ref={divRef} className='w-[80vw] sm:w-[60vw] lg:w-[90%] font-semibold text-md text text-slate-50 py-4'>
                        <p className='pb-2'>Web & App Developer</p>
                        <div>
                            <ProgressBar
                                completed={progress2}
                                className="wrapper"
                                barContainerClassName="container"
                                bgColor='#1d1d1d'
                                labelClassName="label"
                                height='15px'
                            />
                        </div>
                    </div>
                    <div className='w-[80vw] sm:w-[60vw] lg:w-[90%] font-semibold text-md text text-slate-50 py-4'>
                        <p className='pb-2'>Digital Marketing</p>
                        <div>
                            <ProgressBar
                                completed={progress3}
                                className="wrapper"
                                barContainerClassName="container"
                                bgColor='#1d1d1d'
                                labelClassName="label"
                                height='15px'
                            />
                        </div>
                    </div>
                    <div className='w-[80vw] sm:w-[60vw] lg:w-[90%] font-semibold text-md text text-slate-50 py-4'>
                        <p className='pb-2'>Social Media Manegement</p>
                        <div>
                            <ProgressBar
                                completed={progress4}
                                className="wrapper"
                                barContainerClassName="container"
                                bgColor='#1d1d1d'
                                labelClassName="label"
                                height='15px'
                            />
                        </div>
                    </div>
                </div>


                <div style={{
                    backgroundImage: `url(${collab_img})`,
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                    className='w-[90%] lg:w-[50%] h-full relative lg:justify-start laptop-container z-10 rounded-tr-md rounded-br-md lg:rounded-tl-md lg:rounded-bl-md'>
                    <div
                        style={{
                            backgroundImage: 'linear-gradient(295deg, rgba(31,41,55,1) 0%, rgba(17,24,39,0.006127450980392135) 97%)',
                            backgroundColor: 'transparent'
                        }}
                        className='absolute w-full h-full z-20 top-0 left-0'>
                    </div>
                </div>

            </div>
        </Fade>
    )
}

export default Stastics
