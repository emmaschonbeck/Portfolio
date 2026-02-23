import React from 'react';

type Props = {}

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
   <footer className='bg-black py-6 px-4 mt-12'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
      <div className='text-gray-500 text-sm font-medium cursor-default'>
        @ {currentYear} Emma Schönbeck. Built with <span className='text-[#00FF85]'>React</span> & <span className='text-[#00FF85]'>Tailwind</span>.
      </div>

      <div className='flex gap-8'>
        <a 
          href="#"
          className='text-gray-500 hover:text-[#00FF85] text-sm transition-colors duration-300'
          >
            Privacy Policy
        </a>
        <a 
          href="#"
          className='text-gray-500 hover:text-[#00FF85] text-sm transition-colors duration-300'
          >
            Terms of Service
        </a>
      </div>
    </div>
   </footer>
  );
};

export default Footer;