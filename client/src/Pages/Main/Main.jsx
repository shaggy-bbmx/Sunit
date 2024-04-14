import React from 'react'
import { lazy } from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Intro from '../../Components/Intro/Intro.jsx'
import Usecase from '../../Components/Usecase/Usecase.jsx'
import Playcard from '../../Components/Playcard/Playcard.jsx'
import Customers from '../../Components/Customers/Customers.jsx'
import Who from '../../Components/Who/Who.jsx'
import Numbers from '../../Components/Numbers/Numbers.js'
import Catalog from '../../Components/Catalog/Catalog.js'
import Feautres from '../../Components/Feautres/Feautres.js'
import Testimonials from '../../Components/Testimonials/Testimonials.js'
import Footer from '../../Components/Footer/Footer.js'
const Stastics = lazy(() => import('../../Components/Stastics/Stastics.js'))

// import Stastics from '../../Components/Stastics/Stastics.js'



const Main = () => {
  return (
    <div className='bg-black overflow-hidden'>
      <Navbar />
      <Intro />
      <Usecase />
      <Playcard />
      <Customers />
      <Who />
      <Numbers />
      <Catalog />
      <Stastics />
      <Feautres />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Main
