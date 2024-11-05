import React from 'react'
import '../components/timeline.css';
import cirlce from '../components/images/circle.png';
const Events = () => {
  return (
    <div className='timeline bg-transparent relative max-w-[1200px] mx-auto my-[50px] rounded-lg'>

      <div className="container w-1/2 relative py-[10px] px-[50px] left-0 md:left-1/2 ">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] left-[-20px]"></div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'>Movie Night</h2>
          <small className='font-medium text-lg text-gray-500'>15 Oct 2024</small>
          <p className='text-md'>Organized by the Paryavaran Shakti Club, this movie night screened Zindagi Na Milegi Dobara, offering students relaxation and wellness after mid-term exams and fostering community bonding.</p>
          <span className='rightc-arrow'></span>
        </div>
      </div>

      <div className="container w-1/2 relative py-[10px] px-[50px] left-0">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] right-[-20px] ">
        </div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'>Leaf Art & Stone Art
          </h2>
          <small className='font-medium text-lg text-gray-500'>7 Sept 2024</small>
          <p className='text-md'>This creative competition, hosted by the Paryavaran Shakti Club, promoted eco-friendly practices through artistic expressions using leaves and stones. It engaged participants in nature-inspired artwork during Ganesh Chaturthi.

</p>
          <span className='leftc-arrow'></span>
        </div>
      </div>

      <div className="container w-1/2 relative py-[10px] px-[50px]  left-0 md:left-1/2">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] left-[-20px]"></div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'>Plantation Activity Date</h2>
          <small className='font-medium text-lg text-gray-500'>5 sept 2023</small>
          <p className='text-md'>Paryavaran Shakti's first tree plantation event at IIIT Kota’s permanent campus, emphasizing the importance of greening spaces for environmental sustainability.</p>
          <span className='rightc-arrow'></span>
        </div>
      </div>

      <div className="container w-1/2 relative py-[10px] px-[50px] left-0">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] right-[-20px]"></div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'>Building A Better World Date</h2>
          <small className='font-medium text-lg text-gray-500'>22 Apr 2023</small>
          <p className='text-md'> An online seminar featuring Mr. Shaktiraj Daudra, a distinguished alumnus of IIIT Kota, who discussed the creativity of nature and its significance in human life. 
          </p>
          <span className='leftc-arrow'></span>
        </div>
      </div>

      <div className="container w-1/2 relative py-[10px] px-[50px] left-0">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] right-[-20px]"></div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'> Speaker Session On Mind Pollution</h2>
          <small className='font-medium text-lg text-gray-500'>27 March 2022</small>
          <p className='text-md'> A motivational seminar in NITI Sabhagar focused on mind control, self-confidence, and ethics, led by Mr. Chakravarti Das. 
          </p>
          <span className='leftc-arrow'></span>
        </div>
      </div>

    </div>
  )
}

export default Events