import React from 'react';
import logo from '../assets/logo.png';

const About = () => {
  return (
    <div name = 'about' className="bg-gradient-to-tl from-[#addee9] to-[#6bd2d3] border-solid border-[1px] border-[#0a9698] flex flex-col md:flex-row items-center px-10 py-14 sm:space-x-6 text-lg mt-0 md:mt-10 rounded-lg">
      {/* Content */}
      <div className="cnt flex-1">
        <h2 className="text-2xl font-bold border-b-4 border-[#0a9698] rounded-sm mt-5 w-28 justify-self-center md:justify-self-start text-center mb-8">
          About Us
        </h2>
        <p className="w-full md:w-5/6 text-center md:text-left">
          IIIT Kota’s club dedicated to the environment and
          mental wellness. Named from the Hindi word
          “paryavaran,” meaning environment, and “shakti,”
          meaning power, our name reflects the strength and
          resources nature provides to sustain all life. We
          believe that a healthy environment and a balanced
          mind are deeply connected, and we are committed
          to promoting both.
          <br />
          <br />
          Our club advocates for sustainable practices and
          environmental conservation through projects like
          tree planting, waste reduction, and eco-awareness
          campaigns, encouraging every student to make
          greener choices. We also focus on mental well
          being, offering workshops and activities that
          promote mindfulness, self-care, and a positive
          outlook on life.
          <br />
          <br />
          Join us at Paryavaran Shakti to make a meaningful
          impact—on the planet and within yourself.
          Together, let’s build a resilient and compassionate
          community that values both personal and
          environmental health.
        </p>
      </div>
      <div
        className="rounded-full animate-levitate bg-cover drop-shadow-2xl z-0 my-5 md:my-10 scale-50 w-[200px] h-[200px] mt-8 md:w-[300px] md:h-[300px]"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></div>
    </div>
  );
};

export default About;
