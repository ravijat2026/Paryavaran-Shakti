import React, { useState, useEffect } from 'react';
import blg1 from '../components/images/blogs/blg1.jpg'; 
import blg2 from '../components/images/blogs/blg2.jpg'; 
import blg3 from '../components/images/blogs/blg3.jpg';
import blg4 from '../components/images/blogs/blg4.png'; 

const blogData = [
  {
    id: 1,
    title: "Sustainability and Mental Health: A Symbiotic Relationship",
    description: "In today's fast-paced world, urbanization, pollution, and the constant hustle can take a toll...",
    image: blg1, 
    fullDescription: "In today's fast-paced world, urbanization, pollution, and the constant hustle can take a toll on our mental well-being. However, studies show that a connection to nature and eco-friendly practices can play a vital role in alleviating mental stress. By fostering clean, green spaces, reducing carbon footprints, and adopting sustainable habits, we not only preserve the planet but also enhance our mental resilience. This blog highlights various ways to create a healthier environment—like planting trees, reducing waste, and supporting eco-friendly policies—that can reduce anxiety, increase happiness, and promote a sense of peace. The goal is to showcase the undeniable link between environmental sustainability and mental health, and how small lifestyle changes can lead to long-term positive impacts on both the planet and our minds.",
  },
  {
    id: 2,
    title: "Tech for Good: Digital Tools for Environmental and Mental Well-being",
    description: "As technology advances, it has become an essential tool for raising awareness and fostering action...",
    image: blg2,
    fullDescription: "As technology advances, it has become an essential tool for raising awareness and fostering action on critical issues like climate change and mental health. Digital platforms now offer ways to measure our environmental impact, reduce our carbon footprint, and connect with nature through virtual experiences. Simultaneously, apps for mindfulness, stress management, and cognitive health are helping individuals tackle the mental health challenges that accompany modern life. This blog will explore a variety of digital tools, such as eco-tracking apps, mental health support platforms, and even virtual nature experiences, showing how they work in tandem to help individuals lead more mindful, eco-conscious lives. With the power of technology, we can improve both our planet's well-being and our own mental health.",
  },
  {
    id: 3,
    title: "Greening Your Mind: The Role of Nature in Reducing Stress",
    description: "Modern life, with its constant demands, has left many individuals experiencing high levels of...",
    image: blg3,
    fullDescription: `Modern life, with its constant demands, has left many individuals experiencing high levels of stress and burnout. However, research has shown that spending time in natural environments can provide profound psychological benefits, helping to lower cortisol levels and induce a state of relaxation. Activities such as hiking, gardening, or even spending time in green spaces like parks have been linked to improved mood, reduced anxiety, and better cognitive functioning. This blog explores these mental health benefits in detail, discussing the concept of "ecotherapy" and how exposure to nature serves as a natural remedy for stress. Practical tips are provided for incorporating nature into daily routines, whether it’s by taking mindful walks in the park, creating a small garden at home, or taking vacations in nature-filled locations. This blog emphasizes the need to reconnect with the natural world as a powerful, accessible tool for mental well-being.`,
  },
  {
    id: 4,
    title: "The Power of Collective Action: Shaping Mental Well-being and the Environment",
    description: "Addressing environmental issues requires more than just...",
    image: blg4,
    fullDescription: "Addressing environmental issues requires more than just individual effort; it demands community collaboration. From local clean-up drives and tree plantation events to larger-scale environmental activism, coming together as a community to protect the planet not only leads to tangible ecological improvements but also boosts the mental well-being of participants. Collective action fosters a sense of belonging, purpose, and accomplishment, which is crucial for emotional health. Research has shown that people who engage in volunteer work or community-driven environmental projects experience higher levels of happiness, reduced feelings of isolation, and a sense of achievement. This blog discusses the mental health benefits of collective action, focusing on how communities that work together to protect their environment create a shared sense of purpose. It also highlights specific community-driven environmental projects and how they have positively impacted both local ecosystems and the mental health of individuals involved.",
  },
];

const Blog = () => {
  const [fullScreenId, setFullScreenId] = useState(null);

  // Add/remove body overflow style when blog is in fullscreen
  useEffect(() => {
    if (fullScreenId !== null) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = ''; // Reset overflow
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [fullScreenId]);

  const handleCardClick = (id) => {
    setFullScreenId(fullScreenId === id ? null : id); // Toggle fullscreen
  };

  return (
    <div className="flex flex-wrap justify-center items-start relative py-24">
      {blogData.map((blog) => (
        <div key={blog.id} className="m-4">
          {/* Anchor tag to scroll to the blog section */}
          <a href={`#blog-${blog.id}`} onClick={() => handleCardClick(blog.id)}>
            {/* Overlay when in full-screen mode */}
            {fullScreenId === blog.id && (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 z-[60]"
                onClick={() => handleCardClick(blog.id)}
              ></div>
            )}

            {/* Blog Card */}
            <div
              id={`blog-${blog.id}`}
              className={`transition-all shadow-sm duration-300 relative bg-white rounded-lg overflow-hidden p-0 max-h-[70vh] mt-5
                ${fullScreenId === blog.id ? 'fixed inset-0 max-w-3xl max-h-screen mx-auto my-auto z-[70] overflow-y-visible' : 'w-80 cursor-pointer z-5 hover:scale-105'}`}
            >
              {/* Image (only visible when not in full-screen mode) */}
              {fullScreenId !== blog.id && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[30vh] object-cover rounded-t-lg mb-4"
                />
              )}
              
              <h2 className={`text-xl font-bold pl-6 pr-6 mb-2 ${fullScreenId === blog.id ? 'text-center mt-6 mr-20' : 'text-left mr-0'}`}>
                {blog.title}
              </h2>
              <p className={`text-gray-700 pl-6 pr-6  ${fullScreenId === blog.id ? 'mr-20 mb-5' : 'mr-0 mb-1'}`}>
                {fullScreenId === blog.id
                  ? blog.fullDescription
                  : blog.description}
              </p>

              <div className={`justify-center ${fullScreenId === blog.id ? 'hidden' : 'flex'}`}>
                <button
                  onClick={() => handleCardClick(blog.id)}
                  className="w-[calc(80%-(3rem))] my-3 p-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition-all duration-75"
                >
                  Read More
                </button>
              </div>

              {fullScreenId === blog.id && (
                <button
                  onClick={() => handleCardClick(blog.id)}
                  className="absolute top-6 right-4 text-white bg-green-600 rounded-full px-3 py-1 hover:bg-green-800 transition-all duration-75"
                >
                  Close
                </button>
              )}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
