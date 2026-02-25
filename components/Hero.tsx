"use client";
import React from 'react'
import Buttons from './Buttons'
import { motion, Variants } from 'framer-motion'

const Hero = () => {
  const titlePart1 = "Web Developer based in ";
  const titlePart2 = "Sweden";
  const description = "Specialiserad på att bygga framtidens digitala upplevelser med fokus på prestanda och modern design. Specialiserad på att bygga framtidens digitala upplevelser med fokus på prestanda och modern design.";

  // Container för RUBRIKENS bokstäver
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline-block",
    },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 3.5 
      }
    }
  };

  return (
    <section className='relative flex min-h-[80vh] items-center justify-center px-6 py-20 overflow-hidden'>
      <div className='z-10 w-full max-w-7xl text-center md:text-left'> 
        <div className='space-y-4'>
          <motion.h1
            className='text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl'
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {titlePart1.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br className='hidden md:block' />
            {titlePart2.split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={letter}
                className='text-[#1fe96c] drop-shadow-[0_0_15px_rgba(31,233,108,0.5)]'
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className='mx-auto text-base text-gray-400 md:mx-0 md:text-xl max-w-2xl'
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3.7 }} 
        >
          <div className="mt-8">
            <Buttons 
              primaryText='View Projects'
              primaryLink='#projects'
              secondaryText='Contact me'
              secondaryLink='#contact'
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero