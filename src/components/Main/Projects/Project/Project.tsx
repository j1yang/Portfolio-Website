import React from 'react';
// import {BsGithub} from 'react-icons/bs';
// import {AiOutlineLink} from 'react-icons/ai';

interface ProjectProps {
  img: string;
  title: string;
  text: string;
  github?: string;
  live?: string;
  flexDir?: string;
}

const Project: React.FC<ProjectProps> = ({img, title, text,  flexDir }) => {
  return (
    <div>
      {/* MOBILE */}
      <div className={`w-[300px] h-[780px] flex flex-col mx-auto mb-14 ${flexDir} md:hidden`}>
        <img className='w-[400px] h-[290px] object-cover rounded-lg shadow-2xl ' src={img} alt="" />
          <div className='flex flex-col w-[300px] my-auto '>
            <div className='h-[400px]'>
              <h3 className='text-2xl mb-4 font-semibold text-center'>{title}</h3>
              <p className='px-3'>{text}</p>
            </div>
        </div>
      </div>
      {/* MD */}
      <div className={`hidden w-[500px] h-[700px] md:flex flex-col mx-auto mb-14 ${flexDir} md:block lg:hidden`}>
        <img className='w-[500px] h-[350px] object-cover rounded-lg shadow-2xl ' src={img} alt="" />
          <div className='flex flex-col w-[450px] mx-auto mt-10'>
            <div className='h-[100px]'>
              <h3 className='text-2xl mb-4 font-semibold text-center'>{title}</h3>
              <p className='px-3'>{text}</p>
            </div>
        </div>
      </div>
      {/* LARGE */}
      <div className={`hidden w-[900px] h-[320px] lg:flex ${flexDir} mx-auto mb-14  lg:static`}>
        <img className='w-[400px] h-[320px] object-cover rounded-lg shadow-2xl hover:scale-110 transition duration-500 my-auto' src={img} alt="" />
        <div className='w-[70px]'></div>
        <div className='flex flex-col w-[450px] my-auto'>
          <div className='h-[280px]'>
            <h3 className='text-2xl mb-4 font-semibold'>{title}</h3>
            <p>{text}</p>
          </div>
          {/* Links HERE LATER */}
        </div>
      </div>
    </div>
  );
};

export default Project;

{/* <div className='h-[40px] pt-4 flex'>
      <a href={github} target='_blank' className='mr-4 hover:scale-110 transition duration-500'>
        <BsGithub style={{color: '#666666', height: 27, width: 27}}/>
      </a>
      <a href={live} target='_blank' className='hover:scale-110 transition duration-500'>
        <AiOutlineLink style={{color: '#666666', height: 27, width: 27}}/>
      </a>
    </div> */}