import React from 'react';
import Project from './Project/Project';
import portfolio from '../../../portfolio';
interface MainProps {
}

const Projects: React.FC<MainProps> = ({ }) => {
  return (
    <section id='Projects' className='w-[100%] py-10'>
      <h2 className='text-4xl font-extrabold text-center'>Projects</h2>
      <div className='p-14'>
        {portfolio.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            text={project.description}
            img={project.imageUrl}
            github={project.githubLink}
            live={project.websiteLink}
            flexDir={project.css}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;