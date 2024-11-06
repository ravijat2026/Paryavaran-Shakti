import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles if necessary

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  return (
    <>
      <div className='text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10'>
        Testimonials
      </div>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-64"
        breakpoints={{
          640: { // Mobile view
            slidesPerView: 1,
          },
          768: { // Medium screens
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="flex items-center justify-center h-full shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
              <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

              <div>
                 <p className='text-[15px] text-left'>"Paryavaran Shakti is a truly inspiring initiative, blending eco-friendly practices with student mental wellness support. The dedication of these young leaders toward sustainable development and community well-being is remarkable. I am proud to endorse their impactful mission and look forward to their continued success."</p>
              </div>

              <div className='text-right mt-4'>
                <h2>Dr. Aditi Sharma</h2>
                <h4 className='text-gray-500'>Senior Faculty Advisor</h4>
              </div>
          </div>

          </SwiperSlide>

          <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
              <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

              <div>
                 <p className='text-[15px] text-left'>"Paryavaran Shakti is a truly inspiring initiative, blending eco-friendly practices with student mental wellness support. The dedication of these young leaders toward sustainable development and community well-being is remarkable. I am proud to endorse their impactful mission and look forward to their continued success."</p>
              </div>

              <div className='text-right mt-4'>
                <h2>Dr. Aditi Sharma</h2>
                <h4 className='text-gray-500'>Senior Faculty Advisor</h4>
              </div>
          </div>

          </SwiperSlide>

          <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
              <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

              <div>
                 <p className='text-[15px] text-left'>"Paryavaran Shakti is a truly inspiring initiative, blending eco-friendly practices with student mental wellness support. The dedication of these young leaders toward sustainable development and community well-being is remarkable. I am proud to endorse their impactful mission and look forward to their continued success."</p>
              </div>

              <div className='text-right mt-4'>
                <h2>Dr. Aditi Sharma</h2>
                <h4 className='text-gray-500'>Senior Faculty Advisor</h4>
              </div>
          </div>

          </SwiperSlide>

          <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
              <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

              <div>
                 <p className='text-[15px] text-left'>"Paryavaran Shakti is a truly inspiring initiative, blending eco-friendly practices with student mental wellness support. The dedication of these young leaders toward sustainable development and community well-being is remarkable. I am proud to endorse their impactful mission and look forward to their continued success."</p>
              </div>

              <div className='text-right mt-4'>
                <h2>Dr. Aditi Sharma</h2>
                <h4 className='text-gray-500'>Senior Faculty Advisor</h4>
              </div>
          </div>

          </SwiperSlide>

          <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
              <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

              <div>
                 <p className='text-[15px] text-left'>"Paryavaran Shakti is a truly inspiring initiative, blending eco-friendly practices with student mental wellness support. The dedication of these young leaders toward sustainable development and community well-being is remarkable. I am proud to endorse their impactful mission and look forward to their continued success."</p>
              </div>

              <div className='text-right mt-4'>
                <h2>Dr. Aditi Sharma</h2>
                <h4 className='text-gray-500'>Senior Faculty Advisor</h4>
              </div>
          </div>

          </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Testimonials;