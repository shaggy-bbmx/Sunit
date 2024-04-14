import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'
import { Turn as Hamburger } from 'hamburger-react'



const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [dropOne, setDropOne] = useState(false)



    return (
        <div className='w-full flex flex-col relative'>
            <div className='bg-transparent backdrop-blur-md w-full h-[12vh] px-4 md:px-12 xl:px-32 py-4 flex  justify-between  items-center  bg-black sticky z-50 top-0'>

                <a href='/' className='cursor-pointer h-full flex'>
                    <img className='h-full object-left' alt='logo' src={logo}></img>
                </a>
                <div className='hidden lg:visible lg:flex  lg:justify-around gap-8 xl:gap-12  items-center'>
                    <a href='/' className='cursor-pointer font-semibold text-slate-50 text-lg hover:text-slate-500'>About us</a>
                    <a
                        onMouseEnter={() => setDropOne(true)}
                        onMouseLeave={() => setDropOne(false)}
                        href='/' className='cursor-pointer font-semibold text-slate-50 text-lg flex items-center gap-2 hover:text-slate-500 relative'>
                        Services
                        <svg width="15px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fffafa" stroke="#fffafa" stroke-width="80.896"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#e7dede"></path></g></svg>
                        {
                            dropOne &&
                            <div className='absolute w-[15vw] p-4 h-[15vh] rounded-lg bg-[#101010] top-16 left-4 flex flex-col justify-between border-solid border-[1px] border-[#303030] shadow-lg  shadow-slate-600'>

                                <a className='cursor-pointer font-semibold text-slate-50 text-lg  hover:text-slate-500  pb-2'>Pricing Plan</a>

                                <a className='cursor-pointer font-semibold text-slate-50 text-lg  hover:text-slate-500  '>Detail Services</a>
                            </div>
                        }
                    </a>
                    <a href='/' className='cursor-pointer font-semibold text-slate-50 text-lg hover:text-slate-500'>Portfolio</a>
                    <a href='/' className='cursor-pointer font-semibold text-slate-50 text-lg hover:text-slate-500'>Pricing</a>
                    <a href='/' className='cursor-pointer font-semibold text-slate-50 text-lg hover:text-slate-500'>Contact us</a>
                    <button
                        style={{
                            backgroundColor: '#181818',
                            backgroundImage: 'linear-gradient(155deg, #1d1d1d 24%, #111 78%)'
                        }}
                        className='py-2 px-8  border-slate-400   border-[1px]   rounded-3xl text-slate-50  font-semibold  text-md scale-100 hover:scale-110 transition-all'>
                        GET STARTED
                    </button>
                </div>
                <div style={{ zIndex: '70' }} className='lg:hidden flex justify-center items-center'>
                    <button onClick={() => setIsNavOpen(!isNavOpen)}>
                        <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} size={40} direction='right' duration={0.3} color='rgb(212 212 212)' easing="ease-in" rounded />
                    </button>
                </div>
                <div id="sideBar"
                    style={{
                        zIndex: '60',
                    }}
                    className={`fixed top-0 right-0   bg-black   pt-20 flex justify-center  h-[100vh]  overflow-x-hidden duration-500  ${isNavOpen ? 'w-[100vw]' : 'w-0'} `}>
                    <div className={`flex flex-col  items-center py-20 space-y-4 w-[200px] ${isNavOpen ? '' : 'hidden'}`}>
                        <div className='py-4 flex justify-center bg-gray-900 rounded-xl text-neutral-300 text-xl font-semibold w-full'>About Us</div>
                        <div className='py-4 flex justify-center bg-gray-900 rounded-xl text-neutral-300 text-xl font-semibold w-full'>Services</div>
                    </div>
                </div>
            </div >
            <div
                style={{
                    background: 'linear-gradient(to right, transparent 0%, #1F2937 50%, transparent 94%)'
                }}
                className='w-full absolute bottom-0  h-[1px] '>
            </div>
        </div >
    )
}

export default Navbar