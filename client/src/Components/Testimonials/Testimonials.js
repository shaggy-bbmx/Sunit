import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Testimonials = () => {

    const [size, setSize] = useState(window.innerWidth < 700 ? 1 : window.innerWidth < 1024 ? 2 : 3)

    const sliderRef = useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        intialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    const items = [

        {
            speech: '"Jadoo was great with the entire process from planning to updates during the trip. We had 11 people and everything was perfectly executed. We appreciate all of her hard work. It was truly the trip of a lifetime. Thank you!"',
            name: 'Gina',
            place: 'Owerri, Nigeria'
        },
        {
            speech: '"You did a fabulous job. There were no hitches. Thank you again for all your work planning this trip."',
            name: 'Mike taylor',
            place: 'Lahore, Pakistan'
        },
        {
            speech: '"Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance before we left on what to bring and such, that was very helpful!"',
            name: 'Emma',
            place: 'Vancouver, Canada'
        },
        {
            speech: '"Thank you for your recommendation and putting the trip together. The resort was absolutely beautiful. The infinity pools, the palm trees in the main pool, the infinity pool in out preferred area overlooking the gulf and the golf course were exceptional...."',
            name: 'Loveth',
            place: 'Lagos, Nigeria'
        },
    ]


    return (
        <div className=' w-full flex flex-col  justify-center items-start  sm:items-center pb-[20vh]'>
            <p className=' text-gray-500  font-semibold  text-sm pb-4 pl-4 sm:pl-0'>TESTIMONIALS</p>
            <p className='text-slate-50 font-bold text-4xl  pb-4 pl-4 sm:pl-0'>
                Client Feedback & Reviews
            </p>
            <div className='w-[85%]'>
                <Slider ref={(slider) => sliderRef.current = slider} {...settings} >
                    {items.map((item, index) =>
                        <div className="px-4 py-4" key={index}>
                            <div
                                style={{
                                    backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                                }}
                                className="h-[48vh] sm:h-[40vh] md:h-[50vh] w-full flex flex-col px-6 md:px-4 py-6 lg:p-6 rounded-md hover:cursor-pointer border-[1px] border-solid border-slate-800 overflow-hidden">
                                <div className="w-[98%] sm:w-[80%] flex flex-col font-semibold text-md text text-gray-500 pb-8">{item.speech}</div>
                                <div className="flex w-full h-[30%] lg:h-[40%] mt-4 items-center">
                                    <div className="  text-slate-50 font-semibold text-md  leading-normal  pb-4">
                                        <div className="text-lg tracking-[0.5px] font-semibold">{item.name}</div>
                                        <div className="pt-2">{item.place}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>

        </div>
    )
}

export default Testimonials
