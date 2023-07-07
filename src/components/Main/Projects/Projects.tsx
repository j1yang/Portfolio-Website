import React, {useState} from 'react';
import Project from './Project/Project';
interface MainProps {
}

const Projects: React.FC<MainProps> = ({ }) => {
  return (
    <section id='Projects' className='w-[100%] p-10'>
      <h2 className='text-4xl font-extrabold text-center'>Projects</h2>
      <div className='p-14'>
      <Project 
          img={"https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg"}
          title={'Project Title.'}
          text={'lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem '}
          github={"https://github.com/j1yang"}
          live={"https://github.com/j1yang"}
          flexDir={""}        
      />
      <Project 
          img={"https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg"}
          title={'Project Title.'}
          text={'lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem '}
          github={"https://github.com/j1yang"}
          live={"https://github.com/j1yang"}
          flexDir={"flex-row-reverse"}        
      />
      <Project 
          img={"https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg"}
          title={'Project Title.'}
          text={'lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem '}
          github={"https://github.com/j1yang"}
          live={"https://github.com/j1yang"}
          flexDir={""}        
      />
      <Project 
          img={"https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg"}
          title={'Project Title.'}
          text={'lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem '}
          github={"https://github.com/j1yang"}
          live={"https://github.com/j1yang"}
          flexDir={"flex-row-reverse"}        
      />
      <Project 
          img={"https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg"}
          title={'Project Title.'}
          text={'lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem lorem lorem lorem loremlorem loremloremlorem lorem '}
          github={"https://github.com/j1yang"}
          live={"https://github.com/j1yang"}
          flexDir={""}        
      />
      </div>
    </section>
  );
};

export default Projects;