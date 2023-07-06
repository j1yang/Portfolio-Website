import React from 'react';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <section className='w-[100%] p-10 pb-4 '>
      <footer className='mx-auto px-auto text-center text-xs font-semibold'>
      <p>{text}</p>
    </footer>
    </section>
  );
};

export default Footer;