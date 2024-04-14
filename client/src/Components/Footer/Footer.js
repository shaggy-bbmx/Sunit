import React from 'react'
import logo from '../../assets/images/logo.png'
import './Footer.css'





const Footer = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[90%] py-8 flex flex-col md:flex-row gap-12 justify-center relative pb-16'>
                <div
                    style={{
                        background: 'linear-gradient(to right, transparent 5%, rgb(100 116 139) 50%, transparent 95%)'
                    }}
                    className='w-full absolute top-0 left-0 h-[1px] '>
                </div>
                <div
                    style={{
                        background: 'linear-gradient(to right, transparent 5%, rgb(100 116 139) 50%, transparent 95%)'
                    }}
                    className='w-full absolute bottom-0 left-0 h-[1px] '>
                </div>

                <div className='w-[95%] sm:w-[70%] md:w-[28%] lg:w-[30%] '>
                    <a href='/' className='cursor-pointer h-20 md:h-16 lg:h-20 flex pb-4'>
                        <img className='h-full  o object-left' alt='logo' src={logo}></img>
                    </a>
                    <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-8'>
                        Transforming Ideas into Digital Excellence. Elevate your online presence with our innovative solutions and strategic digital services.
                    </p>
                    <div className='flex gap-1'>
                        <button className='h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 bg-slate-100 rounded-full flex justify-center items-center px-2 py-2 animate-hover'>
                            <svg fill="#000000" width='5rem' viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path></g></svg>
                        </button>
                        <button className='h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 bg-slate-100 rounded-full flex justify-center items-center px-2 py-2 animate-hover'>
                            <svg fill="#000000" width='5rem' viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path></g></svg>
                        </button>
                        <button className='h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 bg-slate-100 rounded-full flex justify-center items-center px-2 py-2 animate-hover'>
                            <svg fill="#000000" width='5rem' viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path></g></svg>
                        </button>
                        <button className='h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 bg-slate-100 rounded-full flex justify-center items-center px-2 py-2 animate-hover'>
                            <svg fill="#000000" width='5rem' viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path></g></svg>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row w-[90%] md:w-[72%] lg:w-[70%] justify-between'>
                    <div className=''>
                        <p className='text-slate-50 font-bold text-2xl md:text-xl lg:text-2xl  leading-normal  pb-4'>
                            Services
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                    </div>
                    <div className=''>
                        <p className='text-slate-50 font-bold text-2xl md:text-xl lg:text-2xl  leading-normal  pb-4'>
                            Company
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                    </div>
                    <div className=''>
                        <p className='text-slate-50 font-bold text-2xl md:text-xl lg:text-2xl  leading-normal  pb-4'>
                            Support
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                        <p className='font-semibold text-sm lg:text-md text text-gray-500 pb-2'>
                            web Development
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center w-[90%] sm:w-full md:w-[95%] lg:w-[85%] py-12'>
                <p className='font-semibold text-sm  text-gray-500 pb-2 text-center sm:text-left'>Copyright© 2023 DigiMax, All rights reserved. Powered by MoxCreative.</p>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                    <p className='font-semibold text-sm text text-gray-500 pb-2'>Term of use</p>
                    <p className='font-semibold text-sm text text-gray-500 pb-2'>Cookie Policy</p>
                    <p className='font-semibold text-sm text text-gray-500 pb-2'>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
