import React from 'react'
import '../components/timeline.css';
import cirlce from '../components/images/circle.png';
const Events = () => {
  return (
    <div className='timeline bg-transparent relative max-w-[1200px] mx-auto my-[50px] rounded-lg'>

      <div className="container w-1/2 relative py-[10px] px-[50px] left-0">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] right-[-20px] ">
        </div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'>Event 1</h2>
          <small className='font-medium text-lg text-gray-500'>DATE</small>
          <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta accusamus totam laudantium sapiente! Enim aliquid consequuntur est tempora maiores vitae, laboriosam iste non sequi.</p>
          <span className='leftc-arrow'></span>
        </div>
      </div>

      <div className="container w-1/2 relative py-[10px] px-[50px] left-0 md:left-1/2 ">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] left-[-20px]"></div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'>Event 2</h2>
          <small className='font-medium text-lg text-gray-500'>DATE</small>
          <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta accusamus totam laudantium sapiente! Enim aliquid consequuntur est tempora maiores vitae, laboriosam iste non sequi.</p>
          <span className='rightc-arrow'></span>
        </div>
      </div>

      <div className="container w-1/2 relative py-[10px] px-[50px] left-0">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] right-[-20px]"></div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'>Event 3</h2>
          <small className='font-medium text-lg text-gray-500'>DATE</small>
          <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta accusamus totam laudantium sapiente! Enim aliquid consequuntur est tempora maiores vitae, laboriosam iste non sequi.</p>
          <span className='leftc-arrow'></span>
        </div>
      </div>

      <div className="container w-1/2 relative py-[10px] px-[50px]  left-0 md:left-1/2">
        <div className="imgg h-[40px] w-[40px] rounded-full bg-white absolute top-[32px] left-[-20px]"></div>
        <div className="text-box bg-white relative px-[30px] py-[20px] rounded-[10px]">
          <h2 className='font-bold text-2xl'>Event 4</h2>
          <small className='font-medium text-lg text-gray-500'>DATE</small>
          <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta accusamus totam laudantium sapiente! Enim aliquid consequuntur est tempora maiores vitae, laboriosam iste non sequi.</p>
          <span className='rightc-arrow'></span>
        </div>
      </div>

    </div>
  )
}

export default Events