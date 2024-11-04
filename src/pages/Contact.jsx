import Lottie from 'lottie-react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaComments, FaPaperPlane } from 'react-icons/fa'; // Importing React Icons
import React from 'react';
import contact from '../assets/contact.json';

const Contact = () => {
  return (
    <section className="contact bg-gradient-to-tl from-[#addee9] to-[#6bd2d3] py-8 min-h-[60vh]">
      
      <h2 className="heading text-2xl font-bold text-center pt-8">
         Get in <span className="text-green-600">Touch</span>
      </h2>

      <div className="md:max-w-5xl max-w-2xl mx-auto bg-blue-50 rounded-2xl shadow-md my-8">
        <div className="content flex flex-col md:flex-row items-center justify-between p-10">
          <div className="w-full md:w-1/2 ml-4 mb-8 md:mb-0"> {/* Add mb-8 for spacing on mobile */}
            <Lottie
              animationData={contact}
              loop={true}
              className='max-w-[500px] w-full md:w-[80%]'
            />
          </div>

          <form  className="w-full md:w-1/2 mr-4">
            <div className="form-group flex flex-col justify-center">
              <div className="field mb-4 relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full h-12 pl-12 pr-4 border rounded-md border-gray-400 bg-blue-50"
                />
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
              </div>

              <div className="field mb-4 relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 pl-12 pr-4 border rounded-md border-gray-400 bg-blue-50"
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
              </div>

              <div className="field mb-4 relative">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full h-12 pl-12 pr-4 border rounded-md border-gray-400 bg-blue-50"
                />
                <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
              </div>

              <div className="message mb-4 relative">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full min-h-[130px] max-h-[230px] pl-12 pr-4 border rounded-md border-gray-400 bg-blue-50"
                ></textarea>
                <FaComments className="absolute left-3 top-4 transform -translate-y-1/2 text-gray-600" />
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="relative bg-green-800 flex flex-row gap-3 text-white text-lg py-2 pl-6 pr-8 rounded-md shadow-md hover:bg-green-600 transition"
              >
                Submit <FaPaperPlane className='absolute top-3 right-2' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
