import React from 'react'
import Buttons from './Buttons'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='relative flex min-h-[80vh] items-center justify-center px-6 py-20'>
      <div className='z-10 w-full max-w-7xl text-center md:text-left'> 
        <div className='space-y-4'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl'>
            Web Developer based <br /> 
            in <span className="text-[#1fe96c] drop-shadow-[0_0_15px_rgba(31,233,108,0.5)]">Sweden</span>
          </h1>
          <p className='mx-auto text-base text-gray-400 md:mx-0 md:text-xl'>
            Specialiserad på att bygga framtidens digitala upplevelser med fokus på prestanda och modern design. 
            Specialiserad på att bygga framtidens digitala upplevelser med fokus på prestanda och modern design.
            Specialiserad på att bygga framtidens digitala upplevelser med fokus på prestanda och modern design.
          </p>
        </div>
        <Buttons 
          primaryText='View Projects'
          primaryLink='#projects'
          secondaryText='Contact me'
          secondaryLink='#contact'
        />
      </div>
    </section>
  )
}

export default Hero