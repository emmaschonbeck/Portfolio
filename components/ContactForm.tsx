import React from 'react';
import { Send, Github, Linkedin } from 'lucide-react';

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <section id='contact' className='bg-black text-white py-24 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='mb-12'>
          <h2 className='text-4xl font-bold mb-4'>Get In Touch</h2>
          <p className='text-gray-400'>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <form className='space-y-6 text-left'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-mono text-[#00FF85] uppercase tracking-widest'>Name</label>
              <input 
                type="text"
                placeholder='John Doe'
                className='bg-[#111111] border border-gray-800 rounded-xl p-4 focus:border-[#00FF85] focus:outline-none transition-colors duration-300' 
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-mono text-[#00FF85] uppercase tracking-widest'>Email</label>
              <input 
                type="text"
                placeholder='john@example.com'
                className='bg-[#111111] border border-gray-800 rounded-xl p-4 focus:border-[#00FF85] focus:outline-none transition-colors duration-300' 
              />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-mono text-[#00FF85] uppercase tracking-widest'>Message</label>
            <textarea
              rows={6}
              placeholder='Your message here...'
              className='bg-[#111111] border border-gray-800 rounded-xl p-4 focus:border-[#00FF85] focus:outline-none transition-colors duration-300 resize-none'
            ></textarea>
          </div>
          <button
            type='submit'
            className='cursor-pointer w-full bg-[#00FF85] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,255,133,0.4)] hover:brightness-110 transition-all duration-300'
          >
            Send Message
            <Send size={18} />
          </button>
        </form>

        <div className='mt-16 flex justify-center gap-8'>
          <a 
            href="https://github.com/emmaschonbeck"
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-[#00FF85] transition-colors duration-300'
          >
            <Github size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/emma-sch%C3%B6nbeck-06348a221/?locale=en_US" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-gray-500 hover:text-[#00FF85] transition-colors duration-300'
          >
            <Linkedin size={32} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;