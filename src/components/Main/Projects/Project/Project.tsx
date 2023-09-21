import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineLink} from 'react-icons/ai';

interface ProjectProps {
  img: string;
  title: string;
  text: string;
  github?: string;
  live?: string;
  flexDir?: string;
}

const Project: React.FC<ProjectProps> = ({img, title, text, github, live, flexDir }) => {
  return (
    <div className={`w-[900px] h-[320px] flex mx-auto mb-14 ${flexDir}`}>
      <img className='w-[400px] h-[320px] object-cover rounded-lg shadow-2xl hover:scale-110 transition duration-500 my-auto' src={img} alt="" />
      <div className='w-[70px]'></div>
      <div className='flex flex-col w-[450px] my-auto'>
        <div className='h-[280px]'>
          <h3 className='text-2xl mb-4 font-semibold'>{title}</h3>
          <p>{text}</p>
        </div>
        <div className='h-[40px] pt-4 flex'>
          <a href={github} target='_blank' className='mr-4 hover:scale-110 transition duration-500'>
            <BsGithub style={{color: '#666666', height: 27, width: 27}}/>
          </a>
          <a href={live} target='_blank' className='hover:scale-110 transition duration-500'>
            <AiOutlineLink style={{color: '#666666', height: 27, width: 27}}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;