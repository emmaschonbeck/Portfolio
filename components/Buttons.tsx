"use client";
import React from 'react'

type Props = {
  primaryText: string;
  primaryLink: string;
  secondaryText: string;
  secondaryLink: string;
}

const Buttons = ({ primaryText, primaryLink, secondaryText, secondaryLink }: Props) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const targetId = link.replace('#', '');
      const elem = document.getElementById(targetId);
      
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <div className='mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start'>
      <a 
        href={primaryLink}
        onClick={(e) => handleScroll(e, primaryLink)}
        className='group relative overflow-hidden rounded-full bg-[#1fe96c] px-8 py-4 font-bold text-center text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(31,233,108,0.4)] active:scale-95'
      >
        {primaryText}
      </a>
      <a 
      href={secondaryLink}
      onClick={(e) => handleScroll(e, secondaryLink)}
      className='rounded-full border-2 border-[#1fe96c]/30 px-8 py-4 font-bold text-center text-[#1fe96c] transition-all hover:border-[#1fe96c] hover:bg-[#1fe96c]/10 active:scale-95'
      >
        {secondaryText}
      </a>
    </div>
  )
}

export default Buttons