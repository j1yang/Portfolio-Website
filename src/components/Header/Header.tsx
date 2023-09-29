import React, { useState } from 'react';
import {BsCode} from 'react-icons/bs';
import {CgMenu, CgClose} from 'react-icons/cg';

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
    window.open('/portfolio/JaewonYang_cv.pdf', '_blank'); // Replace with the actual path to your PDF file
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

  const [menuOpen, setMenuOpen] =useState(false);
  const toggleMenu =  (menuOpen: boolean) => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='flex justify-between my-7'>
      <h1 className="text-5xl font-extrabold">
        <a href="/" className='text-4xl hover:scale-110'>
          <div className='hover:scale-150 transform duration-500 ml-5'>
            <BsCode/>
          </div>
        </a>
      </h1>
      <button className='mr-5 lg:hidden relative' onClick={() => toggleMenu(menuOpen)}>
        {menuOpen? <CgClose style={{ height: 28, width: 28}}/> : <CgMenu style={{ height: 28, width: 28}}/>}
        {menuOpen && 
          <ul className="absolute flex flex-col right-[0] top-[40px] text-right lg:static lg:flex lg:py-2 z-10">
              <a className="pt-1 text-2xl" onClick={(e) => handleNavigation(e, 'Skills')} href="#Skills">Skills</a>
              <a className="pt-1 text-2xl" onClick={(e) => handleNavigation(e, 'Projects')} href="#Projects">Projects</a>
              <a className="pt-1 text-2xl" onClick={(e) => handleNavigation(e, 'Feedbacks')} href="#Feedbacks">Testimonials</a>
              <a className="pt-1 text-2xl" onClick={(e) => handleNavigation(e, 'Contacts')} href="#Contacts">Contact</a>
              <a className="pt-1 text-2xl" onClick={() => openPdfInNewTab()} >CV</a>
          </ul>    
        }
      </button>
      <ul className="hidden lg:static lg:flex lg:py-2">
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
            <a className="text-2xl link link-underline link-underline-black leading-tight cursor-pointer" onClick={() => openPdfInNewTab()} >CV</a>
          </li>
        </ul>    
    </header>
  );
};

export default Header;