"use client";
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

type Props = {}

const FeaturedProjects = (props: Props) => {
  const projects = [
    {
      title: "E-commerce",
      description: "Full-stack analytics tool for small business owners to track inventory and sales.",
      tags: ["REACT", "RECHARTS", "NODE.JS"],
      image: "/images/placeholder-img.jpg",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Social Media API",
      description: "A robust REST API featuring JWT authentication, real-time notifications, and media storage.",
      tags: ["EXPRESS", "MONGODB", "DOCKER"],
      image: "/images/placeholder-img.jpg",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "TaskFlow App",
      description: "Productivity suite with drag-and-drop boards, calendar integration, and team collaboration.",
      tags: ["TYPESCRIPT", "TAILWIND"],
      image: "/images/placeholder-img.jpg",
      liveLink: "#",
      codeLink: "#"
    }
  ];

  // Animation för själva korten
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.4, // Skapar en "trappstegs-effekt" (stagger)
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className='text-white py-25 px-6'>
      <div className='max-w-7xl mx-auto cursor-pointer'>

        {/* Animation på rubriken */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className='mb-12'
        >
          <h2 className='text-3xl font-bold mb-4'>Featured Projects</h2>
          <p className='text-gray-400 text-lg'>Selection of my recent web development work.</p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }} // Triggas 100px innan den syns helt
              variants={cardVariants}
              className='flex flex-col h-full p-1 group bg-[#111111] rounded-2xl border border-gray-800 hover:border-[#00FF85] transition-all duration-300 overflow-hidden'
            >
              <div className='aspect-video bg-gray-900 overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='rounded-t-2xl w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' 
                />
              </div>
              
              <div className='p-8 flex flex-col grow'>
                <h3 className='min-h-10 text-2xl font-bold mb-4'>{project.title}</h3>
                <p className='text-gray-400 mb-6 line-clamp-3 h-18'>{project.description}</p>

                <div className='flex flex-wrap gap-2 min-h-5'>
                  {project.tags.map(tag => (
                    <span key={tag} className='text-[10px] tracking-widest font-bold px-3 py-1 border border-[#00FF85]/40 text-[#00FF85] rounded bg-[#00FF85]/5'>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='mt-auto pt-7 flex gap-3'>
                  <a 
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 flex items-center justify-center gap-2 bg-[#1fe96c] text-black text-xs font-bold py-3 rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(31,233,108,0.3)] active:scale-95'
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                  <a 
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 flex items-center justify-center gap-2 border border-[#1fe96c]/30 text-[#1fe96c] text-xs font-bold py-3 rounded-xl transition-all hover:bg-[#1fe96c]/10 hover:border-[#1fe96c] active:scale-95'
                  >
                    Source <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects;