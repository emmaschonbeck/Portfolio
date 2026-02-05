"use client"

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='relative flex justify-between items-center py-4 px-6 bg-transparent z-50'>
      <h3 className='font-bold text-white uppercase tracking-widest'>Emma Schönbeck</h3>

      <div className='flex items-center gap-8'>
        <nav className='hidden md:block'>
          <ul className='flex gap-6 text-white'>
            <li className='cursor-pointer hover:text-gray-400'>About</li>
            <li className='cursor-pointer hover:text-gray-400'>Projects</li>
            <li className='cursor-pointer hover:text-gray-400'>Skills</li>
          </ul>
        </nav>
        <button className='hidden md:block text-white px-4 py-1 rounded font-medium cursor-pointer border border-[#1fe96c]'>
          Let's Talk
        </button>
        <button className='md:hidden text-white cursor-pointer' onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-black border-l border-[#434343] z-[70] p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-end mb-8'>
          <button onClick={() => setIsOpen(false)} className='text-white cursor-pointer'>
            <X size={28} />
          </button>
        </div>
        <ul className='flex flex-col gap-8 text-white text-xl font-medium'>
          <li onClick={() => setIsOpen(false)} className='cursor-pointer'>About</li>
          <li onClick={() => setIsOpen(false)} className='cursor-pointer'>Projects</li>
          <li onClick={() => setIsOpen(false)} className='cursor-pointer'>Skills</li>
          <li>
            <button className='w-full text-white px-4 py-3 rounded font-medium border border-[#1fe96c]'>
              Let's Talk
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header