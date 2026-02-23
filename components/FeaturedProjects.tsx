import React from 'react';

type Props = {}

const FeaturedProjects = (props: Props) => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "Full-stack analytics tool for small business owners to track inventory and sales.",
      tags: ["REACT", "RECHARTS", "NODE.JS"],
      image: "/images/placeholder-img.jpg"
    },
    {
      title: "Social Media API",
      description: "A robust REST API featuring JWT authentication, real-time notifications, and media storage.",
      tags: ["EXPRESS", "MONGODB", "DOCKER"],
      image: "/images/placeholder-img.jpg"
    },
    {
      title: "TaskFlow App",
      description: "Productivity suite with drag-and-drop boards, calendar integration, and team collaboration.",
      tags: ["TYPESCRIPT", "POSTGRESQL", "TAILWIND"],
      image: "/images/placeholder-img.jpg"
    }
  ];

  return (
    <section className='text-white py-20 px-6'>
      <div className='max-w-7xl mx-auto cursor-pointer'>

        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Featured Projects</h2>
          <p className='text-gray-400 text-lg'>Selection of my recent web development work.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {projects.map((project, index) => (
            <div key={index} className='p-1 group bg-[#111111] rounded-2xl border border-gray-800 hover:border-[#00FF85] transition-all duration-300 overflow-hidden'>
              <div className='aspect-video bg-gray-900 overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='rounded-t-2xl w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' 
                />
              </div>
              <div className='p-8'>
                <h3 className='text-2xl font-bold mb-4'>{project.title}</h3>
                <p className='text-gray-400 mb-6 line-clamp-3'>{project.description}</p>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map(tag => (
                    <span key={tag} className='text-[10px] tracking-widest font-bold px-3 py-1 border border-[#00FF85]/40 text-[#00FF85] rounded bg-[#00FF85]/5'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects;