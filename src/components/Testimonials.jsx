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


        <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
            <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

            <div>
              <p className='text-[15px] text-left'>"The work that Paryavaran Shakti does to raise awareness about environmental issues and mental well-being is incredible. Their efforts inspire change and push for a more sustainable future. I’ve gained so much knowledge and confidence, and I look forward to more opportunities to contribute."</p>
            </div>

            <div className='text-right mt-4'>
              <h2>Ravi Jat</h2>
              <h4 className='text-gray-500'>Team Member</h4>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
            <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

            <div>
              <p className='text-[15px] text-left'>"Joining Paryavaran Shakti has been an enriching journey. I’ve learned so much about mental health and environmental responsibility. The projects and campaigns organized by the team are impactful, and I’m proud to contribute to this cause that creates positive change in society."</p>
            </div>

            <div className='text-right mt-4'>
              <h2>Nitesh Bagdiya</h2>
              <h4 className='text-gray-500'>Team Member</h4>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
            <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

            <div>
              <p className='text-[15px] text-left'>"Paryavaran Shakti has been a transformative experience! It’s inspiring to be part of a team dedicated to making a real impact on mental well-being and environmental sustainability. I’m proud and grateful to contribute to such a purposeful community."</p>
            </div>

            <div className='text-right mt-4'>
              <h2>Yash Jangir</h2>
              <h4 className='text-gray-500'>Team Member</h4>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
            <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

            <div>
              <p className='text-[15px] text-left'>"Being part of Paryavaran Shakti has been an eye-opening experience. The initiatives focus on the environment and mental health, addressing real challenges we face. The team is passionate, and the events are always thought-provoking. I'm grateful to be part of this amazing movement.</p>
            </div>

            <div className='text-right mt-4'>
              <h2>Om</h2>
              <h4 className='text-gray-500'>Club Coordinator</h4>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
            <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

            <div>
              <p className='text-[15px] text-left'>"Paryavaran Shakti has truly inspired me to make sustainable changes in my lifestyle. The events and discussions provide valuable insights on mental well-being and environmental conservation. It's a great platform to learn, engage, and contribute to a better future for all."</p>
            </div>

            <div className='text-right mt-4'>
              <h2>Manas Singh</h2>
              <h4 className='text-gray-500'>Team Member</h4>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className="bg- flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">

          <div className='flex justify-between flex-col px-2 md:px-6'>
            <div> <h1 className='text-cyan-800 text-left font-semibold text-[40px]'> “ </h1></div>

            <div>
              <p className='text-[15px] text-left'>"Paryavaran Shakti stands as a beacon of change in both mental well-being and environmental awareness. The events are engaging, informative, and empowering. It’s not just about discussions but actual action towards making the world a better place. I’m glad to be part of it."</p>
            </div>

            <div className='text-right mt-4'>
              <h2>Nischay</h2>
              <h4 className='text-gray-500'>Team Member</h4>
            </div>
          </div>

        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Testimonials;