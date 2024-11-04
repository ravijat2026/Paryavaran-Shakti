import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight, FaPhone, FaEnvelope, FaMapMarkedAlt, FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tl from-[#addee9] to-[#6bd2d3] py-8">
      <div className="flex flex-wrap justify-center">
        <div className="flex-1 min-w-[22rem] mx-10 my-6">
          <div className='flex'>
            <img src={logo} className='w-20 h-20' alt='Logo' />
            <h3 className="text-2xl mt-2 ml-3 mb-4 font-bold">Paryavaran <br></br> Shakti</h3>
          </div>
          
          <p className="text-lg text-gray-600 mb-4">
          Looks like the End it's just the Beginning , Join Paryavaran Shakti on any of these platforms.
          </p>
        </div>

        <div className="flex-1 min-w-[22rem] mx-10 my-6">
          <h3 className="text-2xl mb-4 font-bold">Quick Links</h3>
          <Link to="/" className="text-lg text-gray-600 block mb-2 hover:text-green-700 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Home
          </Link>
          <Link to="vision" className="text-lg text-gray-600 block mb-2 hover:text-green-700 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Our Vision
          </Link>
          <Link to="events" className="text-lg text-gray-600 block mb-2 hover:text-green-700 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Events
          </Link>
          <Link to="team" className="text-lg text-gray-600 block mb-2 hover:text-green-700 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Team
          </Link>
          <Link to="blog" className="text-lg text-gray-600 block mb-2 hover:text-green-700 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Blog
          </Link>
          <Link to="contact" className="text-lg text-gray-600 block mb-2 hover:text-green-700 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Contact
          </Link>
        </div>

        <div className="flex-1 min-w-[22rem] mx-10 my-6">
          <h3 className="text-2xl mb-4 font-bold">Contact Info</h3>
          <p className="text-lg text-gray-600 mb-2">
            <FaPhone className="inline size-6 pr-2 text-gray-700" /> Coming Soon
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <FaEnvelope className="inline size-6 pr-2 text-gray-700" /> ravijat2026@gmail.com
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <FaMapMarkedAlt className="inline size-6 pr-2 text-gray-700" /> Kota, India-325003
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-[#02094b] hover:bg-transparent hover:text-green-600 transition-all rounded-full p-4">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-[#02094b] hover:bg-transparent hover:text-green-600 transition-all rounded-full p-4">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-[#02094b] hover:bg-transparent hover:text-green-600 transition-all rounded-full p-4">
              <FaEnvelope />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-[#02094b] hover:bg-transparent hover:text-green-600 transition-all rounded-full p-4">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-center text-lg font-semibold mt-4 pt-4 border-t-2 border-[#119cff33]">
        @2024 All Rights Reserved. <FaHeart className="inline text-red-600 animate-pulse" /> by <a href="#" className="text-green-800">Paryavaran Shakti</a>
      </h1>
    </footer>
  );
};

export default Footer;
