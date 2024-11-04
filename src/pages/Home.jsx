// Blur Background
import React from 'react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Faq from '../components/Faq';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './styles.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import vid1 from './video/vid1.mp4';
import vid2 from './video/vid2.mp4';
import vid3 from './video/vid3.mp4';
import vid4 from './video/vid4.mp4';

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-5 md:gap-14 p-0 md:px-3 py-5'>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper1 rounded-sm border-solid border-[1px] border-[#2f5e5f]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full">
            <video className="w-full filter blur-[2px]" muted autoPlay loop>
              <source src={vid4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold">
              <h1>Slide 1</h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full">
            <video className="w-full filter blur-[2px]" muted autoPlay loop>
              <source src={vid2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold">
              <h1>Slide 2</h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full">
            <video className="w-full filter blur-[2px]" muted autoPlay loop>
              <source src={vid3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold">
              <h1>Slide 3</h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full">
            <video className="w-full filter blur-[2px]" muted autoPlay loop>
              <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold">
              <h1>Slide 4</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <About />
      <Testimonials />
      <Gallery />
      <Faq />
    </div>
  );
};

export default Home;

