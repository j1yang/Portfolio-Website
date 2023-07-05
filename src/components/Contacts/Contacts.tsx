import React from 'react';
import { SocialIcon } from 'react-social-icons';

interface ContactsProps {
}

const Contacts: React.FC<ContactsProps> = ({ }) => {

  return (
    <section id='Contacts' className='w-[100%] p-10'>
      <h2 className='text-4xl font-extrabold'>Contact me!</h2>
      <div className='ml-3 mt-3'>
      <h3 className='text-2xl font-bold'>Jay Yang | Software Developer @VARLab</h3>

        <h3 className='text-xl mb-4 ml-2'>Leaning Is Always Fun Thing 😁</h3>
        <div className='w-[200px] h-7 flex justify-between mb-4 text-xl ml-2'>
          <svg className='my-auto' fill="none" stroke="currentColor"width={30} height={30} strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
          </svg>
          <h3 className='my-auto '>Waterloo, Canada</h3>
        </div>
        <div className='w-[140px] flex justify-between ml-2'>
          <SocialIcon style={{ height: 40, width: 40 }} className='hover:scale-110 ease-in-out transition-transform' url="https://www.linkedin.com/in/jaewon-yang/"/>
          <SocialIcon style={{ height: 40, width: 40 }} className='hover:scale-110 ease-in-out transition-transform' url="https://github.com/j1yang"/>
          <SocialIcon style={{ height: 40, width: 40 }} className='hover:scale-110 ease-in-out transition-transform' url="mailto:yangjay0129@gmail.com"/>
        </div>
      </div>
      
    </section>
  );
};

export default Contacts;