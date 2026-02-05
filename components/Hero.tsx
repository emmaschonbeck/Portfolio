import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='relative flex min-h-[80vh] items-center justify-center px-6 py-20'>
      <div className='z-10 max-w-4xl text-center md:text-left'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl'>
            Web Developer <br /> 
            based in <span className="text-[#1fe96c] drop-shadow-[0_0_15px_rgba(31,233,108,0.5)]">Sweden</span>
          </h1>
          <p className='mx-auto max-w-md text-base text-gray-400 md:mx-0 md:text-xl'>
            Specialiserad på att bygga framtidens digitala upplevelser med fokus på prestanda och modern design.
          </p>
        </div>
        <div className='mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start'>
          <button className='group relative overflow-hidden rounded-full bg-[#1fe96c] px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(31,233,108,0.4)] active:scale-95'>
            View Projects
          </button>
          <button className='rounded-full border-2 border-[#1fe96c]/30 px-8 py-4 font-bold text-[#1fe96c] transition-all hover_border-[#1fe96c] hover:bg-[#1fe96c]/10 active:scale-95'>
            Contact me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero