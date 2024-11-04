import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import m1 from '../components/images/team/1.jpg';
import m2 from '../components/images/team/2.jpg';
import m3 from '../components/images/team/3.jpg';

const TeamMember = ({ image, name, role, linkedin, instagram }) => {
  return (
    <div className="group card bg-white relative w-[300px] h-[300px] rounded-[70px] transition-all duration-500 shadow-lg drop-shadow-lg hover:scale-110">
      {/* Image */}
      <div
        className="img absolute left-[50%] translate-x-[-50%] top-[-50px] w-[180px] h-[180px] rounded-[60px] shadow-lg drop-shadow-lg bg-white transition-all duration-500"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {/* Content */}
      <div className="cont w-full h-full absolute flex flex-col items-center justify-end overflow-hidden">
        <div className="details text-center p-[15px] translate-y-[-80%] duration-500">
          <h2 className="font-bold text-2xl text-gray-900">{name}</h2>
          <h1 className="font-semibold text-gray-500 text-md opacity-80">
            {role}
          </h1>
          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4 absolute left-[50%] translate-x-[-50%]">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a66c2] hover:scale-110 transition-transform duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4405F] hover:scale-110 transition-transform duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10">
      <div className="text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10 mb-20">
        Our Team
      </div>
      <div className="flex flex-col md:flex-row gap-24 md:gap-x-10 md:gap-y-24 md:justify-center flex-wrap">
        <TeamMember
          image={m1}
          name="Om"
          role="Club Coordinator"
          linkedin="https://www.linkedin.com/in/johndoe/"
          instagram="https://www.instagram.com/johndoe/"
        />
        <TeamMember
          image={m2}
          name="Ravi Jat"
          role="Tech Lead"
          linkedin="https://www.linkedin.com/in/janesmith/"
          instagram="https://www.instagram.com/janesmith/"
        />
        <TeamMember
          image={m3}
          name="Yash Jangir"
          role="Tech Lead Jr"
          linkedin="https://www.linkedin.com/in/yash-jangir-748214313/"
          instagram="https://www.instagram.com/theyashjangir_04/"
        />
        {/* <TeamMember
          image={m3}
          name="Yash Jangir"
          role="Tech Lead Jr"
          linkedin="https://www.linkedin.com/in/yash-jangir-748214313/"
          instagram="https://www.instagram.com/theyashjangir_04/"
        />
        <TeamMember
          image={m3}
          name="Yash Jangir"
          role="Tech Lead Jr"
          linkedin="https://www.linkedin.com/in/yash-jangir-748214313/"
          instagram="https://www.instagram.com/theyashjangir_04/"
        />
        <TeamMember
          image={m3}
          name="Yash Jangir"
          role="Tech Lead Jr"
          linkedin="https://www.linkedin.com/in/yash-jangir-748214313/"
          instagram="https://www.instagram.com/theyashjangir_04/"
        />
        <TeamMember
          image={m3}
          name="Yash Jangir"
          role="Tech Lead Jr"
          linkedin="https://www.linkedin.com/in/yash-jangir-748214313/"
          instagram="https://www.instagram.com/theyashjangir_04/"
        />
        <TeamMember
          image={m3}
          name="Yash Jangir"
          role="Tech Lead Jr"
          linkedin="https://www.linkedin.com/in/yash-jangir-748214313/"
          instagram="https://www.instagram.com/theyashjangir_04/"
        /> */}
      </div>
    </div>
  );
};

export default Team;
