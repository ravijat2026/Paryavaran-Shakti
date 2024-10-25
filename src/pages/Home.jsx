import React from 'react'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div className='h-96 flex flex-col gap-10 justify-center items-center'>
        <div>Home</div>
        <div>Welcome to Paryavaran Shakti Image Slider</div>

        <About/>
        <Testimonials/>
        <Gallery/>

    </div>
  )
}

export default Home