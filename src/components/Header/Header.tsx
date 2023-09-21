import React from 'react';
import {BsCode} from 'react-icons/bs';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = () => {
  // const handleDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = '/resume.pdf'; // Replace with the actual path to your PDF file
  //   link.download = 'JaewonYang_Resume.pdf'; // Change the downloaded file name if needed
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const openPdfInNewTab = () => {
    window.open('/portfolio/jaewonYang_resume.pdf', '_blank'); // Replace with the actual path to your PDF file
  };


  const handleNavigation = (event:any, targetId:string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <header className='flex justify-between py-7'>
      <h1 className="text-5xl font-extrabold">
      <a href="/" className='text-4xl hover:scale-110'>
          <div className='hover:scale-150 transform duration-500'>
            <BsCode/>
          </div>
      </a>
      </h1>
      <ul className="flex py-2">
        <li className="mr-6">
          <a className="text-2xl link link-underline link-underline-black leading-tight" onClick={(e) => handleNavigation(e, 'Skills')} href="#Skills">Skills</a>
        </li>
        <li className="mr-6">
          <a className="text-2xl link link-underline link-underline-black leading-tight" onClick={(e) => handleNavigation(e, 'Projects')} href="#Projects">Projects</a>
        </li>
        <li className="mr-6">
          <a className="text-2xl link link-underline link-underline-black leading-tight" onClick={(e) => handleNavigation(e, 'Contacts')} href="#Contacts">Contact</a>
        </li>
        <li className="mr-6">
          <a className="text-2xl link link-underline link-underline-black leading-tight cursor-pointer" onClick={() => openPdfInNewTab()} >Resume</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;