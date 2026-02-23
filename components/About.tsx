import React from 'react';
import Buttons from './Buttons';

type Props = {}

const About = (props: Props) => {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-[#1fe96c]/20 rounded-full blur-xl group-hover:bg-[#1fe96c]/40 transition duration-500"></div>
          
          <div className="relative w-64 h-64 rounded-full border-2 border-[#1fe96c]/70 overflow-hidden shadow-2xl"> 
            <img 
              src="/images/Portfolie-img-emma.jpg"
              alt="Profile Picture of Emma"
              className="w-full h-full rounded-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Emma <span className="text-[#1fe96c]">Schönbeck</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. 
            </p>
          </div>
          <div className="mt-8">
            <Buttons 
              primaryText="Download CV"
              primaryLink=""
              secondaryText="Contact me"
              secondaryLink="#contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;