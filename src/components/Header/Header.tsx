import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  
  return (
    <header className='flex justify-between'>
      <h1 className="text-5xl font-extrabold">
        {title} 
      </h1>
      <ul className="flex py-2">
        <li className="mr-6">
          <a className="text-2xl link link-underline link-underline-black leading-tight" href="#">About me</a>
        </li>
        <li className="mr-6">
          <a className="text-2xl link link-underline link-underline-black leading-tight" href="#">Projects</a>
        </li>
        <li className="mr-6">
          <a className="text-2xl link link-underline link-underline-black leading-tight" target='_blank' href="https://www.linkedin.com/in/jaewon-yang/">LinkedIn</a>
        </li>
        <li className="mr-6">
          <a className="text-2xl link link-underline link-underline-black leading-tight" target='_blank' href="https://github.com/j1yang">Github</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;