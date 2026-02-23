import React from 'react';

type Props = {}

const Skills = (props: Props) => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Typescript", "Next.js", "Tailwind CSS", "HTML5/CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Design",
      skills: ["Git", "Figma"]
    }
  ];

  return (
    <section className='bg-black text-white py-24 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-4'>Tech Stack</h2>
          <div className='w-20 h-1 bg-[#00FF85] rounded-full'></div>
          <p className='text-gray-400 mt-6 text-lg max-w-2xl'>
            A specialized selection of technologies I use to bring modern digital experiences to life.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {skillCategories.map((category, index) => (
            <div key={index} className='space-y-6'>
              <h3 className='text-[#00FF85] font-mono text-sm tracking-[0.2em] uppercase'>
                {category.title}
              </h3>
              <div className='flex flex-col gap-4'>
                {category.skills.map((skill) => (
                  <div key={skill} className='group flex items-center gap-3'>
                    <div className='w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#00FF85] group-hover:shadow-[0_0_8px_#00FF85] transition-all duration-300'></div>
                    <span className='text-gray-300 text-lg group-hover:text-white transition-colors duration-300 cursor-default'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;