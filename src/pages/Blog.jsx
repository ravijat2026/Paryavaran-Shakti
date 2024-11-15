import React, { useState, useEffect } from 'react';
import blg1 from '../components/images/blogs/blg1.jpg';
import blg2 from '../components/images/blogs/blg2.jpg';
import blg3 from '../components/images/blogs/blg3.jpg';
import blg4 from '../components/images/blogs/blg4.png';

const blogData = [
  {
    id: 1,
    title: "Sustainability and Mental Health: A Symbiotic Relationship",
    description: "In today's fast-paced world, urbanization, pollution, and...",
    image: blg1, 
    fullDescription: `In today's fast-paced world, the pressures of urbanization, pollution, and the relentless pace of daily life can weigh heavily on our mental well-being. Amidst these challenges, studies increasingly reveal that connecting with nature and adopting eco-friendly practices can play a transformative role in reducing mental stress and promoting a healthier mind. Reconnecting with natural spaces—whether through city parks, green rooftops, or even potted plants at home—can provide us with a calming refuge, helping to ease the burdens of our modern routines.

Engaging in sustainable practices, like fostering clean, green spaces, reducing carbon footprints, and embracing environmentally friendly habits, not only preserves the planet but also strengthens our mental resilience. These actions allow us to actively participate in caring for the Earth, fostering a sense of purpose and well-being that can counteract stress and enhance our quality of life.

Beyond individual efforts, community-driven environmental initiatives also have profound mental health benefits. When people come together to plant trees, organize clean-up drives, or advocate for green policies, they create a shared sense of purpose and belonging. Such activities not only lead to tangible ecological improvements but also build social bonds, reduce feelings of isolation, and bring joy. As we explore the symbiotic relationship between sustainability and mental health, this blog emphasizes the power of collective action, demonstrating how a commitment to the planet is also a commitment to personal and communal well-being.`,
  },
  {
    id: 2,
    title: "Tech for Good: Digital Tools for Environmental and Mental Well-being",
    description: "As technology advances, it has become an essential tool for...",
    image: blg2,
    fullDescription: `
As technology advances, it has become an essential tool for raising awareness and fostering action on critical issues like climate change and mental health. From tracking carbon footprints to providing virtual experiences that connect people with nature, digital platforms are reshaping the ways we engage with the environment. These innovations empower individuals to measure and reduce their environmental impact, making eco-friendly choices more accessible and personalized than ever before.

Simultaneously, technology has been a game-changer for mental health. Apps for mindfulness, stress management, and cognitive health are becoming indispensable resources in managing the mental health challenges of modern life. Through features like guided meditation, breathing exercises, and virtual nature immersion, these tools make it easier to incorporate relaxation and mental well-being practices into daily routines. This blog will explore a variety of digital tools—from eco-tracking apps that encourage sustainable choices to mental health support platforms that help manage stress and anxiety—demonstrating how they can collectively foster a more mindful and eco-conscious lifestyle.

With the power of technology, we can improve both our planet's health and our own mental well-being. The integration of these tools into our lives not only helps us make positive changes for the environment but also supports our mental resilience, making technology a crucial ally in the journey toward a healthier, more balanced world.`,
  },
  {
    id: 3,
    title: "Greening Your Mind: The Role of Nature in Reducing Stress",
    description: "Modern life, with its constant demands, has left many individuals experiencing high levels of...",
    image: blg3,
    fullDescription: `Modern life, with its constant demands, has left many individuals experiencing high levels of stress and burnout. Our always-on culture can be overwhelming, and finding ways to unwind and de-stress has never been more crucial. Research has shown that spending time in natural environments can provide profound psychological benefits, helping to lower cortisol levels, induce a state of relaxation, and restore balance to the mind and body.

Studies indicate that activities such as hiking, gardening, or simply spending time in green spaces like parks have been linked to improved mood, reduced anxiety, and enhanced cognitive functioning. Immersing ourselves in natural surroundings helps us reconnect with a slower, more mindful way of living, giving our minds a much-needed break from constant digital stimuli. This blog explores these mental health benefits in detail, discussing the concept of "ecotherapy" and how exposure to nature serves as a natural remedy for stress.

The concept of "ecotherapy" is based on the idea that connecting with nature can be a therapeutic experience, helping individuals feel grounded and improving mental clarity. By spending even a few minutes outdoors each day, we can enhance our resilience to stress and increase our overall well-being.

Practical tips are provided for incorporating nature into daily routines, whether it’s by taking mindful walks in the park, creating a small garden at home, or taking vacations in nature-filled locations. For those with busy schedules, even brief exposure to sunlight and fresh air can make a difference. This blog emphasizes the need to reconnect with the natural world as a powerful, accessible tool for mental well-being, making it clear that nature's healing power is available to everyone, regardless of lifestyle.

`,
  },
  {
    id: 4,
    title: "The Power of Collective Action: Shaping Mental Well-being and the Environment",
    description: "Addressing environmental issues requires more than just...",
    image: blg4,
    fullDescription: `Addressing environmental issues goes beyond individual effort; it calls for the strength and impact of community collaboration. When people come together to support the planet—whether through local clean-up drives, tree planting events, or broader environmental activism—they contribute not only to tangible ecological improvements but also to their own mental well-being. Participating in community-driven environmental efforts fosters a shared sense of purpose, unity, and achievement, all of which play a significant role in emotional health and resilience.

The benefits of collective action are well-supported by research, which shows that people engaged in volunteer work or community-focused environmental projects report increased happiness, a stronger sense of belonging, and reduced feelings of loneliness. Engaging with others on shared environmental goals can combat isolation, providing participants with a supportive social network and a reason to come together. This connection to others who care about the same cause can be incredibly fulfilling and serve as a powerful motivator.

Community-driven environmental initiatives can profoundly impact local ecosystems while simultaneously uplifting the mental health of individuals involved. Examples from around the world, such as beach clean-up campaigns, reforestation projects, and pollution awareness events, demonstrate how collective efforts improve ecological balance. These projects also allow individuals to see the immediate results of their work—cleaner parks, healthier plants, and more vibrant natural spaces—which reinforces a sense of accomplishment and commitment to protecting their environment.`,
  },
];

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative w-[80vw] max-h-[80vh] bg-white rounded-3xl shadow-lg flex flex-col p-10 mx-4 slide-in-up">
        
        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 text-white bg-green-600 rounded-full px-[20px] py-[10px] hover:bg-green-800 transition-all duration-75 shadow-lg text-2xl shadow-black"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 md:text-center text-green-700">{blog.title}</h2>
        
        <div className="overflow-y-auto pr-4 md:pr-0 text-gray-700 text-lg" style={{ maxHeight: 'calc(80vh - 100px)' }}>
          {blog.fullDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = `
@keyframes slideInUp {
  0% {
    opacity: 30%;
    transform: translateX(-100%);
  }

  100% {
    opacity: 100%;
    transform: translateX(0);
  }
}

.slide-in-up {
  animation: slideInUp 0.5s ease-out;
}
`;

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedBlog]);

  return (
    <div className='flex flex-col'>
      <div className="text-2xl self-center w-30 font-bold text-center border-b-4 border-[#0a9698] rounded-sm my-10">
        Blogs
      </div>
      <div className="flex flex-wrap justify-center items-start gap-6 pb-24 px-4">
        {blogData.map((blog) => (
          <div key={blog.id} className="m-4">
            <div
              onClick={() => setSelectedBlog(blog)}
              className="w-80 cursor-pointer transition-all shadow-lg duration-300 bg-white rounded-lg overflow-hidden hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold p-4">{blog.title}</h2>
              <p className="text-gray-700 px-4">{blog.description}</p>
              <div className="flex justify-center my-3">
                <button
                  className="px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-all duration-75"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
        {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
        <style>{styles}</style>
      </div>
    </div>
  );
};

export default Blog;
