import React from 'react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Faq from '../components/Faq';
import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '../components/styles.css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import vid1 from './video/1.mp4';
import vid2 from './video/2.mp4';
import vid3 from './video/3.mp4';
import vid4 from './video/4.mp4';
import vid5 from './video/5.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5 md:gap-14 p-0 md:px-3 py-3">
        
        {/* Video slider with overlay text */}
        <div className="relative w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper1 rounded-sm border-solid border-[1px] border-[#2f5e5f] z-10"
          >
            {/* Video slides */}

            <SwiperSlide key={1}>
                <div className="relative w-full">
                  <video className="w-full filter blur-[2px]" muted autoPlay loop>
                    <source src={vid4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </SwiperSlide>

            {[ vid2, vid3, vid1, vid5].map((video, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full">
                  <video className="w-full filter blur-[2px] brightness-50" muted autoPlay loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay text */}
          <div className="absolute inset-0 text-center flex flex-col items-center justify-center z-20 text-white">
            <h1 className='text-4xl md:text-7xl font-bold'>Welcome to</h1>
            <h3 className='text-2xl mt-3 md:mt-6 md:text-4xl font-semibold'>Paryavaran Shakti</h3>
            
            <Link to = '/vision'>
              <button className="px-6 py-2 mt-3 md:mt-12 bg-green-500 hover:bg-green-600 text-white rounded-lg">
              Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Sections */}
        <About />
        <Testimonials />
        <Gallery />
        <Faq />
      </div>
    </>
  );
};

export default Home;
