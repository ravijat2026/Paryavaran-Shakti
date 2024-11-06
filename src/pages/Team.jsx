import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import cc from '../components/images/team/om.jpg';
import tt1 from '../components/images/team/ravi.jpg';
import tt2 from '../components/images/team/yash.jpg';
import tt3 from '../components/images/team/dhiraj.jpg';
import ct1 from '../components/images/team/naman.jpg';
import ct2 from '../components/images/team/manas.jpg';
import dt1 from '../components/images/team/harsh.jpg';
import dt2 from '../components/images/team/manan.jpg';
import dt3 from '../components/images/team/raunak.jpg';
import dt4 from '../components/images/team/jigyasa.jpg';
import dt5 from '../components/images/team/mukul.jpg';
import dt6 from '../components/images/team/drishti.jpg';
import dt7 from '../components/images/team/rohit.jpg';
import dt8 from '../components/images/team/arti.jpg';
import dt9 from '../components/images/team/anshika.jpg';
import dt10 from '../components/images/team/nitesh.jpg';
import dt11 from '../components/images/team/nischay.jpg';
import dt12 from '../components/images/team/jay.jpg';
import smt1 from '../components/images/team/manjot.jpg';

const TeamMember = ({ image, name, role, linkedin, instagram }) => {
  return (
    <div className="group card bg-white relative w-[300px] h-[300px] rounded-[70px] transition-all duration-500 shadow-lg drop-shadow-lg hover:scale-110">
      <div
        className="img absolute left-[50%] translate-x-[-50%] top-[-50px] w-[180px] h-[180px] rounded-[60px] shadow-lg drop-shadow-lg bg-white transition-all duration-500"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="cont w-full h-full absolute flex flex-col items-center justify-end overflow-hidden">
        <div className="details text-center p-[15px] translate-y-[-80%] duration-500">
          <h2 className="font-bold text-2xl text-gray-900">{name}</h2>
          <h1 className="font-semibold text-gray-500 text-md opacity-80">
            {role}
          </h1>
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
    <div className="min-h-screen flex flex-col items-center gap-10 mb-8">
      {/* Our Team Section */}
      <div className="text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10">
        Our Team
      </div>
      <TeamMember
        image={cc}
        name="Om"
        role="Club Coordinator"
        linkedin="https://www.linkedin.com/in/om-a58a062a6/"
        instagram="https://www.instagram.com/13_om_07/profilecard/?igsh=aDFldDFlM3hnaHk="
      />

      {/* Tech Team Section */}
      <div className="text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10">
        Tech Team
      </div>
      <div className="flex flex-col md:flex-row gap-24 md:gap-x-10 md:gap-y-24 md:justify-center flex-wrap">
        <TeamMember
          image={tt1}
          name="Ravi Jat"
          role="Member"
          linkedin="https://www.linkedin.com/in/ravi-jat-420287245/"
          instagram="https://www.instagram.com/ravi_jaat_2050/"
        />
        <TeamMember
          image={tt2}
          name="Yash Jangir"
          role="Member"
          linkedin="https://www.linkedin.com/in/yash-jangir-748214313/"
          instagram="https://www.instagram.com/theyashjangir_04/"
        />
        <TeamMember
          image={tt3}
          name="Dhiraj Kushwaha"
          role="Member"
          linkedin="https://www.linkedin.com/in/dhirajkushwaha/"
          instagram="https://www.instagram.com/thedhirajkushwaha/"
        />
      </div>

      {/* Content Team Section */}
      <div className="text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10">
        Content Team
      </div>
      <div className="flex flex-col md:flex-row gap-24 md:gap-x-10 md:gap-y-24 md:justify-center flex-wrap">
        <TeamMember
          image={ct2}
          name="Manas Singh"
          role="Member"
          linkedin="https://www.linkedin.com/in/manassingh17 "
          instagram="https://www.instagram.com/mn_s_17/profilecard/?igsh=eXlneG9udzR3OWx5"
        />
        <TeamMember
          image={ct1}
          name="Naman Jain"
          role="Member"
          linkedin="www.linkedin.com/in/naman-jain-b80625289/"
          instagram="https://www.instagram.com/"
        />
        <TeamMember
          image={dt7}
          name="Rohit Khadoria"
          role="Member"
          linkedin="https://www.linkedin.com/"
          instagram="https://www.instagram.com/Rohit_khadoria"
        />
      </div>

      <div className="text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10">
        Design Team
      </div>
      <div className="flex flex-col md:flex-row gap-24 md:gap-x-10 md:gap-y-24 md:justify-center flex-wrap">
        <TeamMember
          image={dt1}
          name="Harsh Mishra"
          role="Member"
          linkedin="https://www.linkedin.com/in/harsh-mishra-hm24"
          instagram="https://www.instagram.com/its_harsh__24"
        />
        <TeamMember
          image={dt10}
          name="Nitesh Bagdiya"
          role="Member"
          linkedin="https://www.linkedin.com/in/nitesh-bagdiya-b77388257/"
          instagram="https://www.instagram.com/bagdiyanitesh/"
        />
        <TeamMember
          image={dt11}
          name="Nischay"
          role="Member"
          linkedin="https://www.linkedin.com/in/"
          instagram="https://www.instagram.com/nischay_2004/profilecard/?igsh=bGo1MnBrY3c5cWlh"
        />
        <TeamMember
          image={dt2}
          name="Manan Gupta"
          role="Member"
          linkedin="https://in.linkedin.com/in/"
          instagram="https://www.instagram.com/manan0gupta"
        />
        <TeamMember
          image={dt3}
          name="Raunak Agarwal"
          role="Member"
          linkedin="https://www.linkedin.com/in/raunak-agarwal-397467257/"
          instagram="https://www.instagram.com/agarwal.raunakk/"
        />
        <TeamMember
          image={dt4}
          name="Jigyasa"
          role="Member"
          linkedin="https://www.linkedin.com/in/jigyasa-arora-345b51292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          instagram="https://www.instagram.com/_jigyasa5072/profilecard/?igsh=aXM1ZzdoN3VubHR1"
        />
        <TeamMember
          image={dt5}
          name="Mukul"
          role="Member"
          linkedin="https://in.linkedin.com/in/mukul-katewa-33b74b216"
          instagram="https://www.instagram.com/mukul_katewa"
        />
        <TeamMember
          image={tt2}
          name="Yash Jangir"
          role="Member"
          linkedin="https://www.linkedin.com/in/yash-jangir-748214313/"
          instagram="https://www.instagram.com/theyashjangir_04/"
        />
        <TeamMember
          image={dt6}
          name="Drishti Dhandel"
          role="Member"
          linkedin="https://www.linkedin.com/in/drishti-dhandel-239788323 "
          instagram="https://www.instagram.com/drishti__23__/profilecard"
        />
        <TeamMember
          image={dt7}
          name="Rohit Khadoria"
          role="Member"
          linkedin="https://www.linkedin.com/"
          instagram="https://www.instagram.com/Rohit_khadoria"
        />
        <TeamMember
          image={dt8}
          name="Arti Rai"
          role="Member"
          linkedin="https://www.linkedin.com/in/arti-rai-0828a7324"
          instagram="https://www.instagram.com/arti_rai390/"
        />
        <TeamMember
          image={dt9}
          name="Anshika Sahu"
          role="Member"
          linkedin="https://www.linkedin.com/in/anshika-sahu-26a394329/"
          instagram="https://www.instagram.com/_anshika._.sahu/"
        />
        <TeamMember
          image={tt3}
          name="Dhiraj Kushwaha"
          role="Member"
          linkedin="https://www.linkedin.com/in/dhirajkushwaha/"
          instagram="https://www.instagram.com/thedhirajkushwaha/"
        />
      </div>

      {/* Video Editing Team Section */}
      <div className="text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10">
        Video Editing Team
      </div>
      <div className="flex flex-col md:flex-row gap-24 md:gap-x-10 md:gap-y-24 md:justify-center flex-wrap">
        <TeamMember
          image={dt12}
          name="Jay Joshi"
          role="Member"
          linkedin="https://in.linkedin.com/in/jay-joshi-75b75124b"
          instagram="https://www.instagram.com/jayy.03/"
        />
        <TeamMember
          image={tt3}
          name="Dhiraj Kushwaha"
          role="Member"
          linkedin="https://www.linkedin.com/in/dhirajkushwaha/"
          instagram="https://www.instagram.com/thedhirajkushwaha/"
        />
      </div>

      {/* Socia Media Team Section */}
      <div className="text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10">
        Social Media Team
      </div>
      <div className="flex flex-col md:flex-row gap-24 md:gap-x-10 md:gap-y-24 md:justify-center flex-wrap">
        <TeamMember
          image={smt1}
          name="Manjot Singh Sodhi"
          role="Member"
          linkedin="https://www.linkedin.com/in/"
          instagram="https://www.instagram.com/nischay_2004/profilecard/?igsh=bGo1MnBrY3c5cWlh"
        />
      </div>
    </div>
  );
};

export default Team;