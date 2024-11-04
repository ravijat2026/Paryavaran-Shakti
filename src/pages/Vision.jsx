import React from 'react'
import v1 from '../components/images/vis1.jpg'
import v2 from '../components/images/vis2.jpg'
import v3 from '../components/images/vis3.jpg'
import v4 from '../components/images/vis4.jpg'
const Vision = () => {
  return (
    <div className='min-h-screen flex justify-center flex-col items-center'>
      <div className='text-2xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10'>Our Vision</div>
      <div className="top bg-white p-10 mx-[9vw] rounded-md font-medium text-lg">
      College Life is a new Chapter in everyone's life,New Aspirations,New friends,New Hope , New Environment everything is changed. Besides this,Comes new challenges like Academic Stress,Loneliness,Home sickness,False Friends Etc. Leading to Deterioration of Mental health and unstable mind.Our Club "Paryavaran Shakti" is unique Initiative to Keep students of our college motivated and stress free.At Paryavaran Shakti, we believe that mental health is just as important as physical health, especially for students who face unique challenges during their academic journey. Our vision is to create a welcoming and supportive community where every student feels safe to talk about their feelings and struggles.
      </div>
      <div className='flex flex-col md:flex-row md:justify-center gap-2 md:gap-10 flex-wrap items-center'>
        {/* Card 1  */}
        <div class="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[320px] md:w-[384px] h-[500px]">
          <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-lg">
            <img src={v1} alt="card-image" className='h-[250px]' />
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold text-center">
            Empowering Students
            </h6>
            <p class="text-slate-600 leading-normal font-light">
            We want to empower students by providing them with the tools and resources they need to take care of their mental well-being. This includes organizing workshops that teach coping strategies, mindfulness techniques, and stress management skills. We also plan to create peer support groups where students can share their experiences and support one another in a friendly environment.
            </p>
          </div>
        </div>
        {/* Card 2  */}
        <div class="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[320px] md:w-[384px] h-[500px]">
          <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={v2} alt="card-image" className='h-[250px]'/>
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold text-center">
            Breaking the Stigma
            </h6>
            <p class="text-slate-600 leading-normal font-light">
            We want to empower students by providing them with the tools and resources they need to take care of their mental well-being. This includes organizing workshops that teach coping strategies, mindfulness techniques, and stress management skills. We also plan to create peer support groups where students can share their experiences and support one another in a friendly environment.
            </p>
          </div>
        </div>
        {/* Card 3  */}
        <div class="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[320px] md:w-[384px] h-[500px]">
          <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={v3} alt="card-image" className='h-[250px]' />
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold text-center">
            Building a Community
            </h6>
            <p class="text-slate-600 leading-normal font-light">
            We envision Paryavaran Shakti as a vibrant community where everyone looks out for each other. Through fun activities, awareness campaigns, and collaborative events, we aim to strengthen the bonds between students. Together, we can create an atmosphere where mental health is prioritized, and everyone feels valuable and Unique.
            </p>
          </div>
        </div>
        {/* Card 4  */}
        <div class="relative flex flex-col mb-6 bg-white shadow-sm border mt-6 md:mt-0 border-slate-200 rounded-lg w-[320px] md:w-[384px] h-[500px]">
          <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={v4} alt="card-image" className='h-[250px]' />
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold text-center">
            A Brighter Future
            </h6>
            <p class="text-slate-600 leading-normal font-light">
            Ultimately, our vision is to help students thrive both academically and personally. By focusing on mental health improvement, we believe we can contribute to a brighter future for all students. At Paryavaran Shakti, we are committed to being a source of support, inspiration, and hope for everyone in our community. Join us in this important journey towards better mental health and a Good sustainable environment for everyone in IIIT Kota
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision