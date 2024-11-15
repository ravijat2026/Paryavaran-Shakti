import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import img1 from '../components/images/img1.webp';
import img2 from '../components/images/img2.webp';
import img3 from '../components/images/img3.webp';
import img4 from '../components/images/img4.webp';
import img5 from '../components/images/img5.jpg';
import img6 from '../components/images/img6.webp';
import img7 from '../components/images/img7.webp';
import img8 from '../components/images/img8.webp';
import img9 from '../components/images/img9.webp';
Modal.setAppElement('#root');

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8,img9];

const GallerySlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const handlePrev = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  return (
    <div className="flex flex-col items-center w-full h-[400px] bg-gradient-to-tl from-[#addee9] to-[#6bd2d3] p-10 rounded-xl mt-10">
      <div className="flex flex-row w-full justify-center">
        <div className="text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm text-gray-800 mb-10">
          Gallery
        </div>

        {/* Custom Navigation Buttons Above Slider */}
        <div className="hidden md:flex gap-4 mb-4 ml-[50px]">
          <button
            onClick={handlePrev}
            className="mb-5 p-5 bg-gray-800 text-white border-2 border-gray-800 rounded-full h-10 w-10 flex items-center justify-center hover:bg-transparent hover:border-2 hover:border-white transition-all duration-200"
          >
            <span className="text-xl">&#8592;</span> {/* Left Arrow */}
          </button>
          <button
            onClick={handleNext}
            className="mb-5 p-5 bg-gray-800 text-white border-2 border-gray-800 rounded-full h-10 w-10 flex items-center justify-center hover:bg-transparent hover:border-2 hover:border-white transition-all duration-200"
          >
            <span className="text-xl">&#8594;</span> {/* Right Arrow */}
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full h-48"
        breakpoints={{
          350: {
            slidesPerView: 2,
          },
          640: { // Mobile view
            slidesPerView: 3,
          },
          768: { // Medium screens
            slidesPerView: 6,
          },
        }}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-full rounded-md transform transition-transform duration-200 hover:scale-105"
          >
            <div
              className="w-full h-full bg-cover bg-center cursor-pointer rounded-lg shadow-md"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => openModal(image)}
            ></div>
          </SwiperSlide>

        ))}
      </Swiper>

      {/* Modal for full-screen image */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-90 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
      >
        <div className="relative w-[90%] max-w-4xl">
          <img
            src={currentImage}
            alt="Full View"
            className="w-full h-auto max-h-screen object-contain rounded-lg"
          />
          <button
            onClick={closeModal}
            className="w-12 h-12 absolute top-4 right-4 border-2 border-green-600 text-green-600 bg-white rounded-full text-3xl font-bold hover:bg-gray-300 cursor-pointer"
          >
            &times;
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GallerySlider;

