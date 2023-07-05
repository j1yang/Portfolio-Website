import React from 'react';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <section className='w-[100%] p-10'>
      <footer >
      <p>{text}</p>
    </footer>
    </section>
  );
};

export default Footer;