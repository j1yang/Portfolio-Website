import React from 'react';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <section className='w-[100%] p-10 '>
      <footer className='mx-auto px-auto text-center'>
      <p>{text}</p>
    </footer>
    </section>
  );
};

export default Footer;