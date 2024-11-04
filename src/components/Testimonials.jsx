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
        <SwiperSlide className="flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg ">Person 1</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg">Person 2</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg">Person 3</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg">Person 4</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full bg-gray-100 shadow-md p-6 rounded-lg">Person 5</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
