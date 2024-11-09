// Faq.js
import React from 'react';

const Faq = () => {
  return (
    <div className='w-full mt-10'>
        <section class="bg-gradient-to-tl from-[#addee9] to-[#6bd2d3] text-gray-900 py-10 h-auto w-full rounded-lg">
            <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 class="mb-20 text-4xl font-bold text-center border-b-4 border-[#0a9698] rounded-sm w-fit relative md:left-[50%] md:translate-x-[-50%] left-[-20px]">Frequently Asked Questions</h2>
                <div class="flex flex-col gap-5 -ml-8 md:ml-0">
                <details className='border-2 border-cyan-500 rounded-md py-2 px-4'>
                    <summary class="py-2 outline-none cursor-pointer font-semibold">What is Paryavaran Shakti?</summary>
                    <div class="px-4 pb-4">
                    <p>Paryavaran Shakti is IIIT Kota’s club dedicated to environmental conservation and mental wellness, promoting sustainability, eco-awareness, and mental health through events, workshops, and campus initiatives.</p>
                    </div>
                </details>
                <details className='border-2 border-cyan-500 rounded-md py-2 px-4'>
                    <summary class="py-2 outline-none cursor-pointer font-semibold">How is Paryavaran Shakti different from Team Green?</summary>
                    <div class="px-4 pb-4">
                    <p>Unlike Team Green, which focuses solely on environmental issues, Paryavaran Shakti combines eco-conservation efforts with mental wellness activities, creating a balanced approach to personal and planetary health.</p>
                    </div>
                </details>
                <details className='border-2 border-cyan-500 rounded-md py-2 px-4'>
                    <summary class="py-2 outline-none cursor-pointer font-semibold">What activities does Paryavaran Shakti organize?</summary>
                    <div class="px-4 pb-4">
                    <p>The club organizes tree planting drives, waste reduction campaigns, and eco-awareness events, along with mindfulness workshops and mental health sessions to promote well-being on campus.</p>
                    </div>
                </details>
                <details className='border-2 border-cyan-500 rounded-md py-2 px-4'>
                    <summary class="py-2 outline-none cursor-pointer font-semibold">Who can join Paryavaran Shakti?</summary>
                    <div class="px-4 pb-4">
                    <p>Any student at IIIT Kota interested in sustainability and mental wellness can join. The club encourages all students to actively participate and make a positive impact.</p>
                    </div>
                </details>
                <details className='border-2 border-cyan-500 rounded-md py-2 px-4'>
                    <summary class="py-2 outline-none cursor-pointer font-semibold">How can I join Paryavaran Shakti?</summary>
                    <div class="px-4 pb-4">
                    <p>You can join by contacting the club’s coordinators and member's during campus recruitment drives or reaching out through the club's official social media pages for membership details.</p>
                    </div>
                </details>
                
                </div>
            </div>
        </section>

    </div>
  );
};

export default Faq;
